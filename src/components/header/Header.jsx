import "./header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaAngleDoubleRight,
} from "react-icons/fa";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";

const Header = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adults: 1,
    children: 0,
    rooms: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "inc" ? options[name] + 1 : -1,
      };
    });
  };

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="true"
    >
      <div className="position-relative ">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className=" container-fluied header  ">
              <div className="frame p-3">
                <div className="mt-5 caption-container d-flex flex-column align-item-center ">
                  <h2 className="focus-in-contract-bck">
                    It's Time to discover <br /> your Adventure.
                  </h2>
                  <div className="d-flex justify-content-center">
                    <button className="slide-in-bottom button-main">
                      Book Now
                      <FaAngleDoubleRight className="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className=" container-fluied header header-2  ">
              <div className="frame frame-2 p-3">
                <div className="mt-5 caption-container d-flex flex-column align-item-center ">
                  <h2 className="focus-in-contract-bck">
                    Find your next stay &<br />
                    Search deals on hotels .
                  </h2>
                  <div className="d-flex justify-content-center">
                    <a href="">
                      <button className="button-main slide-in-bottom">
                        Search
                        <FaAngleDoubleRight className="" />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className=" container-fluied header header-3 ">
              <div className="frame frame-3 p-3">
                <div className="mt-5 caption-container d-flex flex-column align-item-center ">
                  <h2 className="focus-in-contract-bck">
                    Search flight and hotel <br /> sites all at once.
                  </h2>
                  <div className="d-flex justify-content-center">
                    <a href="">
                      <button className="button-main slide-in-bottom">
                        Search
                        <FaAngleDoubleRight className="" />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev "
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="socials ">
        <span className="m-3">
          <FaFacebook className="s-icon" />
        </span>
        <span className="m-3">
          <FaTwitter className="s-icon" />
        </span>
        <span className="m-3">
          <FaInstagram className="s-icon" />
        </span>
      </div>

      <div className="search slide-in-top">
        <div className="container-fluied p-0">
          <div className="row p-0">
            <div className="col-lg-3 col-md-6 col-sm-6 srch-sec ">
              <input
                type="text"
                className="search-input"
                placeholder="Where are you going ?"
              />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 srch-sec ">
              <span
                onClick={() => setOpenDate(!openDate)}
                className="search-input"
              >
                {`${format(date[0].startDate, "dd/MM/yy")}`}
                &nbsp; to &nbsp;
                {` ${format(date[0].endDate, "dd/MM/yy")}`}
              </span>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="date"
                />
              )}
            </div>
            <div className=" srch-sec col-lg-3 col-md-6 col-sm-6 no-brdr ">
              <span
                onClick={() => setOpenOptions(!openOptions)}
                className="search-input"
              >
                {`${options.adults}
                     adult 
                     / ${options.children} 
                    children 
                     / ${options.rooms} room `}
              </span>

              {openOptions && (
                <div className="options">
                  <div className="option-item">
                    <span className="option-text">Adult</span>
                    <div className="option-counter">
                      <span
                        className="counter-btn"
                        onClick={() => handleOption("adults", "dec")}
                      >
                        -
                      </span>
                      <span className="counter-number">{options.adults}</span>
                      <span
                        className="counter-btn"
                        onClick={() => handleOption("adults", "inc")}
                      >
                        +
                      </span>
                    </div>
                  </div>
                  <div className="option-item">
                    <span className="option-text">Children</span>
                    <div className="option-counter">
                      <span
                        className="counter-btn"
                        onClick={() => handleOption("children", "dec")}
                      >
                        -
                      </span>
                      <span className="counter-number">{options.children}</span>
                      <span
                        className="counter-btn"
                        onClick={() => handleOption("children", "inc")}
                      >
                        +
                      </span>
                    </div>
                  </div>
                  <div className="option-item">
                    <span className="option-text">Rooms</span>
                    <div className="option-counter">
                      <span
                        className="counter-btn"
                        onClick={() => handleOption("rooms", "dec")}
                      >
                        -
                      </span>
                      <span className="counter-number">{options.rooms}</span>
                      <span
                        className="counter-btn"
                        onClick={() => handleOption("rooms", "inc")}
                      >
                        +
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6  srch-sec no-brdr ">
              <button type="button" className="srch-btn">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
