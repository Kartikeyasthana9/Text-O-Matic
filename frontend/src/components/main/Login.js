import React from "react";
import { Formik } from "formik";
import Swal from "sweetalert2";
import {useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  const loginSubmit = async (formdata, { resetForm }) => {
    console.log(formdata);
    resetForm();

    const response = await fetch("http://localhost:5000/user/authenticate", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      console.log("request sent");
      resetForm();
      const data = await response.json();
      sessionStorage.setItem("user", JSON.stringify(data));
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Loggedin Successfully",
      });

      navigate("/home/:formid");
    } else if (response.status === 401) {
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: "Loggedin Failed",
      });
    } else {
      console.log("Unknown error occured");
    }
  };
  return (
    <div>
      <>
        {/* Section: Design Block */}
        <section className="background-radial-gradient overflow-hidden">
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n    .background-radial-gradient {\n      background-color: hsl(218, 41%, 15%);\n      background-image: radial-gradient(650px circle at 0% 0%,\n          hsl(218, 41%, 35%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%),\n        radial-gradient(1250px circle at 100% 100%,\n          hsl(218, 41%, 45%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%);\n    }\n\n    #radius-shape-1 {\n      height: 220px;\n      width: 220px;\n      top: -60px;\n      left: -130px;\n      background: radial-gradient(#44006b, #ad1fff);\n      overflow: hidden;\n    }\n\n    #radius-shape-2 {\n      border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;\n      bottom: -60px;\n      right: -110px;\n      width: 300px;\n      height: 300px;\n      background: radial-gradient(#44006b, #ad1fff);\n      overflow: hidden;\n    }\n\n    .bg-glass {\n      background-color: hsla(0, 0%, 100%, 0.9) !important;\n      backdrop-filter: saturate(200%) blur(25px);\n    }\n  ",
            }}
          />
          <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
            <div className="row gx-lg-5 align-items-center mb-5">
              <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
                <h1
                  className="my-5 display-5 fw-bold ls-tight"
                  style={{ color: "hsl(218, 81%, 95%)" }}
                >
                  The best offer <br />
                  <span style={{ color: "hsl(218, 81%, 75%)" }}>
                    for your business
                  </span>
                </h1>
                <p
                  className="mb-4 opacity-70"
                  style={{ color: "hsl(218, 81%, 85%)" }}
                >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Temporibus, expedita iusto veniam atque, magni tempora
                  mollitia dolorum consequatur nulla, neque debitis eos
                  reprehenderit quasi ab ipsum nisi dolorem modi. Quos?
                </p>
              </div>
              <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
                <div
                  id="radius-shape-1"
                  className="position-absolute rounded-circle shadow-5-strong"
                />
                <div
                  id="radius-shape-2"
                  className="position-absolute shadow-5-strong"
                />
                <div className="card bg-glass">
                  <div className="card-body px-4 py-5 px-md-5">
                    <Formik
                      initialValues={{ email: "", password: "" }}
                      onSubmit={loginSubmit}
                    >
                      {({ values, handleChange, handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                          {/* 2 column grid layout with text inputs for the first and last names */}
                          <div className="row"></div>
                          {/* Email input */}
                          <div className="form-outline mb-4">
                            <input
                              type="email"
                              id="email"
                              className="form-control form-control-lg"
                              value={values.email}
                              onChange={handleChange}
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example3cg"
                            >
                              Email Address
                            </label>
                          </div>
                          {/* Password input */}

                          <div className="form-outline mb-4">
                            <input
                              type="password"
                              id="password"
                              className="form-control form-control-lg"
                              value={values.password}
                              onChange={handleChange}
                            />
                            <label
                              className="form-label"
                              htmlFor="form2Example17"
                            >
                              Password
                            </label>
                          </div>

                          {/* Submit button */}
                          <button
                            type="submit"
                            variant="contained"
                            className="btn btn-secondary btn-block mb-4"
                          >
                            Login
                          </button>
                          {/* Register buttons */}
                          <div className="text-center">
                            <p>or sign up with:</p>
                            <button
                              type="button"
                              className="btn btn-link btn-floating mx-1"
                            >
                              <i className="fab fa-facebook-f" />
                            </button>
                            <button
                              type="button"
                              className="btn btn-link btn-floating mx-1"
                            >
                              <i className="fab fa-google" />
                            </button>
                            <button
                              type="button"
                              className="btn btn-link btn-floating mx-1"
                            >
                              <i className="fab fa-twitter" />
                            </button>
                            <button
                              type="button"
                              className="btn btn-link btn-floating mx-1"
                            >
                              <i className="fab fa-github" />
                            </button>
                          </div>
                        </form>
                      )}
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section: Design Block */}
      </>
    </div>
  );
};

export default Login;
