import "./Intro.css";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span> <br />
        <span className="introText">
          I'm <span className="introName">Dada</span> <br /> Frontend Engineer
        </span>
        <p className="introParagraph">
          i am a skilled web designer with experience in creating <br />{" "}
          visually appealing and user friendly websites.
        </p>
        <Link>
          <button className="btn">
            <img src="./assets/hireme.png" alt="" className="btnImg" /> Hire Me
          </button>
        </Link>
      </div>
      {/* <img src="./assets/image.png" alt="" className="bg" /> */}
      <img src="./assets/image1.png" alt="" className="bg" />
    </section>
  );
};

export default Intro;
