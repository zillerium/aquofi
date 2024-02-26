import { DebugContracts } from "./_components/DebugContracts";
import type { NextPage } from "next";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "RWA Assets",
  description: "Create Liquidity for your 🏗 RWAs in an easy way",
});

const Debug: NextPage = () => {
  return (
    <>
      <DebugContracts />
      {/* <div className="text-center mt-8 bg-primary p-10">
        <h1 className="text-4xl my-0">RWA Hub</h1>
        <p className="text-neutral">
          Create Liquidity for your RWAs in an easy way.
          <br /> Check{" "}
          <code className="italic bg-base-300 text-base font-bold [word-spacing:-0.5rem] px-1">
            our docs
          </code>{" "}
        </p>
      </div> */}
    </>
  );
};

export default Debug;
