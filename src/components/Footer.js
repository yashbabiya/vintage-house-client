import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
   <footer className="footer bg-success  mt-auto py-3 text-center">
        <div className="row">
          <div className="container-fluid col-4">
            <h5 className="text-white">Feel free to contact us @VintageHouse </h5>
            <button className="btn btn-warning btn-sm py-1">Contact us</button>
          </div>
          <div className="container-fluid col-4">
            <span className="text-muted"  >Office: surat gujarat </span>
            <span className="text-white">395008</span>
          </div>
          <div className="container-fluid col-4">
            <span className="text-muted">
              Your one stop for all the{" "}
              <span className="text-white">Antique </span> Collectibles
            </span>
          </div>
        </div>
      </footer>
  );
}
