import React from "react";
import DesignerLogo from "../../assets/logo/Designer_Logo/Koncepts-logo.ico"
function Footer() {
  return (
    <>
      <div className="p-5 lg:mt-5 bg-white lg:flex items-center justify-between  border-t-2">
        <p className="">augustine.samuel@gmail.com</p>
        <div className="flex flex-wrap items-center">
        <p className="pr-2">Copyright © All Rights Reserved</p>
        <img src={DesignerLogo} alt="" />
        </div>
      </div>
    </>
  );
}

export default Footer;
