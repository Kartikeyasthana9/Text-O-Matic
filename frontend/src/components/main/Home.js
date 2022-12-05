import React from "react";
import "./Style.css";
import myimg from "./img/first.png";

const Home = () => {
  return (
    <div>
      <section className="section-hero">
        <div className="hero">
          <div className="hero-text-box">
            <h1 className="heading-primary">
              Summarize any text with a click of a button
            </h1>
            <p className="hero-description">
              Text-o-matic can condense articles, papers, or documents down to
              the key points instantly. Our AI uses natural language processing
              to locate critical information while maintaining the original
              context.
            </p>
           
            <a href="#" className="btn btn--outline">
              Learn more ↓
            </a>
            <div className="delivered-meals">
              <div className="delivered-imgs">
                {/* <img src="img/customers/customer-1.jpg" alt="Customer photo" />
                <img src="img/customers/customer-2.jpg" alt="Customer photo" />
                <img src="img/customers/customer-3.jpg" alt="Customer photo" />
                <img src="img/customers/customer-4.jpg" alt="Customer photo" />
                <img src="img/customers/customer-5.jpg" alt="Customer photo" />
                <img src="img/customers/customer-6.jpg" alt="Customer photo" /> */}
              </div>
              <p className="delivered-text">
                {/* <span>250,000+</span> xyz xyz xyz xyz xyz */}
              </p>
            </div>
          </div>
          <div className="hero-img-box">
            <img
              src={myimg}
              className="hero-img"
              alt="intelligent text analyzer"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
