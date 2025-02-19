import { Button, Container, Row, Col, InputGroup, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="page-footer font-small blue pt-4">
      <Container>
        <div className="footer-main">
          <h1>
            Create a new <span style={{ color: "#426ED1" }}> Campaign </span>{" "}
            now
          </h1>
          <p>
            Reach out for any questions on our Enterprise plan, pricing, or
            security. Chat <br></br> with an enterprise collaboration
            specialist.
          </p>
          <div className="footer-btn">
            <Link to="/">
              <Button className="btn btn-success" aria-pressed="false">
                Connect Wallet
              </Button>
            </Link>
            <Link to="/">
              <Button className="btn btn-primary" aria-pressed="false">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </Container>
      <div className="container-fluid footer-nav text-left text-md-left">
        <div className="row">
          <div className="col-md-5 mt-md-0 mt-3">
            <img src="logo-white.png" alt="logo" width={"150px"} />
            <ul className="list-unstyled">
              <li>
                <a href="/">
                  <span style={{ color: "#426ED1" }}>Total Raised:</span>{" "}
                  25,000,000
                </a>
              </li>
              <li>
                <a href="/">
                  <span style={{ color: "#426ED1" }}>Total Campaigns:</span>{" "}
                  23,000
                </a>
              </li>
              <li>
                <a href="/">
                  <span style={{ color: "#426ED1" }}>Active Campaigns:</span>{" "}
                  244
                </a>
              </li>
            </ul>
          </div>

          <hr className="clearfix w-100 d-md-none pb-0" />

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="footer-group-name">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">Campaign</Link>
              </li>
              <li>
                <Link to="/">Our Team</Link>
              </li>
              <li>
                <Link to="/">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="col-md-4 mb-md-0 mb-3 foot-btn">
            <h5 className="footer-group-name">Newsletter</h5>
            <p className="newsletter-intro">
              To receive industry updates on latest educational funds <br />{" "}
              program please subscribe for our monthly campaigns
            </p>
            <Form>
              <Row className="align-items-left">
                <Col xs="8 g-1">
                  <InputGroup hasValidation>
                    <InputGroup.Text>@</InputGroup.Text>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email address"
                      required
                    />
                    <Form.Control.Feedback></Form.Control.Feedback>
                  </InputGroup>
                </Col>
                <Col xs="4 g-1">
                  <Button type="submit" className="form-submit">
                    Subscribe{" "}
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  </Button>
                </Col>

                <div className="mt-3"></div>

                <div className="social-icons">
                  <a href="/" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-facebook-square"></i>
                  </a>
                  <a href="/" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-instagram-square"></i>
                  </a>
                  <i className="fa-brands fa-linkedin"></i>
                  <a href="/" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </div>
              </Row>
            </Form>
          </div>
        </div>
        <hr />
        <div className="footer-copyright text-left py-3">
          <a href="/">
            DFMlab ©{new Date().getFullYear()}. All Rights Reserved.
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
