import "./navbar.css";
import {
  IoCaretDown,
  IoMenuSharp,
  IoBedSharp,
  IoAirplaneSharp,
  IoCarSport,
  IoGolfSharp,
} from "react-icons/io5";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg slide-in-top  ">
      <div className="container d-flex justify-content-center ">
      
          <a className="nav-link logo-phone" href="#">
            booking.com
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-bar"
            aria-controls="#navbar-bar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <IoMenuSharp className="menu-icon" />
          </button>
        
        <div className="collapse navbar-collapse" id="navbar-bar">
          <div className="container">
            <div className="row">
              <div className="navbar-nav d-flex justify-content-start col-2 ">
                <a className="logo" href="#">
                  booking.com
                </a>
              </div>

              <div className="navbar-nav col-7 d-flex justify-content-center ">
                <a className="nav-link" href="">
                  <IoBedSharp className="icon" /> Stays
                </a>
                <a className="nav-link" href="">
                  <IoAirplaneSharp className="icon p-icon" />
                  Flights
                </a>
                <a className="nav-link " href="">
                  <IoCarSport className="icon" />
                  Car rentals
                </a>
                <a className="nav-link" href="#">
                  <IoGolfSharp className="icon" />
                  Attractions
                </a>
                <a className="nav-link" href="#">
                  <IoCarSport className="icon" />
                  Airport taxis
                </a>
              </div>

              <div className="navbar-nav col-3  d-flex justify-content-center  ">
                <div class="vr m-2"></div>
                <a className="nav-link " href="">
                  Sign in
                  <IoCaretDown />
                </a>
                <a className="nav-link " href="">
                  Register <IoCaretDown />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
