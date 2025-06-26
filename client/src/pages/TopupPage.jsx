import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiModalNekat, getBearerToken } from "../helpers/helpers";
import { toast } from "react-toastify";
import { fetchLimitPackages } from "../store/limitPackageSlice";
import CardTopup from "../components/CardTopup";

export default function TopupPage() {
  const dispatch = useDispatch();
  const { limitPackages } = useSelector((state) => state.limitPackages);
  // Fetch proposal data on mount
  useEffect(() => {
    dispatch(fetchLimitPackages());
    console.log("🚀 ~ TopupPage ~ limitPackages:", limitPackages);
  }, []);

  return (
    <>
      <div className="flex w-full flex-col lg:flex-row flex-wrap justify-center items-center gap-4 mt-8">
        {limitPackages.map((el, i) => {
          return <CardTopup key={i} limitPackage={el} />;
        })}
      </div>
    </>
  );
}
