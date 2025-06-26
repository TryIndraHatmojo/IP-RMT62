import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { fetchProposals } from "../store/proposalsSlice";
import CardLandingPage from "../components/CardLandingPage";

export default function DashboardPage() {
  const { proposals } = useSelector((state) => state.proposals);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProposals());
  }, []);
  return (
    <>
      <div className="flex w-full flex-col lg:flex-row flex-wrap justify-center items-center gap-4 mt-8">
        <Link to="/create-proposal" className="btn btn-info btn-primary btn-lg">
          Create Proposal
        </Link>
      </div>
      <div className="flex w-full flex-col lg:flex-row flex-wrap justify-center items-center gap-4 mt-8">
        {proposals.map((el, i) => {
          return <CardLandingPage key={i} proposal={el} />;
        })}
      </div>
    </>
  );
}
