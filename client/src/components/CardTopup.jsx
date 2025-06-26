import {
  apiModalNekat,
  formatRupiah,
  getBearerToken,
} from "../helpers/helpers";

export default function CardTopup({ limitPackage }) {
  // Fungsi pemanggil pembayaran
  const handlePay = async () => {
    const { data } = await apiModalNekat.post(
      "/generate-midtrans-token/" + limitPackage.id,
      {},
      {
        headers: {
          Authorization: getBearerToken(),
        },
      }
    );
    window.location.href = data.redirect_url;
  };
  return (
    <div className="card bg-base-100 card-border border-base-300 from-base-content/5 bg-linear-to-bl to-50%">
      <div className="card-body gap-4">
        <div className="flex flex-col">
          <h4 className="font-bold tracking-wide opacity-50">
            {limitPackage.name}
          </h4>
          <div>
            <span className="text-4xl font-black">
              {formatRupiah(limitPackage.price)}
            </span>
            <span className="opacity-50"></span>
          </div>
        </div>
        <div className="my-2 flex flex-col text-xs">
          <div className="border-b-accent/5 flex items-center gap-2 border-b pb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="text-success size-4"
            >
              <path
                fillRule="evenodd"
                d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z"
                clipRule="evenodd"
              />
            </svg>
            {limitPackage.limit} Limit API
          </div>
          <div className="border-b-accent/5 flex items-center gap-2 border-b pb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="text-success size-4"
            >
              <path
                fillRule="evenodd"
                d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z"
                clipRule="evenodd"
              />
            </svg>
            {limitPackage.limit} Proposal
          </div>
          <div className="border-b-accent/5 flex items-center gap-2 border-b pb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="text-success size-4"
            >
              <path
                fillRule="evenodd"
                d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z"
                clipRule="evenodd"
              />
            </svg>
            API Access
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="text-error size-4"
            >
              <path
                fillRule="evenodd"
                d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm2.78-4.22a.75.75 0 0 1-1.06 0L8 9.06l-1.72 1.72a.75.75 0 1 1-1.06-1.06L6.94 8 5.22 6.28a.75.75 0 0 1 1.06-1.06L8 6.94l1.72-1.72a.75.75 0 1 1 1.06 1.06L9.06 8l1.72 1.72a.75.75 0 0 1 0 1.06Z"
                clipRule="evenodd"
              />
            </svg>
            Priority Support
          </div>
        </div>
        <button onClick={handlePay} className="btn btn-accent">
          Buy Now
        </button>
      </div>
    </div>
  );
}
