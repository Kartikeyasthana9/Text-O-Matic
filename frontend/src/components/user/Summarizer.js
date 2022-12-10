import React from "react";
import 'animate.css';

const Summarizer = () => {
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
          <div className="row" >
            <div className="col-sm-4">
              <div className="card w-80 animate__animated animate__slideInUp " style={{ background: "#dff1ee" }}>
                <div className="card-body ">
                  <img
                    src="https://www.sammurize.com/images/assets/ils_15.svg"
                    alt=""
                    className="img-fluid  card-img-top "
                   
                    
                  />
                  <p>Join Our Platform</p>
                  <p className=" fw-bold">
                    It only takes a minute. <br/> Set up is smooth and simple
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card w-80 animate__animated animate__slideInUp" style={{ background: "#dff1ee" }} >
                <div className="card-body" >
                  <img
                    src="https://www.sammurize.com/images/assets/ils_16.svg"
                    alt=""
                    className="img-fluid  card-img-top"
                    
                  />
                  <p>Create new research</p>
                  <p className=" fw-bold">
                    Create a new research and  start gathering documents as pdf
                    files or public URL article links
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card w-80 animate__animated animate__slideInUp"style={{ background: "#dff1ee" }} >
                <div className="card-body">
                  <img
                    src="https://www.sammurize.com/images/assets/ils_07.svg"
                    alt=" "
                    width="100"
                    className="img-fluid card-img-top"
                  />
                  <p>Start summarizing text</p>
                  <p className=" fw-bold">
                    Get detailed keywords and  <br /> summarize main points  <br /> for each
                    document
                  </p>
                </div>
              </div>
            </div>
          </div>


          {/* //////////////////////////////////////////////// */}

          <h1 className="animate__animated animate__bounce">An animated element</h1>

        </div>
      </div>
    </div>
  );
};

export default Summarizer;
