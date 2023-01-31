import React, { useState } from "react";
import "./Style.css";

export default function Contact() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="card mx-auto mt-5" style={{ width: "50rem",height:"500px" }}>
            <div className="row">
              <div className="col-md-6">
                <h4 className="text-start mt-2">Get In Touch</h4>
                <hr className="w-25 "></hr>

                <div class="mb-3">
                  <label for="Name" class="form-label">
                    Name*
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="Name"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                  />
                </div>

                <div class="mb-3">
                  <label for="Email" class="form-label">
                    Email*
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="Email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                  />
                </div>

                <div class="mb-3">
                  <label for="phone" class="form-label">
                    Phone-No*
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="phone"
                    value={phone}
                    onChange={(e) => setphone(e.target.value)}
                  />
                </div>

                <div class="mb-3">
                  <label for="phone" class="form-label">
                    Message*
                  </label>
                  <textarea
                   
                    type="number"
                    class="form-control"
                    id="phone"
                    value={phone}
                    onChange={(e) => setphone(e.target.value)}
                  />
                </div>
                <div className="text-center contact">
                  <a href="" className="btn btn-primary ">
                    Click Here
                  </a>
                </div>
              </div>
              <div className="col-md-6 specl">
                 <h4 className="text-center text-white mt-3">Contact Us</h4>
                 <hr className="w-25 mx-auto text-white"/>

                 <div className="type  mt-5">
                  <p className="text-white ms-2 "><i class="fa-solid fa-location-dot text-white pe-2 "></i><span className="text-white me-2">Address:</span>Dr.Ambedkar Institute of Technology fro Handicapped(AITH), Kanpur</p>
                 </div>

                 <div className="type mt-5">
                  <p className="text-white ms-2 "><i class="fa-solid fa-phone text-white pe-2"></i><span className="text-white me-2">Phone:</span>+91 9914737867</p>
                  <p className="text-white ms-2 "><i class="fa-solid fa-phone text-white pe-2"></i><span className="text-white me-2">Phone:</span>+91 8005495172</p>
                  <p className="text-white ms-2 "><i class="fa-solid fa-phone text-white pe-2"></i><span className="text-white me-2">Phone:</span>+91 8005495173</p>
                 </div>

                 <div className="type mt-5">
                  <p className="text-white ms-2 "><i class="fa-solid fa-paper-plane text-white pe-2"></i><span className="text-white me-2">Email:</span>vecell@aith.ac.in</p>
                 </div>

                 <div className="type mt-5">
                  <p className="text-white ms-2 "><i class="fa-solid fa-earth-africa text-white pe-2"></i><span className="text-white me-2">Website:</span> https://aith.ac.in/</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
