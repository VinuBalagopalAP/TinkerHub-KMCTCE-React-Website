import "./Thingswedo.css";

function Thingswedo() {
  return (
    <section class="section-wedo">
      <div class="container">
        <h2 class="wedo-heading">Things we do</h2>

        <div class="team-img-box">
          <img src="images/9814-removebg-preview.png" alt="" class="team-img" />
        </div>

        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div class="card">
              <div class="card-body">
                <i class="fas fa-tools icon-wedo"></i>
                <h5 class="card-title">Skills Enhancement</h5>
                <p class="card-text">
                  We aim at providing the opportunity and knowledge to develop
                  the necessary skills to gain experience in your desired fields
                  through our experienced instructors.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="card">
              <div class="card-body">
                <i class="fas fa-users icon-wedo"></i>
                <h5 class="card-title">Meetups</h5>
                <p class="card-text">
                  We hold regular gatherings to foster deep ties among our
                  members and to promote peer-to-peer learning.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="card">
              <div class="card-body">
                <i class="fas fa-people-carry icon-wedo"></i>
                <h5 class="card-title">Bootcamps</h5>
                <p class="card-text">
                  Our bootcamps provide intensive training for students that
                  include practice sessions and training assignments.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="card">
              <div class="card-body">
                <i class="fas fa-handshake icon-wedo"></i>
                <h5 class="card-title">Networking</h5>
                <p class="card-text">
                  Join in on our workshops, talks, interactive sessions and a
                  lot more to pick up a new skill or to enhance your skill
                  through our well educated instructors.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="card">
              <div class="card-body">
                <i class="fas fa-chalkboard-teacher icon-wedo"></i>
                <h5 class="card-title">Webinars</h5>
                <p class="card-text">
                  We frequently host informative and interactive webinar
                  sessions to provide excellent education to our students.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="card">
              <div class="card-body">
                <i class="fas fa-user-friends icon-wedo"></i>
                <h5 class="card-title">Mentoring and support</h5>
                <p class="card-text">
                  We provide outstanding support to students as they progress
                  through their technical education. We offer step-by-step
                  instructions and 24/7 support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Thingswedo;
