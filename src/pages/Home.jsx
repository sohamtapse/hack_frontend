import React from "react";
import TeacherGet from "../components/TeacherGet";
import StudentGet from "../components/StudentGet";
import Submit from "../components/Submit";

const Home = () => {
  return (
    <div className="bg-zinc-800 min-h-screen w-screen flex flex-col items-center">
      <div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-white my-5 text-center">
          AI Evaluation engine
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 justify-center items-center px-4">
        <TeacherGet />
        <StudentGet />
      </div>
      <div className="bg-zinc-800   w-full flex justify-center items-center">
        <Submit />
      </div>
    </div>
  );
};

export default Home;
