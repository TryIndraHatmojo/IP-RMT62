const { Proposal, PromptProposal } = require("../models");
const OpenAI = require("openai");
const client = new OpenAI();
const { formatRupiah } = require("../helpers/helper");

class ProposalController {
  static async create(req, res, next) {
    try {
      // Ambil data PromptProposal dari body
      req.body.UserId = req.user.id;
      const {
        businessInterestField,
        capital,
        location,
        preference,
        businessGoal,
        longTermVision,
        targetMarket,
        productUniqueness,
        mainCompetitors,
        marketingPlan,
        UserId,
      } = req.body;

      let response = await ProposalController.createPrompt(req.body);
      response = JSON.parse(response.replace("```json", "").replace("```", ""));

      console.log("🚀 ~ ProposalController ~ create ~ response:", response);
      const promptProposal = await PromptProposal.create({
        businessInterestField,
        capital,
        location,
        preference,
        businessGoal,
        longTermVision,
        targetMarket,
        productUniqueness,
        mainCompetitors,
        marketingPlan,
        UserId,
      });

      const proposal = await Proposal.create({
        UserId,
        title: response.title,
        aiOutput: response.output,
        PromptProposalId: promptProposal.id,
      });

      res.status(201).json(proposal);
    } catch (err) {
      next(err);
    }
  }

  static async createPrompt(dataInput) {
    try {
      dataInput.longTermVision =
        dataInput.longTermVision &&
        ", visi jangka panjang usaha ini adalah " + dataInput.longTermVision;
      dataInput.targetMarket =
        dataInput.targetMarket &&
        ", target pasar yang ingin dijangkau adalah " + dataInput.targetMarket;
      dataInput.productUniqueness =
        dataInput.productUniqueness &&
        ", keunikan produk atau layanan yang ditawarkan adalah " +
          dataInput.productUniqueness;
      dataInput.mainCompetitors =
        dataInput.mainCompetitors &&
        ", pesaing utama dalam industri ini adalah " +
          dataInput.mainCompetitors;
      dataInput.marketingPlan =
        dataInput.marketingPlan &&
        ", rencana pemasaran yang akan diterapkan adalah " +
          dataInput.marketingPlan;

      let input =
        "Buatkan proposal bisnis secara realistis dan detail di dalam bidang " +
        dataInput.businessInterestField +
        " dengan modal " +
        formatRupiah(dataInput.capital) +
        ", berlokasi di " +
        dataInput.location +
        ", untuk usaha " +
        dataInput.preference +
        ", tujuan bisnis " +
        dataInput.businessGoal +
        dataInput.longTermVision +
        dataInput.targetMarket +
        dataInput.productUniqueness +
        dataInput.mainCompetitors +
        dataInput.marketingPlan +
        ". Sertakan:\n" +
        "- Nama Usaha\n" +
        "- Deskripsi\n" +
        "- Strategi Pemasaran\n" +
        "- Modal & Alokasinya\n" +
        "- SWOT\n" +
        "- Rencana 3, 6, 12, dan 36 bulan ke depan\n" +
        "buat output dalam format JSON dengan struktur:{\n" +
        '"title": "Nama Usaha",\n' +
        '"output": "output dari AI dengan format markdown"\n' +
        "} jangan sertakan informasi lain selain JSON murni tanpa pembungkus apa pun";

      const response = await client.responses.create({
        model: "gpt-4.1-nano",
        input,
      });

      return response.output_text;
    } catch (err) {
      throw err;
    }
  }

  static async findAll(req, res, next) {
    try {
      const proposals = await Proposal.findAll({
        include: [PromptProposal],
        where: { UserId: req.user.id },
        order: [["createdAt", "DESC"]],
      });
      res.status(200).json(proposals);
    } catch (err) {
      next(err);
    }
  }

  static async findOne(req, res, next) {
    try {
      const { id } = req.params;
      const proposal = await Proposal.findOne({
        where: { id, UserId: req.user.id },
        include: [PromptProposal],
      });
      if (!proposal) {
        return res.status(404).json({ message: "Proposal not found" });
      }
      res.status(200).json(proposal);
    } catch (err) {
      next(err);
    }
  }
  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      const deleted = await Proposal.destroy({
        where: { id, UserId: req.user.id },
      });
      if (!deleted) {
        return res.status(404).json({ message: "Proposal not found" });
      }
      res.status(200).json({ message: "Proposal deleted successfully" });
    } catch (err) {
      next(err);
    }
  }
  static async update(req, res, next) {
    try {
      const { id } = req.params;
      const proposal = await Proposal.findOne({
        where: { id, UserId: req.user.id },
        include: [PromptProposal],
      });
      if (!proposal) {
        return res.status(404).json({ message: "Proposal not found" });
      }
      const promptProposal = await PromptProposal.findByPk(
        proposal.PromptProposalId
      );

      let response = await ProposalController.createPrompt(req.body);
      response = JSON.parse(response.replace("```json", "").replace("```", ""));

      await promptProposal.update(req.body);

      await proposal.update({
        title: response.title,
        aiOutput: response.output,
      });

      res.status(200).json(proposal);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = ProposalController;
