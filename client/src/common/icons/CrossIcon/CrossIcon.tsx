import React from "react";

export const CrossIcon = ({ styles, closeModal }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      className={styles}
      onClick={closeModal}
    >
      <path
        stroke="#1C1E27"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M16 16L8 8m8 0l-8 8"
      ></path>
    </svg>
  );
};
