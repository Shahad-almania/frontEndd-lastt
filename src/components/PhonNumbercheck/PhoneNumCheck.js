import React, { useState } from "react";
import { toast } from "react-toastify";

const PhoneNumCheck = () => {
  const [phoneinput, setphoneinput] = useState("");
  const [phonespam, setphonespam] = useState("");

  const phonenumbercheck = async (e) => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "2fb2535170msh927f85182db7851p1073d1jsn65e935cb20ad",
        "X-RapidAPI-Host": "spamcheck.p.rapidapi.com",
      },
    };

    const request = await fetch(
      `https://spamcheck.p.rapidapi.com/index.php?number=%2B${phoneinput}`,
      options
    );
    const data = await request.json();
    console.log(data);
    setphonespam(data.response);

    // .then(response => this.setphonespam(response.response));
    // const response = await response.json();
    // console.log("halalal");
    // setphonespam(response.response);

    if (data.response === "Spam")
      toast.success("YOU ARE SAFE ", {
        position: "bottom-center",
        autoClose: 9000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    else {
      console.log("befor fetch ");

      {
        ourdb();
      }
    }
  };

  const ourdb = async (e) => {
    // console.log("befor fetch ");

    const request = await fetch(`/api/v1/phoneNumber `);
    const data = await request.json();
    console.log(data);

    let conunt = 0;
    for (let index = 0; index < data.length; index++) {
      if (data[index].number === phoneinput) conunt++;
      console.log(conunt);
    }

    if (conunt > 3) {
      toast.error("BE CAREFULL , IT'S DANGRES ", {
        position: "bottom-center",
        autoClose: 9000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.success("YOU ARE SAFE ", {
        position: "bottom-center",
        autoClose: 9000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  // const emailCheck = async (e) => {
  //   console.log(emailinput);
  //   const request = await fetch(
  //     `https://api.eva.pingutil.com/email?email=${emailinput} `
  //   );
  //   const data = await request.json();
  //   console.log(data);
  //   setEmailspam(data.data.spam);
  //   console.log("data", data);

  //   if (emailspam === true) {
  //     toast.error("BE CARFULL IT DANGRES !!", {});
  //   } else {
  //     toast.success("YOU ARE SAFE ", {
  //       position: "bottom-center",
  //       autoClose: 9000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //     });
  //   }
  // };

  return (
    <>
      <div className="input-group w-50 mx-auto mt-5 d-flex flex-column align-items-center"></div>

      <div className="p-20 bg-surface-secondary mt-5 ">
        <div className="row">
          <div className=" col-lg-7 mx-auto">
            <div className="shadow">
              <div className="card-body">
                <div className="Text text-center mt-6">
                  <h1 className="T">Enter Phone Number to check </h1>
                </div>

                <div className="input-group  w-20 mx-auto mt-6">
                  <input
                    value={phoneinput}
                    onChange={(e) => setphoneinput(e.target.value)}
                    type="text"
                    className="form-control w-20 mx-auto mt-5"
                    placeholder="Enter the Phone Number"
                  />

                  <button
                    onClick={phonenumbercheck}
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

export default PhoneNumCheck;
