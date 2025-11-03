import React from "react";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className=" bg-neutral p-10 mt-5">
      <Container>
        <div className="text-neutral-content footer sm:footer-horizontal bg-neutral">
          <nav>
            <h6 className="f-title">CS — Ticket System</h6>
            <p className="w-38">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </nav>
          <nav>
            <h6 className="f-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Our Mission</a>
            <a className="link link-hover">Contact Saled</a>
          </nav>
          <nav>
            <h6 className="f-title">Service</h6>
            <a className="link link-hover">Product & Service</a>
            <a className="link link-hover">Customer Stories</a>
            <a className="link link-hover">Download</a>
          </nav>
          <nav>
            <h6 className="f-title">Information</h6>
            <a className="link link-hover">Privacy Policy</a>
            <a className="link link-hover">Terms & Conditions</a>
            <a className="link link-hover">Join Us</a>
          </nav>
          <nav>
            <h6 className="f-title">Social Links</h6>
            <a href="">@CS — Ticket System</a>
            <a href="">@CS — Ticket System</a>
            <a href="">@CS — Ticket System</a>
            <a href="">support@cst.com</a>
          </nav>
        </div>
        <footer className="footer footer-center text-white mt-5 border-t border-gray-700">
          <aside>
            <p>© 2025 CS — Ticket System. All rights reserved.</p>
          </aside>
        </footer>
      </Container>
    </footer>
  );
};

export default Footer;
