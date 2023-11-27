import "./works.css";

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle"> My Portfolio</h2>
      <span className="worksDesc">
        I take pride in paying attention to the smallest details and making sure
        that my work is pixel perfect. I am excited to bring my skills and
        experience to help business achieve their goals and create a strong
        online presence.
      </span>
      <div className="worksImgs">
        <img
          src="../../assets/portfolio-1.png"
          alt="Portfolio1"
          className="worksImg"
        />
        <img
          src="../../assets/portfolio-2.png"
          alt="Portfolio2"
          className="worksImg"
        />
        <img
          src="../../assets/portfolio-3.png"
          alt="Portfolio3"
          className="worksImg"
        />
        <img
          src="../../assets/portfolio-4.png"
          alt="Portfolio4"
          className="worksImg"
        />
        <img
          src="../../assets/portfolio-5.png"
          alt="Portfolio5"
          className="worksImg"
        />
        <img
          src="../../assets/portfolio-6.png"
          alt="Portfolio6"
          className="worksImg"
        />
      </div>
      <button className="workBtn">See More</button>
    </section>
  );
};

export default Works;
