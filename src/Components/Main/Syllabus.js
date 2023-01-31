import React from "react";

export default function Syllabus() {
  return (
    <>
      <div className="container">
        <div className="row">
          <h3 className="text-center mt-5">Syllabus</h3>
          <hr className="w-25 m-auto" />
          <div className="data ">
            <div className="card mx-auto mt-5" style={{ width: "18rem" }}>
              <img
                src={require("../Data/img/pdf.jpg")}
                className="card-img-top w-50 mx-auto mt-2"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Syllabus</h5>
                <p className="card-text">UHV foundation.co</p>
                <a
                  href="https://drive.google.com/drive/u/0/folders/11YfHz2nwzhiMHmrgjgEsN2AratHFtEM-"
                  className="btn btn-primary"
                >
                  Click Here
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
