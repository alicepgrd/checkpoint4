import "../components/Pictures.css";
import { useEffect, useState } from "react";

type Picture = {
  id: number;
  title: string;
  description: string;
  image: string;
};

function Pictures() {
  const [pictures, setPictures] = useState<Picture[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/pictures`)
      .then((response) => response.json())
      .then((data) => {
        setPictures(data);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des photos : ", error);
      });
  }, []);

  return (
    <section className="main-pictures">
      {pictures.length === 0 ? (
        <p>Aucune photo disponible</p>
      ) : (
        pictures.map((picture) => (
          <section key={picture.id} className="picture-item">
            <img
              src={picture.image}
              alt={picture.title}
              className="picture-image"
            />
            <section className="picture-description">
              <h1>{picture.title}</h1>
              <p>{picture.description}</p>
            </section>
          </section>
        ))
      )}
    </section>
  );
}

export default Pictures;
