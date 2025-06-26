import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProposalById } from "../store/proposalsSlice";
import { apiModalNekat, getBearerToken } from "../helpers/helpers";
import { toast } from "react-toastify";
import { useParams } from "react-router";
import Markdown from "../components/Markdown";

export default function ProposalUpdatePage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { proposal } = useSelector((state) => state.proposals);

  const [businessInterestField, setBusinessInterestField] = useState("");
  const [capital, setCapital] = useState("");
  const [location, setLocation] = useState("");
  const [preference, setPreference] = useState("");
  const [businessGoal, setBusinessGoal] = useState("");
  const [longTermVision, setLongTermVision] = useState("");
  const [targetMarket, setTargetMarket] = useState("");
  const [productUniqueness, setProductUniqueness] = useState("");
  const [mainCompetitors, setMainCompetitors] = useState("");
  const [marketingPlan, setMarketingPlan] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch proposal data on mount
  useEffect(() => {
    if (id) {
      dispatch(fetchProposalById(id));
      console.log("🚀 ~ ProposalUpdatePage ~ proposal:", proposal);
    }
  }, [dispatch, id]);

  // Populate form fields when proposal data is loaded
  useEffect(() => {
    if (proposal.PromptProposal && proposal.PromptProposal.id) {
      setBusinessInterestField(
        proposal.PromptProposal.businessInterestField || ""
      );
      setCapital(proposal.PromptProposal.capital || "");
      setLocation(proposal.PromptProposal.location || "");
      setPreference(proposal.PromptProposal.preference || "");
      setBusinessGoal(proposal.PromptProposal.businessGoal || "");
      setLongTermVision(proposal.PromptProposal.longTermVision || "");
      setTargetMarket(proposal.PromptProposal.targetMarket || "");
      setProductUniqueness(proposal.PromptProposal.productUniqueness || "");
      setMainCompetitors(proposal.PromptProposal.mainCompetitors || "");
      setMarketingPlan(proposal.PromptProposal.marketingPlan || "");
    }
  }, [proposal]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const payload = {
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
      };
      toast.loading("Mengupdate proposal...", {
        position: "top-center",
        theme: "colored",
      });
      const { data } = await apiModalNekat.put(`/proposals/${id}`, payload, {
        headers: {
          Authorization: getBearerToken(),
        },
      });
      toast.dismiss();
      setTimeout(() => {
        toast.success("Proposal berhasil diupdate", {
          position: "top-center",
          theme: "colored",
        });
        dispatch(fetchProposalById(id));
      }, 2000); // Delay to allow toast to show
      // Optionally redirect or update UI
    } catch (err) {
      console.log("🚀 ~ handleSubmit ~ err:", err);
      toast.dismiss();
      setTimeout(() => {
        toast.error(err.response?.data?.message || "Gagal update proposal", {
          position: "top-center",
          theme: "colored",
        });
      }, 2000); // Delay to allow toast to show
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex w-full" style={{ minHeight: "100vh" }}>
      <div className="card  rounded-box grid  grow p-4 mb-3 w-100">
        <Markdown markdownText={proposal.aiOutput}></Markdown>
      </div>
      <div className="divider lg:divider-horizontal"></div>
      <div className="card rounded-box grid grow p-4 mb-3">
        <form onSubmit={handleSubmit}>
          <fieldset className="bg-base-200 border-base-300 rounded-box w-full max-w-md border p-6 shadow">
            <legend className="fieldset-legend">Update Proposal</legend>

            <label className="label">Bidang Minat Bisnis</label>
            <input
              name="businessInterestField"
              value={businessInterestField}
              onChange={(e) => setBusinessInterestField(e.target.value)}
              className="input w-full"
              placeholder="Bidang Minat Bisnis"
            />

            <label className="label mt-4">Modal</label>
            <input
              name="capital"
              type="number"
              value={capital}
              onChange={(e) => setCapital(e.target.value)}
              className="input w-full"
              placeholder="Modal"
            />

            <label className="label mt-4">Lokasi</label>
            <input
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="input w-full"
              placeholder="Lokasi"
            />

            <label className="label mt-4">Preferensi</label>
            <select
              name="preference"
              value={preference}
              onChange={(e) => setPreference(e.target.value)}
              className="input w-full"
            >
              <option value="">Pilih Preferensi</option>
              <option value="offline">Offline</option>
              <option value="online">Online</option>
              <option value="hybird">Hybird (Offline dan Online)</option>
            </select>

            <label className="label mt-4">Tujuan Bisnis</label>
            <input
              name="businessGoal"
              value={businessGoal}
              onChange={(e) => setBusinessGoal(e.target.value)}
              className="input w-full"
              placeholder="Tujuan Bisnis"
            />

            <label
              className="label mt-4 center"
              style={{ textAlign: "center", display: "block" }}
            >
              --- Opsional ---
            </label>

            <label className="label mt-4">Visi Jangka Panjang</label>
            <input
              name="longTermVision"
              value={longTermVision}
              onChange={(e) => setLongTermVision(e.target.value)}
              className="input w-full"
              placeholder="Visi Jangka Panjang"
            />

            <label className="label mt-4">Target Pasar</label>
            <input
              name="targetMarket"
              value={targetMarket}
              onChange={(e) => setTargetMarket(e.target.value)}
              className="input w-full"
              placeholder="Target Pasar"
            />

            <label className="label mt-4">Keunikan Produk</label>
            <input
              name="productUniqueness"
              value={productUniqueness}
              onChange={(e) => setProductUniqueness(e.target.value)}
              className="input w-full"
              placeholder="Keunikan Produk"
            />

            <label className="label mt-4">Pesaing Utama</label>
            <input
              name="mainCompetitors"
              value={mainCompetitors}
              onChange={(e) => setMainCompetitors(e.target.value)}
              className="input w-full"
              placeholder="Pesaing Utama"
            />

            <label className="label mt-4">Rencana Pemasaran</label>
            <input
              name="marketingPlan"
              value={marketingPlan}
              onChange={(e) => setMarketingPlan(e.target.value)}
              className="input w-full"
              placeholder="Rencana Pemasaran"
            />

            <button
              className="btn btn-neutral mt-4 w-full"
              type="submit"
              disabled={loading}
            >
              {loading ? "Mengupdate..." : "Update"}
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
