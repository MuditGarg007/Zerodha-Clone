import React from "react";

function OpenAccount() {
  return (
    <div className="container p-5 text-center mb-5">
      <div className="row">
        <h1 className="mt-5">Open a zerodha account</h1>
        <p className="text-muted">
          Modern platforms and apps, &#x20b9;0 investments, and flat &#x20b9;20
          intraday and F&O trades.
        </p>
        <button
          className="mt-2 p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "15%", margin: "0 auto" }}
        >
          Sign up Now
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
