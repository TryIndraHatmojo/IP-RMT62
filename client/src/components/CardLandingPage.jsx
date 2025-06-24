import image from "../assets/image/card-bg.png";

export default function CardLandingPage({ sellPoint }) {
  return (
    <div className="card bg-base-100 image-full w-96 shadow-sm card-xl">
      <figure>
        <img
          src={image}
          alt={sellPoint.title}
          className="object-cover h-48 w-full rounded-xl"
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title mb-5">
          {sellPoint.icon} {sellPoint.title}
        </h2>
        <p>{sellPoint.description}</p>
      </div>
    </div>
  );
}
