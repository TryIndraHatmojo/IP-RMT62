import { useState } from "react";
import { apiModalNekat, getBearerToken } from "../helpers/helpers";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

export default function ProposalCreatePage() {
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

  const navigate = useNavigate();

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
      toast.loading("Mengirim proposal...", {
        position: "top-center",
        theme: "colored",
      });
      const { data } = await apiModalNekat.post("/proposals", payload, {
        headers: {
          Authorization: getBearerToken(),
        },
      });
      toast.dismiss();
      navigate("/proposal/" + data.id);
      // Reset form jika perlu
    } catch (err) {
      toast.error(err.response?.data?.message || "Gagal membuat proposal");
      toast.dismiss();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex min-h-screen w-full justify-center items-center"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <form onSubmit={handleSubmit}>
        <fieldset className="bg-base-200 border-base-300 rounded-box w-full max-w-md border p-6 shadow">
          <legend className="fieldset-legend">Buat Proposal</legend>

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
            {loading ? "Mengirim..." : "Kirim"}
          </button>
        </fieldset>
      </form>
    </div>
  );
}
