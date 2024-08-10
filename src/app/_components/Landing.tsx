import React from "react";

const Landing = () => {
  return (
    <div className="w-max-screen flex h-screen flex-col gap-6 bg-white px-20 pt-20">
      <div className="w-2/5 text-black">
        <div className="text-4xl font-bold">
          I&apos;M ANDI FARHAN HIDAYAT
        </div>
        <div className="text-2xl font-semibold">Software Engineer</div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          non quo repellat exercitationem delectus sint rerum blanditiis.
          Aliquam, doloremque commodi!
        </div>
      </div>
      <div className="item-center flex w-2/5 justify-start gap-16 pl-12 text-black">
        <div className="border-lg flex h-8 w-40 items-center justify-center bg-gray-400 text-lg font-bold text-gray-900 ring-2 ring-black">
          View Projects
        </div>
        <div className="border-lg flex h-8 w-40 items-center justify-center bg-gray-400 text-lg font-bold text-gray-900 ring-2 ring-black">
          Reach Me Out
        </div>
      </div>
    </div>
  );
};

export default Landing;
