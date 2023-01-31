import React from "react";
import { Link } from "react-router-dom";
import "./Style.css";
export default function Resources() {
  return (
    <>
      <div className="container">
        <div className="row">
          <h2 className="text-center mt-5">PPT's</h2>
          <hr className="w-25 mx-auto" />
          <div className="pptdata">
            <p>D1-S2 Holistic Devl _ Role of Edu July 23</p>
            <p>D2-S1 A Recap D1 July 23</p>
            <p>D2-S1 B Self-exploration, Happiness and Prosperity Oct 4</p>
            <p>D2-S1 C Harmony in the Human Being July 23</p>
            <p>D3-S1 B Trust July 23</p>
            <p>...Many more</p>
            <a href="https://drive.google.com/drive/u/2/folders/1CIcqbVSJNvoM6cf4HboIxkOectbka-mq">
              <button
                className="btn text-white"
                style={{ backgroundColor: "orangered" }}
              >
                Get Now
              </button>
            </a>
          </div>
        </div>

        <div className="row">
          <h2 className="text-center mt-5">Video Lectures</h2>
          <hr className="w-25 mx-auto" />
          <iframe
            className="mt-5 w-100"
            style={{ height: "600px" }}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/28wbdZGhPwA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div className="row">
          <h2 className="text-center mt-5">Handoutes </h2>
          <hr className="w-25 mx-auto" />
          <div className="pptdata">
            <p>UHV Handout 1-Introduction to Value Education</p>
            <p>UHV Handout 2-Harmony in the Human Being</p>
            <p>UHV Handout 3-Harmony in the Family</p>
            <p>UHV Handout 4-Harmony in the Society</p>
            <p>UHV Handout 5-Harmony in the Nature and Existence</p>
            <p>...Many more</p>
            <a href="https://drive.google.com/drive/u/2/folders/1CIcqbVSJNvoM6cf4HboIxkOectbka-mq">
              <button
                className="btn text-white"
                style={{ backgroundColor: "orangered" }}
              >
                Get Now
              </button>
            </a>
          </div>
        </div>

        <div className="row">
          <h2 className="text-center mt-5">Books & Notes </h2>
          <hr className="w-25 mx-auto" />
          <div className="pptdata">
            <p>UHVE 2.0 Class Notes Part 1 of 4</p>
            <p>UHVE 2.0 Class Notes Part 2 of 4</p>
            <p>UHVE 2.0 Class Notes Part 3 of 4</p>
            <p>UHVE 2.0 Class Notes Part 4 of 4</p>
            <p>...Many more</p>
            <a href="https://drive.google.com/drive/u/2/folders/10epOlwPFvUQPObCLi1Sgms9KqjkXePN5">
              <button
                className="btn text-white"
                style={{ backgroundColor: "orangered" }}
              >
                Get Now
              </button>
            </a>
          </div>
        </div>

        <div className="row">
          <h3 className="text-center mt-5">Posters</h3>
          <hr className="w-25 m-auto" />
          <div className="data ">
            <div className="card  mt-5" style={{ width: "18rem" }}>
              <img
                src={require("../Data/img/pdf.jpg")}
                className="card-img-top w-50 mx-auto mt-2"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Posters</h5>

                <a
                  href="https://drive.google.com/drive/u/2/folders/16k3DXKq7TECyQJqayKYp_UeIuOZzfYbW"
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
