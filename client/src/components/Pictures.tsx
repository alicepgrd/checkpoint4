import "../components/Pictures.css";
import { useEffect, useState } from "react";
import useToast from "../hook/useToast";

type Picture = {
  id: number;
  title: string;
  description: string;
  image: string;
};

function Pictures() {
  const { success, error } = useToast();
  const [pictures, setPictures] = useState<Picture[]>([]);
  const [menuOpen, setMenuOpen] = useState<number | null>(null);
  const [editMode, setEditMode] = useState<Picture | null>(null);
  const [formData, setFormData] = useState<Picture | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/pictures`)
      .then((response) => response.json())
      .then((data) => setPictures(data))
      .catch((error) =>
        console.error("Erreur lors du chargement des photos", error),
      );
  }, []);

  const handleDelete = (id: number) => {
    fetch(`${import.meta.env.VITE_API_URL}/api/pictures/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          success("La photo a bien été supprimée.");
          setPictures((prevPictures) =>
            prevPictures.filter((picture) => picture.id !== id),
          );
        } else {
          error("Erreur lors de la suppression de la photo.");
        }
      })
      .catch(() => {
        error("Une erreur est survenue. Veuillez réessayer.");
      });
  };

  const handleAdd = (newPicture: Picture) => {
    fetch(`${import.meta.env.VITE_API_URL}/api/pictures`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPicture),
    })
      .then((response) => {
        if (response.ok) {
          success("Photo ajoutée avec succès.");
          setPictures((prev) => [...prev, newPicture]);
          setIsAdding(false);
        } else {
          error("Erreur lors de l'ajout de la photo.");
        }
      })
      .catch(() => error("Une erreur est survenue. Veuillez réessayer."));
  };

  const handleEdit = (id: number, updatedPicture: Picture) => {
    fetch(`${import.meta.env.VITE_API_URL}/api/pictures/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPicture),
    })
      .then((response) => {
        if (response.ok) {
          success("Photo modifiée avec succès.");
          setPictures((prev) =>
            prev.map((pic) =>
              pic.id === id ? { ...pic, ...updatedPicture } : pic,
            ),
          );
          setEditMode(null);
        } else {
          error("Erreur lors de la modification.");
        }
      })
      .catch(() => error("Une erreur est survenue. Veuillez réessayer."));
  };

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prevData) => {
      const defaultData = prevData ?? {
        id: 0,
        title: "",
        description: "",
        image: "",
      };

      return {
        ...defaultData,
        [name]: value,
      };
    });
  };
  const handleEditClick = (picture: Picture) => {
    setEditMode(picture);
    setFormData(picture);
  };

  const handleAddClick = () => {
    setIsAdding(true);
    setFormData({ id: 0, title: "", description: "", image: "" });
  };

  return (
    <section className="main-pictures">
      {pictures.length === 0 ? (
        <p>Aucune photo disponible</p>
      ) : (
        pictures.map((picture) => (
          <section
            key={picture.id}
            className={`picture-item ${editMode?.id === picture.id ? "no-hover" : ""}`}
          >
            <button
              type="button"
              className="menu-button"
              onClick={() =>
                setMenuOpen(menuOpen === picture.id ? null : picture.id)
              }
            >
              ⋮
            </button>
            {menuOpen === picture.id && (
              <section className="menu-dropdown">
                <button type="button" onClick={() => handleEditClick(picture)}>
                  Modifier
                </button>
                <button type="button" onClick={() => handleDelete(picture.id)}>
                  Supprimer
                </button>
              </section>
            )}

            {editMode && editMode.id === picture.id ? (
              <section className="edit-form">
                <input
                  type="text"
                  name="title"
                  value={formData?.title || ""}
                  onChange={handleFormChange}
                  placeholder="Titre"
                />
                <textarea
                  name="description"
                  value={formData?.description ?? ""}
                  onChange={handleFormChange}
                  placeholder="Description"
                />
                <button
                  type="button"
                  onClick={() => {
                    if (formData) {
                      handleEdit(picture.id, formData);
                    }
                  }}
                >
                  Sauvegarder
                </button>
                <button type="button" onClick={() => setEditMode(null)}>
                  Annuler
                </button>
              </section>
            ) : (
              <img
                src={picture.image}
                alt={picture.title}
                className="picture-image"
              />
            )}

            <section className="picture-description">
              <h1>{picture.title}</h1>
              <p>{picture.description}</p>
            </section>
          </section>
        ))
      )}
      <button className="button-add" type="button" onClick={handleAddClick}>
        <img src="button-add.png" alt="button add" className="button-add" />
      </button>
      {isAdding && (
        <section className="add-form">
          <h2>Ajouter une nouvelle photo</h2>
          <input
            type="text"
            name="title"
            value={formData?.title || ""}
            onChange={handleFormChange}
            placeholder="Titre"
          />
          <textarea
            name="description"
            value={formData?.description ?? ""}
            onChange={handleFormChange}
            placeholder="Description"
          />
          <input
            type="text"
            name="image"
            value={formData?.image || ""}
            onChange={handleFormChange}
            placeholder="URL de l'image"
          />
          <button
            type="button"
            onClick={() => {
              if (formData) {
                handleAdd(formData);
              }
            }}
          >
            Ajouter
          </button>

          <button type="button" onClick={() => setIsAdding(false)}>
            Annuler
          </button>
        </section>
      )}
    </section>
  );
}

export default Pictures;
