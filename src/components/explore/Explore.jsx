import "./explore.css";
import { FaAngleDoubleRight } from "react-icons/fa";
import { CgArrowLeftO, CgArrowRightO } from "react-icons/cg";

const Explore = () => {
  return (
    <div className="explore">
      <div
        id="explore"
        className="carousel carousel-fade explore  "
        data-bs-ride="carousel"
      >
        <div className="carousel-inner position-relative">
          <div className="carousel-item explore-item egypt active">
            <div className="">
              <h3 className="">Discover Cairo .</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                ab delectus voluptates et? Fugiat animi sequi, velit inventore
                praesentium libero.
              </p>
              <button className="btn">
                Read more
                <FaAngleDoubleRight className="" />
              </button>
            </div>
          </div>

          <div className="carousel-item explore-item egypt dahab ">
            <div className="">
              <h3 className="">Discover Dahab .</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                ab delectus voluptates et? Fugiat animi sequi, velit inventore
                praesentium libero.
              </p>
              <button className="btn">
                Read more
                <FaAngleDoubleRight className="" />
              </button>
            </div>
          </div>

          <div className="carousel-item explore-item egypt marsa  ">
            <div className="">
              <h3 className="">Discover Marsa Alam .</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                ab delectus voluptates et? Fugiat animi sequi, velit inventore
                praesentium libero.
              </p>
              <button className="btn">
                Read more
                <FaAngleDoubleRight className="" />
              </button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev explore-btn"
          type="button"
          data-bs-target="#explore"
          data-bs-slide="prev"
        >
          <CgArrowLeftO className="new-icon" />
        </button>

        <button
          className="carousel-control-next explore-btn "
          type="button"
          data-bs-target="#explore"
          data-bs-slide="next"
        >
          <CgArrowRightO className="new-icon move" />
        </button>
      </div>
    </div>
  );
};

export default Explore;
