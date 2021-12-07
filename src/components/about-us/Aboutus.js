import "./Aboutus.css";
import Mission from "./mission";
import Vision from "./Vision";

function Aboutus() {
  return (
    <section id="about-us" class="about-us">
      <div class="container">
        <h2>About us</h2>
        <Mission />
        <Vision />
        {/* <Committee /> */}
      </div>
    </section>
  );
}
export default Aboutus;
