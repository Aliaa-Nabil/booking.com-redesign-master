import "./countries.css";

const Countries = () => {
  return (
    <div className="position-relative">
      <div className="search-background">
        <div className="blur w-80 h-100 p-0 m-0"></div>
      </div>
      <div className="countainer ">
        <div className="row m-0">
          <div className="cell col-lg-3 d-flex flex-column  ">
            <div className="country paris card ">
              <div class="content">
                <h2 class="country-name">PARIS</h2>
                <p class="copy">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quidem officiis atque quisquam unde voluptas voluptate.
                </p>
                <button class="btn">View Trips</button>
              </div>
            </div>

            <div className="country malta card">
              <div class="content">
                <h2 class="country-name">MALTA</h2>
                <p class="copy">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quidem officiis atque quisquam unde voluptas voluptate.
                </p>
                <button class="btn">View Trips</button>
              </div>
            </div>
          </div>
          <div className="cell col-lg-3 d-flex flex-column ">
            <div className="country new-york card ">
              <div class="content">
                <h2 class="country-name">NEW YORK</h2>
                <p class="copy">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quidem officiis atque quisquam unde voluptas voluptate.
                </p>
                <button class="btn">View Trips</button>
              </div>
            </div>
            <div className="country egypt card">
              <div class="content">
                <h2 class="country-name">EGYPT</h2>
                <p class="copy">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quidem officiis atque quisquam unde voluptas voluptate.
                </p>
                <button class="btn">View Trips</button>
              </div>
            </div>
          </div>
          <div className="cell col-lg-3 d-flex flex-column ">
            <div className="country japan card   ">
              <div class="content">
                <h2 class="country-name">JAPAN</h2>
                <p class="copy">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quidem officiis atque quisquam unde voluptas voluptate.
                </p>
                <button class="btn">View Trips</button>
              </div>
            </div>

            <div className="country dubai card">
              <div class="content">
                <h2 class="country-name">DUBAI</h2>
                <p class="copy">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quidem officiis atque quisquam unde voluptas voluptate.
                </p>
                <button class="btn">View Trips</button>
              </div>
            </div>
          </div>
          <div className="cell col-lg-3 d-flex flex-column ">
            <div className="country aus card ">
              <div class="content">
                <h2 class="country-name">AUSTRALIA</h2>
                <p class="copy">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quidem officiis atque quisquam unde voluptas voluptate.
                </p>
                <button class="btn">View Trips</button>
              </div>
            </div>
            <div className="country canada card">
              <div class="content">
                <h2 class="country-name">CANADA</h2>
                <p class="copy">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quidem officiis atque quisquam unde voluptas voluptate.
                </p>
                <button class="btn">View Trips</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countries;
