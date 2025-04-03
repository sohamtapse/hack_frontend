import React from "react";
import TeacherGet from "../components/TeacherGet";
import StudentGet from "../components/StudentGet";
import Submit from "../components/Submit";

const Home = () => {
  return (
    <div className="bg-zinc-800 h-full w-screen flex flex-col items-center">
      <div>
        <h1 className="text-5xl text-white my-5">LearnNova</h1>
      </div>
      <div className="flex gap-10 justify-center items-center">
        <TeacherGet />
        <StudentGet />
      </div>
      <div>
        <Submit />
      </div>
    </div>
  );
};

export default Home;
