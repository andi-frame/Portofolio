import React from "react";

import Image from "next/image";

const Landing = () => {
  return (
    <div className="w-full flex h-fit gap-6 bg-white px-32 pt-20">
      <div className="text-black w:4/5 pt-5">
        <div className="text-4xl font-bold">I&apos;M ANDI FARHAN HIDAYAT</div>
        <div className="text-2xl font-semibold">Software Engineer</div>
        <div>
          Undergraduate student of informatics engineering highly dedicated to
          always learn, explore, and develop his skills. Open to collaborate,
          learn, and develop with others. Eager to help others and solve
          challenging problems.
        </div>
        <div className="item-center mt-5 flex justify-start gap-16 pl-12 text-black">
          <div className="border-lg flex h-8 w-40 items-center justify-center text-lg font-medium text-gray-900 ring-2 ring-black hover:font-bold">
            View Projects
          </div>
          <div className="border-lg flex h-8 w-40 items-center justify-center text-lg font-medium text-gray-900 ring-2 ring-black hover:font-bold">
            Reach Me Out
          </div>
        </div>
      </div>
      <div className="flex h-fit w-full px-2 justify-start">
        <Image
          src="/Profile2.jpg"
          width={250}
          height={250}
          alt="Picture of the author"
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Landing;
