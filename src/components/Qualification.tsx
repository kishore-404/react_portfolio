import circle from "../assets/images/shape-circle.svg"
const Qualification = () => {
  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">Experience and Education</span>

      <div className="qualification__container container grid section__border">
        {/* QUALIFICATION 1 - Education */}
        <div className="qualification__content">
          <h3 className="qualification__title">
            <i className="ri-book-line"></i> Education
          </h3>
          <div className="qualification__info">
            <div>
              <h3 className="qualification__name">Bachelor’s in Computer Science</h3>
              <span className="qualification__place">Loyola college</span>
              <span className="qualification__year">2023 - 2026</span>
            </div>
            <div>
              <h3 className="qualification__name">
                Master in Full Stack Web Development with Python
              </h3>
              <span className="qualification__place">I.T.VEDANT</span>
              <span className="qualification__year">2024 - 2025</span>
            </div>
            <div>
              <h3 className="qualification__name">Senior Secondary & High School</h3>
              <span className="qualification__place">Santhome Higher Secondary School</span>
              <span className="qualification__year">2017 - 2023</span>
            </div>
          </div>
        </div>

        {/* QUALIFICATION 2 - Experience */}
        <div className="qualification__content">
          <h3 className="qualification__title">
            <i className="ri-building-line"></i> Experience
          </h3>
          <div className="qualification__info">
            <div>
              <h3 className="qualification__name">Social Media Manager</h3>
              <span className="qualification__place">Mano Fitness Studio - Triplicane</span>
              <span className="qualification__year">Feb 2023 - Jan 2025</span>
            </div>
            <div>
              <h3 className="qualification__name">Frontend Developer Intern</h3>
              <span className="qualification__place">CodeShip - WestMambalam</span>
              <span className="qualification__year"> Feb 2025 - August 2025</span>
            </div>
          </div>
        </div>
      </div>

      <img
        src={circle}
        alt="qualification image"
        className="qualification__img"
      />
    </section>
  );
};

export default Qualification;
