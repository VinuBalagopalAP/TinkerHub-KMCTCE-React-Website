/* eslint-disable jsx-a11y/anchor-is-valid */
import image from "./TinkerHub_KMCTCE-1.png";
import "./Header.css";

function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link nav-span active" href="index.html">
            Home <span class="sr-only">(current)</span>
          </a>
          <a class="nav-item nav-link nav-span" href="#section-events">
            Events
          </a>
          <a class="nav-item nav-link nav-span" href="resources.html">
            Resources
          </a>
          <a class="nav-item nav-link nav-span" href="#about-us">
            About us
          </a>
        </div>
      </div>
      <a class="navbar-brand pull-right">
        <img class="nav-logo" src={image} alt="Logo" />
      </a>
    </nav>
  );
}

export default Header;
