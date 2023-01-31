import React from "react";
import "./Navbar.css";

export default function Footer() {
  return (
    <>
      <div className="footer mt-5">
        <div className="container">
          <hr className="w-80 mx-auto" />
          <div className="row">
            <div className="col-3 ">
              <h4 className="mt-3 mx-3">@Copyright 2022.AITH</h4>
              
            </div>
            <div className="offset-7 col-2">
              <i className="fa-brands mt-4 py-2 fa-facebook  " />
              <i className="fa-brands mt-4  px-3 fa-twitter  " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
