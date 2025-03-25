import React from "react";
import { UserData } from "../data/UserData";

function Footer() {
  const currentYear = new Date().getFullYear();
  const { FooterLink } = UserData;

  return (
    <div className="mb-2 flex items-center justify-center gap-2">
      <div className="font-poppins text-center text-xs">
        © Copyright <b>{currentYear}</b> Designed & Built by
      </div>
      <div
        className="cursor-pointer text-sm font-bold tracking-wider"
        onClick={() => {
          window.open(FooterLink);
        }}
      >
        shailendrashetty
      </div>

      <div className="font-poppins text-center text-xs">
        <b>Phone :</b> +91 6361928053
      </div>
    </div>
  );
}

export default Footer;
