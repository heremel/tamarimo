import React from "react";

interface MarimoProps {
  hunger: number;
  thirst: number;
  fun: number;
}

const Marimo: React.FC<MarimoProps> = ({ hunger, thirst, fun }) => {
  const isSad = hunger < 50 || thirst < 50 || fun < 50;
  const imgSrc = isSad ? "/sadtama.jpg" : "/happytama.jpg";
};

export default Marimo;
