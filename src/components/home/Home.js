import homeimage from "./home.jpg";
import "./Home.css";

function Home() {
  return (
    <header class="section-home">
      <div class="center">
        <div class="text-box">
          <h1 class="home-heading">
            <span class="home-heading__1">Tinkerhub</span>
            <span class="home-heading__2">KMCTCE</span>
          </h1>
          <p class="home-para">
            A community dedicated to peer-to-peer learning and connecting
            students with resources. We provide students with opportunity to
            study, grow, and expand their technical abilities.
          </p>
        </div>

        <div>
          <img class="hero-img" src={homeimage} alt="homeimage" />
        </div>
      </div>
    </header>
  );
}
export default Home;
