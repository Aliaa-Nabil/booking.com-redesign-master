import "./offers.css";

const Offers = () => {
  return (
    <div className="feat">
      <div className="container ">
        <div className="row">
          <div className="col-lg-4">
            <div className="choose ">
              <h4 className="offers-text">
                Promotions and special offers <br /> for you <br />. <br />{" "}
              </h4>
            </div>
          </div>

          <div className="col-lg-4 ticket-cont">
            <div className="ticket ">
              <div className="ticket-head ">
                <div className="barcode" />
              </div>
              <div className="ticket-body"></div>
              <div className="fotter p-3">
                <p>
                  Late Escape Athena Deals starting at <small>EGP 1,445</small>
                </p>
              </div>
            </div>

            <div className="ticket ticket-2 ">
              <div className="ticket-head ticket-2">
                <div className="barcode" />
              </div>
              <div className="ticket-body"></div>
              <div className="fotter p-3">
                <p>
                  Late Escape Dubai Deals starting at <small>EGP 1,665</small>
                </p>
              </div>
            </div>

            <div className="ticket ">
              <div className="ticket-head ticket-3">
                <div className="barcode" />
              </div>
              <div className="ticket-body"></div>
              <div className="fotter p-3">
                <p>
                  Late Escape Athena Deals starting at <small>EGP 1,445</small>
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 ticket-cont">
            <div className="ticket">
              <div className="ticket-head ticket-4">
                <div className="barcode" />
              </div>
              <div className="ticket-body"></div>
              <div className="fotter p-3">
                <p>
                  Late Escape Istanbol Deals starting at{" "}
                  <small>EGP 1,225</small>
                </p>
              </div>
            </div>

            <div className="ticket  ">
              <div className="ticket-head ticket-5">
                <div className="barcode" />
              </div>
              <div className="ticket-body"></div>
              <div className="fotter p-3">
                <p>
                  Late Escape london Deals starting at <small>EGP 1,445</small>
                </p>
              </div>
            </div>

            <div className="ticket  ">
              <div className="ticket-head ticket-6">
                <div className="barcode" />
              </div>
              <div className="ticket-body"></div>
              <div className="fotter p-3">
                <p>
                  Late Escape dahab Deals starting at <small>EGP 1,000</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
