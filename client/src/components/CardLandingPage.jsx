import { Link } from "react-router";
import image from "../assets/image/card-bg.png";
import Markdown from "../components/Markdown";

export default function CardLandingPage({ sellPoint, proposal }) {
  return (
    <div className="card bg-base-100 image-full w-96 shadow-sm card-xl">
      <figure>
        <img
          src={image}
          alt={sellPoint ? sellPoint.title : proposal.title}
          className="object-cover h-48 w-full rounded-xl"
        />
      </figure>
      <div className="card-body ">
        {proposal && (
          <>
            <h2 className="card-title ">{proposal.title}</h2>
            {/* <Markdown markdownText={proposal.aiOutput.slice(0, 100) + "..."} /> */}
            <div className="flex w-full flex-col lg:flex-row flex-wrap justify-center items-center gap-4 mt-4">
              <Link
                className="btn btn-info btn-soft w-36"
                to={`/proposal/${proposal.id}`}
              >
                View
              </Link>
              <Link
                className="btn btn-error btn-soft w-36"
                to={`/proposal/${proposal.id}/edit`}
              >
                Delete
              </Link>
            </div>
            <Link
              className="btn btn-secondary btn-soft"
              to={`/proposal/${proposal.id}/edit`}
            >
              Download PDF
            </Link>
          </>
        )}
        {sellPoint && (
          <>
            <h2 className="card-title mb-5">
              {sellPoint.icon} {sellPoint.title}
            </h2>
            <p>{sellPoint.description}</p>
          </>
        )}
      </div>
    </div>
  );
}
