import React from "react";

const NavbarLogo = ({ hideTextOnMobile = false }) => {
  return (
    <div>
      <h1 className="hidden lg:block text-2xl">Johannes Brannelid</h1>
      {!hideTextOnMobile && (
        <h1 className="block lg:hidden text-4xl font-bold">JB</h1>
      )}
    </div>
  );
};

export default NavbarLogo;
