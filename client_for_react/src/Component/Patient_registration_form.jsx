// import React, { useState } from 'react'

// export default function Patient_registration_form() {
//     let [fullname , setFullname] = useState("");
//     let [age , setAge] = useState(0);
//     let [gender , setGender] = useState("");
//     let [phone , setPhone] = useState("");
//     let [address , setAddress] = useState("");


//   return (
//     <div className="container mt-5 d-flex justify-content-center">
//   <div className="card shadow-lg p-4" style={{ maxWidth: '600px', width: '100%' }}>
//     <h3 className="text-center mb-4 text-primary">Patient Registration</h3>
//     <form>
//       <div className="mb-3">
//         <label className="form-label">Full Name</label>
//         <input
//           type="text"
//           className="form-control"
//           name="fullName"
//           value={fullname}
//           onChange={(a) => setFullname(a.target.value)}
//           placeholder="Enter full name"
//         />
//       </div>

//       <div className="mb-3">
//         <label className="form-label">Age</label>
//         <input
//           type="number"
//           className="form-control"
//           name="age"
//           value={age}
//           onChange={(a) => setAge(a.target.value)}
//           placeholder="Enter age"
//         />
//       </div>

//       <div className="mb-3">
//         <label className="form-label">Gender</label>
//         <select
//           className="form-select"
//           name="gender"
//           value={gender}
//           onChange={(a) => setGender(a.target.value)}
//         >
//           <option value="">Select gender</option>
//           <option value="Male">Male</option>
//           <option value="Female">Female</option>
//           <option value="Other">Other</option>
//         </select>
//       </div>

//       <div className="mb-3">
//         <label className="form-label">Phone Number</label>
//         <input
//           type="text"
//           className="form-control"
//           name="phoneNumber"
//           value={phone}
//           onChange={(a) => setPhone(a.target.value)}
//           placeholder="Enter phone number"
//         />
//       </div>

//       <div className="mb-3">
//         <label className="form-label">Address</label>
//         <textarea
//           className="form-control"
//           name="address"
//           rows="3"
//           value={address}
//           onChange={(a) => setAddress(a.target.value)}
//           placeholder="Enter address (optional)"
//         ></textarea>
//       </div>

//       <button type="submit" className="btn btn-primary w-100">Register Patient</button>
//     </form>
//   </div>
// </div>

  
//   )
// }





// You can place this component in App.js or any page component
import React, { useState } from 'react';
import './Patient.css'; // We'll use this for CSS
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
// import { Toast } from 'bootstrap/dist/js/bootstrap.bundle';
import {toast,ToastContainer} from "react-toastify";

const PatientForm = () => {
    let [fullname , setFullname] = useState("");
    let [age , setAge] = useState(0);
    let [gender , setGender] = useState("");
    let [phone , setPhone] = useState("");
    let [address , setAddress] = useState("");

    function clear(){
      setFullname("");
      setAge(0);
      setGender("");
      setPhone("")
      setAddress("")
    }
  
    async function register_patient(e){
      e.preventDefault()
     try {
      let patient_api = await axios.post("http://localhost:3001/patient/register",{
        fullName:fullname,
        age:age,
        gender:gender,
        phoneNumber:phone,
        address:address
      })
      clear()
      toast.success(patient_api.data.msg)
  
     } catch (error) {
      console.log(error)
      // toast.error(userapi.data.msg)
     }
    }
  


  return (
    <div className="form-background">
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="card shadow-lg p-4" style={{ maxWidth: '600px', width: '100%' }}>
          <h3 className="text-center mb-4 text-primary">Patient Registration</h3>
 
            {/* Full Name */}
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control" placeholder="Enter full name" 
                        value={fullname}
          onChange={(a) => setFullname(a.target.value)}

              />
            </div>

            {/* Age */}
            <div className="mb-3">
              <label className="form-label">Age</label>
              <input type="number" className="form-control" placeholder="Enter age" 
                 value={age}
                           onChange={(a) => setAge(a.target.value)}
              />
            </div>

            {/* Gender */}
            <div className="mb-3">
              <label className="form-label">Gender</label>
              <select className="form-select" 
              value={gender}
                        onChange={(a) => setGender(a.target.value)}
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Phone */}
            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input type="text" className="form-control" placeholder="Enter phone number" 
              value={phone}
                        onChange={(a) => setPhone(a.target.value)}
              />
            </div>

            {/* Address */}
            <div className="mb-3">
              <label className="form-label">Address</label>
              <textarea className="form-control" rows="3" placeholder="Enter address (optional)" 
              value={address}
                        onChange={(a) => setAddress(a.target.value)}
              />
            </div>

            <button type="button" className="btn btn-primary w-100" onClick={register_patient}>Register Patient</button>
            <ToastContainer />
            

        </div>
      </div>
    </div>
  );
};

export default PatientForm;
