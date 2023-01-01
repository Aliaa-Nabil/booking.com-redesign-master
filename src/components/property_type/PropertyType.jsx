import villaz from "../../img/types/villa6.jpg";
import cabins from "../../img/types/cabins.jpg";
import cottage from "../../img/types/cottage.jpg";
import hotel from "../../img/types/hotel.jpg";
import apart from "../../img/types/apartment.jpg";
import resort from "../../img/types/resort.jpg";

const PropertyType = () => {
  return (
    <div className="container-fluied">
      <div className="row d-flex g-0  ">
        <div className="col-lg-2 other m-0 d-flex flex-column">
          <div className="prop">
            <h4 className="">VILLA</h4>
            <img className="h-100" src={villaz} alt="" />
          </div>
          <div className="prop">
            <h4 className="">CABIN</h4>
            <img className="h-100 " src={cabins} alt="" />
          </div>
          <div className="prop">
            <h4 className="">COTTAGE</h4>
            <img className="h-100" src={cottage} alt="" />
          </div>
        </div>

        <div className="col-lg-2 other m-0 d-flex flex-column">
          <div className="prop ">
            <h4 className="">HOTEL</h4>
            <img className="h-100" src={hotel} alt="" />
          </div>
          <div className="prop">
            <h4 className="">APARTMENT</h4>
            <img className="h-100" src={apart} alt="" />
          </div>
          <div className="prop">
            <h4 className="">RESORT</h4>
            <img className="h-100" src={resort} alt="" />
          </div>
        </div>

        <div className="col-lg-8 trend d-flex ">
          <div
            id="propertyType"
            className="carousel carousel-fade"
            data-bs-ride="true"
          >
            <div className="carousel-inner ">
              <div className="carousel-item cars d-flex active ">
                <div className="cars-caption pt-3">
                  <h5>Villas</h5>
                  <div className="rev-score d-flex pt-2">
                    <small className="mx-2">458,440 villas</small>
                  </div>
                </div>
                <img className="w-100 media-car  " src={villaz} alt="" />
              </div>

              <div className="carousel-item cars d-flex ">
                <div className="cars-caption pt-3">
                  <h5>Hotels</h5>
                  <div className="rev-score d-flex pt-2">
                    <small className="mx-2">906,699 hotels</small>
                  </div>
                </div>
                <img className="w-100 media-car " src={hotel} alt="" />
              </div>
              <div className="carousel-item cars d-flex ">
                <div className="cars-caption pt-3">
                  <h5>Resorts</h5>
                  <div className="rev-score d-flex pt-2">
                    <small className="mx-2">17,782 resorts</small>
                  </div>
                </div>
                <img className="w-100 media-car " src={resort} alt="" />
              </div>
              <div className="carousel-item cars d-flex ">
                <div className="cars-caption pt-3">
                  <h5>Apartments</h5>
                  <div className="rev-score d-flex pt-2">
                    <small className="mx-2">861,174 apartments</small>
                  </div>
                </div>
                <img className="w-100 media-car" src={apart} alt="" />
              </div>
              <div className="carousel-item cars d-flex ">
                <div className="cars-caption pt-3">
                  <h5>Cottages</h5>
                  <div className="rev-score d-flex pt-2">
                    <small className="mx-2">170 cottages</small>
                  </div>
                </div>
                <img className="w-100 media-car " src={cottage} alt="" />
              </div>
              <div className="carousel-item cars d-flex">
                <div className="cars-caption pt-3">
                  <h5>Cabins</h5>
                  <div className="rev-score d-flex pt-2">
                    <small className="mx-2">36,112 cabins</small>
                  </div>
                </div>
                <img className="w-100 media-car " src={cabins} alt="" />
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#propertyType"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#propertyType"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyType;
