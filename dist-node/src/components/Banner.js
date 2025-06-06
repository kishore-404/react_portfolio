import kishore from "../assets/images/kishore.png";
import shape_wawes from "../assets/images/shape-wawes.svg";
import shape_circle from "../assets/images/shape-circle.svg";
import { RiLinkedinBoxLine, RiGithubLine, RiInstagramLine } from 'react-icons/ri';
function Banner() {
    return (<>
   <section className="home section" id="home">
      <div className="home__container container grid section__border">
        <div className="home__data grid">
          <h1 className="home__title">
            Hi, I'm Kishore <br />
            Full Stack Web Developer <br />
            <br />
          </h1>

          <div className="home__blob grid">
            <div className="home__perfil">
              <img src={kishore} alt="home perfil"/>
            </div>
            <img src={shape_wawes} alt="" className="home__shape-wawes"/>
            <img src={shape_circle} alt="" className="home__shape-circle"/>
          </div>

          <ul className="footer__social">
            <li>
              <a href="https://www.linkedin.com/in/kishore-kumar-b8529b284/" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                <RiLinkedinBoxLine />
              </a>
            </li>
            <li>
              <a href="https://github.com/kishore-404" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                <RiGithubLine />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/mr_poppy.23/?hl=en" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                <RiInstagramLine />
              </a>
            </li>
          </ul>
        </div>

        {/* ==================== HOME INFO 1 ==================== */}
        <div className="home__info">
          <div>
            <h3 className="home__info-title">BIOGRAPHY</h3>
            <p className="home__info-description">
              Hi, I'm Kishore, Full Stack Web Developer. Passionate about building modern websites with React.
            </p>
          </div>
          <div>
            <h3 className="home__info-title">CONTACT</h3>
            <p className="home__info-description">
              Mylapore, Chennai <br />
              kishores.developer@gmail.com <br />
              +91 9500041579 <br />
            </p>
          </div>
          <div>
            <h3 className="home__info-title">ACHIEVEMENTS</h3>
            <p className="home__info-description">
              Awarded Gold Medal for Academic Excellence in Computer Science 2024 <br />
              Selected as - Codeship Intern, 2025 <br />
            </p>
          </div>
        </div>

        {/* ==================== HOME INFO 2 ==================== */}
        <div className="home__info">
          <div>
            <h3 className="home__info-title">GRADUATING IN</h3>
            <p className="home__info-number">2026</p>
          </div>
          <div>
            <h3 className="home__info-title">COMPLETED PROJECTS</h3>
            <p className="home__info-number">3+</p>
          </div>
          <div>
            <h3 className="home__info-title">COMPANIES WORKED FOR</h3>
            <p className="home__info-number">2+</p>
          </div>
        </div>
      </div>
    </section>
   </>);
}
export default Banner;
