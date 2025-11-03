import React from "react";
import Container from "./Container";
import bgImg1 from "../assets/vector1.png";

const Banner = ({data}) => {
  console.log(data)

  const progressData = data.filter((element)=>element.status == "In Progress");
  const resolvedData = data.filter((element)=>element.status == "Resolved");

  console.log(progressData,resolvedData)
  return (
    <Container>
      <div className="grid grid-cols-2 gap-3">
        <div className="relative bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white p-18 mt-5 text-center rounded-lg">
          <div
            style={{
              backgroundImage: `url(${bgImg1})`,
              backgroundPosition: "left bottom",
              backgroundRepeat: "no-repeat",
              backgroundSize: "250px",
            }}
            className="absolute inset-0 opacity-80"
          />
          <div
            style={{
              backgroundImage: `url(${bgImg1})`,
              backgroundPosition: "left top",
              backgroundRepeat: "no-repeat",
              backgroundSize: "250px",
              transform: "scaleX(-1)",
            }}
            className="absolute inset-0 opacity-80"
          />

          {/* Content Layer */}
          <h2 className="text-center text-lg">In-Progress</h2>
          <p className="text-center font-bold text-4xl">{progressData.length}</p>
        </div>
        <div className="relative bg-gradient-to-br from-[#54CF68] to-[#00827A] text-white p-18 mt-5 text-center rounded-lg">
          <div
            style={{
              backgroundImage: `url(${bgImg1})`,
              backgroundPosition: "left bottom",
              backgroundRepeat: "no-repeat",
              backgroundSize: "250px",
            }}
            className="absolute inset-0 opacity-80"
          />
          <div
            style={{
              backgroundImage: `url(${bgImg1})`,
              backgroundPosition: "left top",
              backgroundRepeat: "no-repeat",
              backgroundSize: "250px",
              transform: "scaleX(-1)",
              
            }}
            className="absolute inset-0 opacity-80"
          />

          {/* Content Layer */}
          <h2 className="text-center text-lg">Resolved</h2>
          <p className="text-center font-bold text-4xl">{resolvedData.length}</p>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
