import Footer from "../components/Footer";
import "./About.css";

function About() {
  return (
    <>
      <section className="about-container">
        <img src="brouillard.png" alt="fog" className="about-image" />
        <section className="about-content">
          <div className="about-text">
            <h2>ELLIOT</h2>
            <p>
              I was born and raised in a world where every moment deserves to be
              captured. Photography is more than a job for me, it's a way of
              telling stories, capturing raw emotion and immortalizing memories.
            </p>
            <p>
              Whether you're looking for a unique artistic vision for your
              project, a photo report or a collaboration, I'd be delighted to
              talk to you.
            </p>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default About;
