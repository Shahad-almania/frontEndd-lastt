import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PhoneReport = () => {
  const [phoneinput, setphoneinput] = useState("");
  const [number, setnumber] = useState("");
  const [response, setrespone] = useState(true);

  const navigate = useNavigate();

  const report = async (e) => {
    e.preventDefault();

    const body = {
      number,
      response,
    };
    console.log(number, response);

    const request = await fetch(`/api/v1/phoneNumber`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    console.log(request);
    const data = await request.json();
  };

  //   const ourdb= async (e) => {

  //     e.preventDefault();

  //     const request = await fetch(
  //         `/api/v1/email `
  //       );
  //       const data = await request.json();
  //     console.log(data);

  //     let conunt=0;
  //     for(let index=0 ; index<data.length ; index++){

  //         if (data.index===emailAdress)
  //         conunt++;

  //     }
  //     if (count=>3)

  //   }

  return (
    <>
      <div className="input-group w-50 mx-auto mt-5 d-flex flex-column align-items-center"></div>

      <div className="p-20 bg-surface-secondary mt-5 ">
        <div className="row">
          <div className=" col-lg-7 mx-auto">
            <div className="shadow">
              <div className="card-body">
                <div className="Text text-center mt-6">
                  <h1 className="T">Enter Phone Number to Report </h1>
                </div>

                <div className="input-group  w-20 mx-auto mt-6">
                  <input
                    value={number}
                    onChange={(e) => setnumber(e.target.value)}
                    type="emailinput"
                    className="form-control w-20 mx-auto mt-5"
                    placeholder="Enter Dangrous Phone Number "
                  />

                  <button
                    onClick={report}
                    className="btn btn-success mt-5"
                    type="button"
                  >
                    Serach{" "}
                  </button>
                </div>

                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhoneReport;
