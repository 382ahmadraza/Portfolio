import React from "react";

const DownSection = ({ accounts, policy, policy2, name }) => {
  return (
    <div className="footer flex flex-col items-center space-y-5 text-center text-gray-400 text-sm">
      <p>
        {policy}
        <span className="underline underline-offset-2 decoration-1 cursor-pointer text-[#29ABE2]">
          {policy2}
        </span>
      </p>
      <h3 className="text-md font-semibold">
        {accounts}?{" "}
        <span className="underline underline-offset-2 decoration-1 cursor-pointer text-[#29ABE2]">
          {name}
        </span>
      </h3>
    </div>
  );
};

export default DownSection;
