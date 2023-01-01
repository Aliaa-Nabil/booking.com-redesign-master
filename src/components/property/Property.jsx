import "./property.css";

import villa from "../../img/property/1.jpg";
import villa_2 from "../../img/property/villa2.jpg";
import villa_3 from "../../img/property/villa3.jpg";
import villa_4 from "../../img/property/villa4.jpg";
import villa_5 from "../../img/property/villa5.jpg";
import villa_6 from "../../img/property/villa6.jpg";

const Property = () => {
  return (
    <div className="container">
      <div className="row d-flex g-0  ">
        <div className="col-lg-8  trend d-flex ">
          <div
            id="carouselExampleControls"
            className="carousel carousel-fade"
            data-bs-ride="true"
          >
            <div className="carousel-inner ">
              <div className="carousel-item cars d-flex  active ">
                <div className="cars-caption pt-3">
                  <h5>La Roulotte de Ciney</h5>
                  <div className="rev-score d-flex pt-2">
                    <p>8.6</p>
                    <h6>Very Good</h6> <small>87 reviews</small>
                  </div>
                </div>

                <img className="w-100 media-car" src={villa} alt="" />
              </div>

              <div className="carousel-item cars d-flex ">
                <div className="cars-caption pt-3">
                  <h5>Agriturismo Cabrele</h5>
                  <div className="rev-score d-flex pt-2">
                    <p>9.3</p>
                    <h6>Wonderful</h6> <small>166 reviews</small>
                  </div>
                </div>

                <img className="w-100 h-100 media-car" src={villa_2} alt="" />
              </div>
              <div className="carousel-item cars d-flex ">
                <div className="cars-caption pt-3">
                  <h5>Ranczo w Dolinie</h5>
                  <div className="rev-score d-flex pt-2">
                    <p>9.5</p>
                    <h6>Exceptional</h6> <small>214 reviews</small>
                  </div>
                </div>

                <img className="w-100 media-car" src={villa_3} alt="" />
              </div>
              <div className="carousel-item cars d-flex ">
                <div className="cars-caption pt-3">
                  <h5>Mini Hotel Übernachten</h5>
                  <div className="rev-score d-flex pt-2">
                    <p>8.3</p>
                    <h6>Very Good</h6> <small>144 reviews</small>
                  </div>
                </div>

                <img className="w-100 media-car" src={villa_4} alt="" />
              </div>
              <div className="carousel-item cars d-flex ">
                <div className="cars-caption pt-3">
                  <h5>La Sapinette</h5>
                  <div className="rev-score d-flex pt-2">
                    <p>8.7</p>
                    <h6>Excellent</h6> <small>43 reviews</small>
                  </div>
                </div>

                <img className="w-100 media-car" src={villa_5} alt="" />
              </div>
              <div className="carousel-item cars d-flex">
                <div className="cars-caption pt-3">
                  <h5>MFC Erfurter Seen</h5>
                  <div className="rev-score d-flex pt-2">
                    <p>8.3</p>
                    <h6>Very Good</h6> <small>131 reviews</small>
                  </div>
                </div>

                <img className="w-100 media-car" src={villa_6} alt="" />
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="col-lg-2 other  m-0 d-flex flex-column">
          <div className="prop ">
            <h4 className="">Book Now</h4>
            <img className="h-100  " src={villa} alt="" />
          </div>
          <div className="prop">
            <h4 className="">Book Now</h4>
            <img className="h-100 " src={villa_2} alt="" />
          </div>
          <div className="prop">
            <h4 className="">Book Now</h4>
            <img className="h-100 " src={villa_3} alt="" />
          </div>
        </div>

        <div className="col-lg-2 other  m-0 d-flex flex-column">
          <div className="prop">
            <h4 className="">Book Now</h4>
            <img className="w-100 h-100 " src={villa_4} alt="" />
          </div>
          <div className="prop">
            <h4 className="">Book Now</h4>
            <img className="w-100 h-100" src={villa_5} alt="" />
          </div>
          <div className="prop">
            <h4 className="">Book Now</h4>
            <img className="w-100 h-100" src={villa_6} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
