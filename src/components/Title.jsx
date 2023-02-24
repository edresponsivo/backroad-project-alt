import React from "react";
const Title = ({ title }) => {
  // console.log(title);
  const { prefix, word } = title;
  return (
    <div className="section-title">
      <h2>
        {prefix} <span>{word}</span>
      </h2>
    </div>
  );
};
export default Title;
