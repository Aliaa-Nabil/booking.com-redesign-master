import "./inspire.css";
import women from "../../img/articles/community.jpg";
import aus from "../../img/articles/auz.jpg";
import halloween from "../../img/articles/halllow.jpg";
import road from "../../img/articles/road.jpg";
import beach from "../../img/articles/beach.jpg";
const Inspire = () => {
  return (
    <div className="container-fluied articles-container">
      <div className="row d-flex g-0  ">
        <div className="col-lg-4 inspo d-flex flex-column">
          <div className="article tall-article m-3">
            <div className="short-desc tall-desc">
              <div className="w-75">
                <h6>20/10/2022</h6>
                <p>Travel community around the world .</p>
              </div>
            </div>
            <img className="h-100" src={women} alt="" />
          </div>
        </div>

        <div className="col-lg-4 inspo d-flex flex-column">
          <div className="article m-3">
            <div className="short-desc">
              <div className="w-75">
                <h6>20/10/2022</h6>
                <p>The world’s top 10 places to celebrate Halloween .</p>
              </div>
            </div>
            <img className="h-100" src={halloween} alt="" />
          </div>
          <div className="article m-3">
            <div className="short-desc">
              <div className="w-75">
                <h6>20/10/2022</h6>
                <p>7 unique stays for your next Australia vacation .</p>
              </div>
            </div>
            <img className="h-100" src={aus} alt="" />
          </div>
        </div>

        <div className="col-lg-4 inspo  d-flex flex-column">
          <div className="article m-3 ">
            <div className="short-desc">
              <div className="w-75">
                <h6>20/10/2022</h6>
                <p>Australia’s 5 most spectacular road trips .</p>
              </div>
            </div>
            <img className="w-100" src={road} alt="" />
          </div>
          <div className="article m-3">
            <div className=" short-desc">
              <div className="w-75">
                <h6>20/10/2022</h6>
                <p>The best city-plus-beach breaks .</p>
              </div>
            </div>
            <img className="w-100" src={beach} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Inspire;
