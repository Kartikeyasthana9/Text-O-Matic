import React, { useState } from "react";
import "animate.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";

const Summarizer = () => {

  const [selFile, setSelFile] = useState("");
  const [loading, setLoading] = useState(false);

  const uploadFile = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setSelFile(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    console.log('uploading File ...');


    fetch("http://localhost:5000/util/uploadfile", {
        method: "POST",
        body: fd,
    }).then(async (res) => {
        console.log(res.status);
    });
};

  return (
    <div>
      <header className="bg-secondary">
        <div className="container">
          <p className="display-2 text-center fw-bold text-white ">
            Text-O-Matic Summarizer
          </p>

          <div class="header-text-box">
            <p class="text-center fw-bold">
              A text summarizer is an online tool that wraps up a text to a
              specified short length. It condenses a long article to main
              points. The need for text summarizers is increasing day by day,
              because of time constraints. People are looking for shortcut
              methods to learn ideas in lesser time. Even text summarizers are
              helping them to decide whether a book, a research paper, or an
              article is worth reading or not.
            </p>
          </div>
          <div>
            <img
              src="https://sassbook.com/images/sb_story_writer_card.svg"
              className="img-fluid animate__animated animate__fadeInRight"
              width="540"
              height="356"
              alt="Photo"
            />
          </div>
        </div>
      </header>

      {/* ////////////////////////////////////////////////////////////////// */}

      <div style={{ background: "#dff1ee" }}>
        <div className="container">
          <br />
          <p className="display-6  text-center "> Get started in minutes</p>
          <p className="display-4 text-center ">
            3 simple & easy step to launch.
          </p>
          <br />
          <br />
          <div className="row">
            <div className="col-sm-4">
              <div
                className="card w-80 animate__animated animate__slideInUp "
                style={{ background: "#dff1ee" }}
              >
                <div className="card-body" style={{ transition: "1sec" }}>
                  <img
                    src="https://www.sammurize.com/images/assets/ils_15.svg"
                    alt=""
                    className="img-fluid  card-img-top "
                  />
                  <p>Join Our Platform</p>
                  <p className=" fw-bold">
                    It only takes a minute. <br /> Set up is smooth and simple
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div
                className="card w-80 animate__animated animate__slideInUp"
                style={{ background: "#dff1ee" }}
              >
                <div className="card-body">
                  <img
                    src ="https://www.sammurize.com/images/assets/ils_16.svg"
                    alt=""
                    className="img-fluid  card-img-top"
                  />
                  <p>Create new research</p>
                  <p className=" fw-bold">
                    Create a new research and start gathering documents as pdf
                    files or public URL article links
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div
                className="card w-80 animate__animated animate__slideInUp"
                style={{ background: "#dff1ee" }}
              >
                <div className="card-body">
                  <img
                    src="https://www.sammurize.com/images/assets/ils_07.svg"
                    alt=" "
                    width="100"
                    className="img-fluid card-img-top"
                  />
                  <p>Start summarizing text</p>
                  <p className=" fw-bold">
                    Get detailed keywords and <br /> summarize main points{" "}
                    <br /> for each document
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ///////////////////////////////// */}

      <div style={{ background: "#dff1ee" }}>
        <div className="container ">
          <div className="card">
            <div className="card-body">
              <p className="display-5 text-center fw bold animate__animated animate__fadeInBottomLeft">
                {" "}
                Summarizer
              </p>
              <hr />

              <TextField
                label="Paste or write about your topic then click on the summarize button"
                multiline
                rows={12}
                size="100"
                variant="filled"
                fullWidth
                sx={{ m: 1 }}
              />
              <label className="btn btn-primary" htmlFor="upload-doc" onChange={uploadFile}>
                <i class="fas fa-upload"></i>&nbsp; Upload
              </label>  
                <input id="upload-doc" hidden accept="document/*" type="file" onChange={uploadFile} />

              <Fab
                variant="extended"
                size="medium"
                color="success"
                aria-label="add"
                style={{ float: "right" }}
              >
                Summarize
              </Fab>
            </div>
          </div>
        </div>
      </div>

      {/* //////////////////////////////////////////////// */}

      <>
        {/* Footer */}
        <footer className="bg-secondary text-center text-white">
          {/* Grid container */}
          <div className="container p-4">
            {/* Section: Social media */}
            <section className="mb-4">
              {/* Facebook */}
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="fab fa-facebook-f" />
              </a>
              {/* Twitter */}
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="fab fa-twitter" />
              </a>
              {/* Google */}
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="fab fa-google" />
              </a>
              {/* Instagram */}
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="fab fa-instagram" />
              </a>
              {/* Linkedin */}
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="fab fa-linkedin-in" />
              </a>
              {/* Github */}
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="fab fa-github" />
              </a>
            </section>
            {/* Section: Social media */}
            {/* Section: Form */}
            <section className="">
              <form action="">
                {/*Grid row*/}
                <div className="row d-flex justify-content-center">
                  {/*Grid column*/}
                  <div className="col-auto">
                    <p className="pt-2">
                      <strong>Sign up for our newsletter</strong>
                    </p>
                  </div>
                  {/*Grid column*/}
                  {/*Grid column*/}
                  <div className="col-md-5 col-12">
                    {/* Email input */}
                    <div className="form-outline form-white mb-4">
                      <input
                        type="email"
                        id="form5Example21"
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form5Example21">
                        Email address
                      </label>
                    </div>
                  </div>
                  {/*Grid column*/}
                  {/*Grid column*/}
                  <div className="col-auto">
                    {/* Submit button */}
                    <button
                      type="submit"
                      className="btn btn-outline-light mb-4"
                    >
                      Subscribe
                    </button>
                  </div>
                  {/*Grid column*/}
                </div>
                {/*Grid row*/}
              </form>
            </section>
            {/* Section: Form */}
            {/* Section: Text */}
            <section className="mb-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                distinctio earum repellat quaerat voluptatibus placeat nam,
                commodi optio pariatur est quia magnam eum harum corrupti dicta,
                aliquam sequi voluptate quas.
              </p>
            </section>
            {/* Section: Text */}
            {/* Section: Links */}
            <section className="">
              {/*Grid row*/}
              <div className="row">
                {/*Grid column*/}
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">Links</h5>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="text-white">
                        Link 1
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        Link 2
                      </a>
                    </li>
                   
                  </ul>
                </div>
                {/*Grid column*/}
                {/*Grid column*/}
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">Links</h5>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="text-white">
                        Link 1
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        Link 2
                      </a>
                    </li>
                  
                  </ul>
                </div>
                {/*Grid column*/}
                {/*Grid column*/}
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">Links</h5>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="text-white">
                        Link 1
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        Link 2
                      </a>
                    </li>
                   
                  </ul>
                </div>
                {/*Grid column*/}
                {/*Grid column*/}
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">Links</h5>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="text-white">
                        Link 1
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        Link 2
                      </a>
                    </li>
                    
                  </ul>
                </div>
                {/*Grid column*/}
              </div>
              {/*Grid row*/}
            </section>
            {/* Section: Links */}
          </div>
          {/* Grid container */}
          {/* Copyright */}
          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
          >
            © 2022 Copyright:
            <a className="text-white" href="https://mdbootstrap.com/">
              Text-o-matic.com
            </a>
          </div>
          {/* Copyright */}
        </footer>
        {/* Footer */}
      </>
    </div>
  );
};

export default Summarizer;
