import "./Events.css";

function Events() {
  return (
    <section id="section-events">
      {/* <div class="container"> */}
      <h2 class="event-heading">Our Journey</h2>

      <div class="row event-image-box">
        <img src="images/5836.jpg" alt="" class="event-img" />
      </div>

      <div class="timeline-items">
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-date">08 October 2021</div>
          <div class="timeline-content">
            <h3 class="h3-timeline">Hacktoberfest 2021 Kickoff</h3>
            <p>
              A session handled by Liyas Thomas, Founder and CEO of Hoppscotch
              (Open source API development ecosystem). He was one of the 15
              recipients of GitHub open source Grants from India. He was also
              the User Interface Designer at Appwrite.
            </p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-date">24 September 2021</div>
          <div class="timeline-content">
            <h3 class="h3-timeline">What.py</h3>
            <p>
              an exciting foundation session on Python called What.py, led by
              Mr. Shaheen Hyder, CEO of Pygrammers.
            </p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-date">21 August 2021</div>
          <div class="timeline-content">
            <h3 class="h3-timeline">Thi̱sav̱rós</h3>
            <p>
              Section on resume preparation by Mr. Udesh Udayakumar, a Google
              Cloud Consultant at Deloitte India.
            </p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-date">12 August 2021</div>
          <div class="timeline-content">
            <h3 class="h3-timeline">Odi̱gía</h3>
            <p>
              Session of making engaging presentations by Ms. Nafeela N, WIT
              Leat at KMEA Engineering College.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Events;
