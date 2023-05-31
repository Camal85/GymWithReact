import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to="/" className="logo">
            <img src={Logo} alt="FooterLogo" />
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
            sequi? Unde expedita illum ex voluptate magnam dolorum voluptatum
            mollitia ipsam!
          </p>
          <div className="problems">
            <a href="" target="_blank" rel="noreferrer noopener">
              <FaLinkedin />
            </a>{" "}
            <a href="" target="_blank" rel="noreferrer noopener">
              <FaFacebook />
            </a>{" "}
            <a href="" target="_blank" rel="noreferrer noopener">
              <AiFillInstagram />
            </a>{" "}
            <a href="" target="_blank" rel="noreferrer noopener">
              <AiOutlineTwitter />
            </a>
          </div>
        </article>
        <article>
          <h4>Permalinks</h4>
          <Link to="/about">About</Link>
          <Link to="/plans">Plans</Link>
          <Link to="/trainers">Trainers</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </article>
        <article>
          <h4>Insights</h4>
          <Link to="/s">Blog</Link>
          <Link to="/s">Case Studies</Link>
          <Link to="/s">Events</Link>
          <Link to="/s">Communities</Link>
          <Link to="/s">FAQs</Link>
        </article>
        <article>
          <h4>Get In Touch</h4>
          <Link to="/contact">Contact Us</Link>
          <Link to="/s">Support</Link>
        </article>
      </div>
      <div className="footer__copyright">
        <small>2023 EGATOR TUTORIALS &copy; All Rights Reserved </small>
      </div>
    </footer>
  );
};

export default Footer;
