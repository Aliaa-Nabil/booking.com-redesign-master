import "./fotter.css";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

const Fotter = () => {
  return (
    <footer className="text-center text-lg-start main-fotter text-muted">
      <section className="d-flex connect border-top  border-bottom">
        <div className="social ">
          <h5>Get connected with us on social networks:</h5>
          <div>
            <span className="m-3">
              <FaFacebook className="s-ico s-icon" />
            </span>
            <span className="m-3">
              <FaTwitter className="s-ico s-icon" />
            </span>
            <span className="m-3">
              <FaInstagram className="s-ico s-icon" />
            </span>
          </div>
        </div>
      </section>

      <section className>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className=" mb-4 logo">booking.com</h6>
              <p className="fotter-text">
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit ame.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">book now</h6>
              <p>
                <a href="#!" className="text-light fotter-text">
                  Hotels
                </a>
              </p>
              <p>
                <a href="#!" className="text-light fotter-text">
                  Properties
                </a>
              </p>
              <p>
                <a href="#!" className="text-light fotter-text">
                  Countries
                </a>
              </p>
              <p>
                <a href="#!" className="text-light fotter-text">
                  Discover
                </a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="fotter-text">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" className="fotter-text">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" className="fotter-text">
                  Booking
                </a>
              </p>
              <p>
                <a href="#!" className="fotter-text">
                  Help
                </a>
              </p>
            </div>
           
          </div>
        </div>
      </section>

      <div className="text-center fotter-text p-4 ">
        <span className="mx-2 copy-right"> © 2022 Copyright/</span>
        <a className="copy-right">aliaa.nabil.design@gmail.com </a>
      </div>
    </footer>
  );
};

export default Fotter;
