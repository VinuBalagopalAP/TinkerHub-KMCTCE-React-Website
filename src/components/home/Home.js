import homeimage from "./home.jpg";
import "./Home.css";

function Home() {
  return (
    <header class="section__home">
      <div class="center">
        <div class="text__box">
          <h1 class="home__heading">
            <span class="home__heading__1">
              Tinker<span className="home__heading__1__span">Hub</span>
            </span>
            <span class="home__heading__2">KMCTCE</span>
          </h1>
          <p class="home__para">
            A community dedicated to peer-to-peer learning and connecting
            students with resources. We provide students with opportunity to
            study, grow, and expand their technical abilities.
          </p>
        </div>

        <div>
          <img class="hero__img" src={homeimage} alt="homeimage" />
        </div>
      </div>
    </header>
  );
}
export default Home;
