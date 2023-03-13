import React from "react";

export const ViewValues = ({ nombre, color }) => {
  return (
    <div
      style={{
        border: `4px solid ${color}`,
        borderRadius: "10px",
        padding: "30px",
        backgroundColor: "#D5DDEB",
      }}
    >
      <h2>¡Hola {nombre}!</h2>
      <p>El color que elegiste es:</p>
      <div
        style={{
          margin: "auto",
          width: "200px",
          color: "white",
          backgroundColor: `${color}`,
        }}
      >
        {color}
      </div>
    </div>
  );
};
