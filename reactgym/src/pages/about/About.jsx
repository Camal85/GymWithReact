import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";
import "./about.css";

const About = () => {
  return (
    <>
      <Header title="About us" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nihil
        unde suscipit cupiditate atque maiores vero provident deleniti quisquam
        blanditiis!
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis inventore ea atque ratione quisquam, quos, voluptate
              quia illo quo tenetur, omnis nisi provident rerum! Laboriosam.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
              fuga provident impedit ipsam quisquam possimus quod esse deserunt
              culpa neque.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus, laborum eveniet rem quo minima ullam!
            </p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis inventore ea atque ratione quisquam, quos, voluptate
              quia illo quo tenetur, omnis nisi provident rerum! Laboriosam.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
              fuga provident impedit ipsam quisquam possimus quod esse deserunt
              culpa neque.
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Story Image" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Mission Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis inventore ea atque ratione quisquam, quos, voluptate
              quia illo quo tenetur, omnis nisi provident rerum! Laboriosam.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
              fuga provident impedit ipsam quisquam possimus quod esse deserunt
              culpa neque.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus, laborum eveniet rem quo minima ullam!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
