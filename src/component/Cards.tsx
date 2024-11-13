import React, { useEffect, useState } from "react";
import SingleCard from "./SingleCard";

const Cards = () => {


  


if(loading)return <h1>loading........</h1>

  return (
    <div
      style={{
        display: "grid",
        height: "auto",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: " 16px",
      }}
    >
      

      {products
        .map((ele,idx) => (
            // <h1>{ele.title}</h1>
            <SingleCard key={idx} cardDetails={ele} />
        ))}
     



        {/* ---------------pagination ------------- */}

      

    </div>
  );
};

export default Cards;
