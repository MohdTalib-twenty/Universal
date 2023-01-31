import React from "react";
import "./Style.css";
export default function Faculty() {
  return (
    <>
      <div className="faculty">
        <div className="container">
          <h3 className="text-center mt-5">Faculty</h3>
          <hr className="w-25 m-auto" />

          <div className="row mt-5">
            <div className="offset-1  col-sm-12 col-md-5 col-lg-5 col-12 ">
              <div
                className="card  mt-sm-5 "
                style={{ width: "32rem", height: "700px" }}
              >
                <img
                  src={require("../Data/img/Director.png")}
                  className="card-img-top img-fluid mt-3 rounded-circle mx-auto"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="text-center">
                    Prof. Rachna Asthana
                    <br />
                    <span>Director,(AITH)</span>
                  </h5>
                  <p className="text-center">(Dean, Value Education Cell)</p>
                  <p>
                  In today’s scenario when the entire world is facing the adverse environment conditions,
                  climate change, increasing pollution, depletion of natural resources etc. despite so much of
                  technical advancement, development. One has to rethink the concept of development and also
                  the missing part from our education system. We are producing world class technocrats,
                  bureaucrats, scientist, doctors, teachers but not able to protect nature.<br/>
                   For holistic development Right Understanding is must for educated persons. The
                  effort for value education cell at AITH would be directed towards the development of Right
                  Understanding among our students so that future technologies will be for holistic
                  development, for mutual prosperity to have possessive impact on the environment. Right
                  Understanding will also helpful for making students not only engineers but also responsible,
                  ethical human beings.
                  </p>
                </div>
              </div>
            </div>

            <div className=" offset-1 col-sm-12 col-md-5 col-lg-5 col-12">
              <div
                className="card rj  mt-sm-5 "
                style={{ width: "32rem", height: "700px" }}
              >
                <img
                  src={require("../Data/img/Rjesh.png")}
                  className="card-img-top img-fluid mt-3 rounded-circle mx-auto"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="text-center">
                    Dr.Rajesh Kumar Gupta
                    <br />
                    <span>Dean Student wellfare,AITH </span>
                  </h5>
                  <p className="text-center">
                    (Convener- Value Education Cell)
                  </p>
                  <p>
                    A.I.T.H. is an autonomous institute imparting technical
                    education to students Degree and Diploma level courses. In
                    which the department of Value Education Cell plays an
                    important role to insure the Right Understanding and Right
                    Living for all. Where the Human value and professional
                    ethics is one of such subjects that grooms the Holistic
                    Development of students. It is one of the main components of
                    Behaviour therapy/science of a student’s leads much more
                    than expected by the society. Our planning is to ensure
                    participation of 8 days workshop of Human Value to each
                    student of the institute. We are also running such program
                    for our faculty members as well as employees for ensuring
                    right understanding and right living from individual to
                    whole nature/existence.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className=" offset-1 col-sm-12 col-md-3 col-lg-3 col-12">
              <div
                className="card dp mt-sm-5"
                style={{ width: "18rem", height: 320 }}
              >
                <img
                  src={require("../Data/img/dpsingh.png")}
                  className="card-img-top img-fluid mt-3 rounded-circle mx-auto"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="text-center">
                    Dr. Devender Pratap Singh <br />
                    <span />
                  </h5>
                  <p className="text-center"> (Co-ordinator- VE Cell-AITH) </p>
                </div>
              </div>
            </div>
            <div className="offset-1 col-sm-12 col-md-3 col-lg-3 col-12">
              <div
                className="card  mt-sm-5"
                style={{ width: "18rem", height: 320 }}
              >
                <img
                  src={require("../Data/img/Guruji.png")}
                  className="card-img-top img-fluid mt-3 mx-auto rounded-circle"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="text-center">
                    Mr. Satyanand Jaiswal <br />
                    <span />
                  </h5>
                  <p className="text-center">
                    {" "}
                    (Co-co-ordinator- VE Cell-AITH)
                  </p>
                </div>
              </div>
            </div>
            <div className="offset-1 col-sm-12 col-md-3 col-lg-3 col-12">
              <div
                className="card sh mt-sm-5"
                style={{ width: "18rem", height: 320 }}
              >
                <img
                  src={require("../Data/img/shwet.png")}
                  className="card-img-top mt-3 img-fluid rounded-circle mx-auto "
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="text-center">
                    Ms. Sweta Tripathi <br />
                    <span />
                  </h5>
                  <p className="text-center"> (Member-of VE Cell-AITH)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5 ">
            <div className="offset-1 col-sm-12 col-md-3 col-lg-3 col-12">
              <div
                className="card sh mt-sm-5"
                style={{ width: "18rem", height: 320 }}
              >
                <img
                  src={require("../Data/img/kt.png")}
                  className="card-img-top mt-3 img-fluid rounded-circle mx-auto "
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="text-center">
                    Ms. Kalpna Katiyar <br />
                    <span />
                  </h5>
                  <p className="text-center"> (Member-of VE Cell-AITH)</p>
                </div>
              </div>
            </div>
            <div className="offset-1 col-sm-12 col-md-3 col-lg-3 col-12">
              <div
                className="card sh  mt-sm-5"
                style={{ width: "18rem", height: 320 }}
              >
                <img
                  src={require("../Data/img/ds.png")}
                  className="card-img-top mt-3 img-fluid rounded-circle mx-auto "
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="text-center">
                    Mr. D.K.Sachan <br />
                    <span />
                  </h5>
                  <p className="text-center"> (Member-of VE Cell-AITH)</p>
                </div>
              </div>
            </div>
            <div className="offset-1 col-sm-12 col-md-3 col-lg-3 col-12">
              <div
                className="card mt-sm-5"
                style={{ width: "18rem", height: 320 }}
              >
                <img
                  src={require("../Data/img/Bhnu.png")}
                  className="card-img-top mt-3 img-fluid rounded-circle mx-auto "
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="text-center">
                  Mr. Bhanu Pratap singh (CSJMU) <br />
                    <span />
                  </h5>
                  <p className="text-center">(Member-of VE Cell-AITH)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="offset-1 col-sm-12 col-md-3 col-lg-3 col-12">
              <div
                className="card mt-sm-5"
                style={{ width: "18rem", height: 320 }}
              >
                <img
                  src={require("../Data/img/pk.png")}
                  className="card-img-top mt-3 img-fluid rounded-circle mx-auto "
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="text-center">
                    Mr. Pankaj Kumar Yadav <br />
                    <span />
                  </h5>
                  <p className="text-center"> (Member-of VE Cell-AITH)</p>
                </div>
              </div>
            </div>
            <div className="offset-1 col-sm-12 col-md-3 col-lg-3 col-12">
              <div
                className="card mt-sm-5"
                style={{ width: "18rem", height: 320 }}
              >
                <img
                  src={require("../Data/img/RN.png")}
                  className="card-img-top mt-3 img-fluid rounded-circle mx-auto "
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="text-center">
                  Dr. Kumar Gaurav (HBTU) <br />
                    <span />
                  </h5>
                  <p className="text-center"> (Member-of VE Cell-AITH)</p>
                </div>
              </div>
            </div>
            <div className="offset-1 col-sm-12 col-md-3 col-lg-3 col-12">
              <div
                className="card mt-sm-5"
                style={{ width: "18rem", height: 320 }}
              >
                <img
                  src={require("../Data/img/Kt2.png")}
                  className="card-img-top mt-3 img-fluid rounded-circle mx-auto "
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="text-center">
                  Dr. R.N. Katiyar (CSJMU) <br />
                    <span />
                  </h5>
                  <p className="text-center"> (Member-of VE Cell-AITH)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
