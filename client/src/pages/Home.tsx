import Form from "../components/Form";
import Pictures from "../components/Pictures";
import "../pages/Home.css";

function Home() {
  return (
    <>
      <header className="header-home">
        <section className="header-home-text">
          <h1>Eliot Greenfield </h1>
          <p> Photographe </p>
        </section>
        <img src="building.jpg" alt="profile-picture" />
      </header>
      <h2 className="portfolio-title">PORTFOLIO</h2>
      <Pictures />
      <section id="contact-section">
        <Form />
      </section>
    </>
  );
}

export default Home;
