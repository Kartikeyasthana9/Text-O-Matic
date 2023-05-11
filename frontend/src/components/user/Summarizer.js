import React, { useRef, useState } from "react";
import "animate.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";

const Summarizer = () => {
  const [selFile, setSelFile] = useState("");
  const [loading, setLoading] = useState(false);

  const inputRef = useRef();

  const uploadFile = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setSelFile(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    console.log("uploading File ...");

    fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then(async (res) => {
      console.log(res.status);
    });
  };

  const summarizeText = async () => {
    const res = await fetch(
      "http://localhost:8000/textomatic/api/v1/summarize"
    );
  };

  return (
    <div>
      <header className="bg-secondary">
        <div className="container py-4">
          <p className="display-2 text-center fw-bold text-white ">
            Summarizer
          </p>
          <div className="row">
            <div className="col-md-6">
            <img
              src="https://sassbook.com/images/sb_story_writer_card.svg"
              className="img-fluid animate__animated animate__fadeInRight"
              width="540"
              
              height="356"
              alt="Photo"
            />
            </div>
            <div className="col-md-6 py-5">
            <p class="h4">
              A text summarizer is an online tool that wraps up a text to a
              specified short length. It condenses a long article to main
              points. The need for text summarizers is increasing day by day,
              because of time constraints. People are looking for shortcut
              methods to learn ideas in lesser time. Even text summarizers are
              helping them to decide whether a book, a research paper, or an
              article is worth reading or not.
            </p>
            </div>
          </div>
        </div>
      </header>

      {/* ////////////////////////////////////////////////////////////////// */}

      {/* <div style={{ background: "#dff1ee" }}>
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
      </div> */}

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
                ref={inputRef}

              />
              <button className="btn btn-primary" onClick={summarizeText}>Summarize</button>
              <label
                className="btn btn-primary"
                htmlFor="upload-doc"
                onChange={uploadFile}
              >
                <i class="fas fa-upload"></i>&nbsp; Upload
              </label>
              <input
                id="upload-doc"
                hidden
                accept="document/*"
                type="file"
                onChange={uploadFile}
              />

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
    </div>
  );
};

export default Summarizer;
