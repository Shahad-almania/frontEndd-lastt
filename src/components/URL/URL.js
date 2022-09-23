import React from 'react'
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const URL = () => {

    const [emailinput, setEmailinput] = useState("");
    const [emailspam, setEmailspam] = useState("");

    const[urlinput,seturl]=useState('');
    const[urlspam,seturlspam]=useState('');

    const emailCheck = async (e) => {
        console.log(emailinput);
        const request = await fetch(
          `https://api.eva.pingutil.com/email?email=${emailinput} `
        );
        const data = await request.json();
        console.log(data);
        setEmailspam(data.data.spam);
        console.log("data", data);
    
        if (emailspam === true) {
        //   toast.error("BE CARFULL IT DANGRES !!", {});
        <img src="'../../assets/img/istockphoto-1199234234-170667a-removebg-preview'" class="card-img-top" alt="..."/>

        
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
    

  

  return (
    <>
      <div className="input-group w-50 mx-auto mt-5 d-flex flex-column align-items-center"></div>

      <div className="p-20 bg-surface-secondary mt-5 ">
        <div className="row">
          <div className=" col-lg-7 mx-auto">
            <div className="shadow">
              <div className="card-body">
                <div className="Text text-center mt-6">
                  <h1 className="T">Enter URL</h1>
                </div>

                <div className="input-group  w-20 mx-auto mt-6">
                  <input
                    value={emailinput}
                    onChange={(e) => setEmailinput(e.target.value)}
                    type="text"
                    className="form-control w-20 mx-auto mt-5"
                    placeholder="Enter the Sender URL "
                  />

                  <button
                    onClick={emailCheck}
                    className="btn btn-success mt-5"
                    type="button"
                  >
                    Serach{" "}
                  </button>
                </div>


                <div>
                    {/* the call  */}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

    
  )
}

export default URL;
   