import React from "react";

function Foot() {
  const date = new Date();
  const currentTime = date.getFullYear();

  return (
    <footer>
      <p>@copyright {currentTime}</p>
    </footer>
  );
}

export default Foot;
