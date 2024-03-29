import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import Loading from "./Layouts/Loading";
import MetaData from "./Layouts/MetaData";
import { clearErrors, createUser } from "../Redux/Action/UserAction";

function Register() {
  const navigate = useNavigate();
  const alert = useAlert();
  const dispatch = useDispatch();
  const {isAuthenticated, error, loading } = useSelector(
    (state) => state.auth
  );
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setCpassword] = useState();
  const [image, setImage] = useState();
  const submitHandle = (e) => {
    e.preventDefault();        // form refresh na ho 
    // console.log(name + email + password + cpassword)
    // console.log(image);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("confirmpassword", confirmpassword);
    formData.append("image", image);

     dispatch(createUser(formData))
    // console.log(formData,"myData")
    console.log(formData)
  };
  useEffect(() =>{
    if(isAuthenticated){
        navigate('/login')    // navigate is used for redirect karne ke liye
    }
    if(error){
        alert.error(error)
        dispatch(clearErrors())
    }
  },[error, alert, dispatch, isAuthenticated, navigate])

  return (
    <>
    {
        loading ? (
            <Loading/>
        ):(
            <>
                <MetaData title={'registration'}/>
                <div className="container">
        <div className="row">
          <div className="col-md-6 mt-3">
            <h3 className="text-center bg-dark text-white">Register form</h3>
            <form onSubmit={submitHandle}>
              <div className="mb-3">
                <label>Name</label>
                <input
                  type="name"
                  name="name"
                  className="form-control"
                  placeholder="name"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label>Email address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label>Confirm Password</label>
                <input
                  type="cpassword"
                  name="confirmpassword"
                  className="form-control"
                  placeholder="Confirm password"
                  required
                  onChange={(e) => setCpassword(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label>Image</label>
                <input
                  type="file"
                  name="image"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
              <button type="submit" className="btn btn-primary btn-normal">
                Submit
              </button>
            </form>
          </div>
        </div>
               </div>
            </>
        )
    }
    </>
  );
}

export default Register;
