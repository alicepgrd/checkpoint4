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
      <Pictures />
      <section className="about">
        <h2> ABOUT </h2>
        <p>
          {" "}
          Je suis Eliot Greenfield, photographe passionné par l’art de saisir
          l’éphémère. Mon travail célèbre la beauté des instants simples,
          transformant l’ordinaire en émotions intemporelles. Bienvenue dans mon
          univers visuel, où chaque image raconte une histoire.
        </p>
      </section>
      <Form />
    </>
  );
}

export default Home;
