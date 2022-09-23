import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ReportEmail = () => {
  const [emailinput, setEmailinput] = useState("");
  const [emailAdress, setemailAdress] = useState("");
  const [spam, setspam] = useState(true);

  const navigate = useNavigate();

  const report = async (e) => {
    e.preventDefault();

    const body = {
      emailAdress,
      spam,
    };
    console.log(spam, emailAdress);

    const request = await fetch(`/api/v1/email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    console.log(request);
    const data = await request.json();

    toast.success("The Email Reported succesufuly ", {
      position: "bottom-center",
      autoClose: 9000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      <div className="input-group w-50 mx-auto mt-5 d-flex flex-column align-items-center"></div>

      <div className="p-20 bg-surface-secondary mt-5 ">
        <div className="row">
          <div className=" col-lg-7 mx-auto">
            <div className="shadow">
              <div className="card-body">
                <div className="Text text-center mt-6">
                  <h1 className="T">Enter email to Report </h1>
                </div>

                <div className="input-group  w-20 mx-auto mt-6">
                  <input
                    value={emailAdress}
                    onChange={(e) => setemailAdress(e.target.value)}
                    type="emailinput"
                    className="form-control w-20 mx-auto mt-5"
                    placeholder="Enter Dangrous Email "
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

export default ReportEmail;
