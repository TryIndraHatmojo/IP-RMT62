import CardLandingPage from "../components/CardLandingPage";
import logo from "../assets/image/logo.png";
import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function LandingPage() {
  const [sellPoint, setSellPoint] = useState([]);
  useEffect(() => {
    setSellPoint([
      {
        icon: "🧠",
        title: "AI-Powered Proposal Generator",
        description:
          "Create complete business proposals in seconds using the latest AI technology.",
      },
      {
        icon: "⚡",
        title: "Fast & Professional Output",
        description:
          "Get structured proposals with marketing plan, budget, SWOT, and timeline — instantly.",
      },
      {
        icon: "✏️",
        title: "Custom Prompt Input",
        description:
          "Write your own prompt or use ready-made templates to generate personalized proposals.",
      },
      {
        icon: "📄",
        title: "Downloadable Format",
        description:
          "Export proposals as PDF or DOCX — ready to share with clients, partners, or investors.",
      },
      {
        icon: "📊",
        title: "Smart Proposal Structure",
        description:
          "Includes business name, description, strategy, financial plan, SWOT, and execution timeline.",
      },
      {
        icon: "🔁",
        title: "Regenerate with Edits",
        description:
          "Adjust your prompt and regenerate the proposal to get updated and refined AI output.",
      },
      {
        icon: "🎯",
        title: "Designed for Everyone",
        description:
          "Built for students, entrepreneurs, and startup founders — no writing experience needed.",
      },
      {
        icon: "🎓",
        title: "Education Friendly",
        description:
          "Perfect for academic use, competitions, or as learning material for business planning.",
      },
      {
        icon: "💼",
        title: "Flexible Credit System",
        description:
          "Pay only for what you use — no subscriptions, just top-up proposal credits as needed.",
      },
      {
        icon: "🧩",
        title: "Prompt Template Library (Coming Soon)",
        description:
          "Explore ready-made prompt templates or create and save your own for future use.",
      },
    ]);
  }, []);
  return (
    <>
      <div className="hero mt-15 ms-5 me-5">
        <div className=" bg-base-200 hero-content flex-col lg:flex-row rounded-lg shadow-2xl">
          <img src={logo} className="max-w-sm rounded-lg shadow-2xl" />
          <div className=" p-5">
            <h1 className="text-5xl font-bold">Your Business Planner App</h1>
            <p className="py-5 ">
              AI Business Planner is an intelligent platform that helps users
              instantly generate professional business proposals using AI. Just
              enter your business idea, and get a complete, structured proposal
              — including marketing strategies, budgeting, and SWOT analysis —
              ready to download or pitch.
            </p>
            <Link to="/login" className="btn btn-info btn-primary btn-xl">
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col lg:flex-row flex-wrap justify-center items-center gap-4 mt-8">
        {sellPoint.map((el, i) => {
          return <CardLandingPage key={i} sellPoint={el} />;
        })}
      </div>
    </>
  );
}
