import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Loading from "./Layouts/Loading";
import MetaData from "./Layouts/MetaData";
import { clearErrors, userLogin } from "../Redux/Action/UserAction";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.auth
  );
  const submitHandle = (e) => {
    e.preventDefault();
    //console.log(email + password);
    dispatch(userLogin(email, password));
  };
  useEffect(() => {
    if (error) {
        alert.error(error);
        dispatch(clearErrors());
      }
    if (isAuthenticated) {
      navigate("/");
    }
    
  }, [error, alert, dispatch, isAuthenticated, navigate]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <MetaData title={"Login"} />
          <div className="container">
            <div className="row">
              <div className="col-md-6 mt-3">
                <h3 className="text-center bg-dark text-white">form</h3>
                <form onSubmit={submitHandle}>
                  <div className="mb-3">
                    <label>Email address</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="email"
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
                      onChange={(e) => setPassword(e.target.value)}
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
      )}
    </>
  );
}

export default Login;
