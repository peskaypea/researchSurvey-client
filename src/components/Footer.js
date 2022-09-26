import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return <div>&copy; {year} ASL Studies Survey. All rights reserved. </div>;
}

export default Footer;
