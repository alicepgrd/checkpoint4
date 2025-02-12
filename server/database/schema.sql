CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL DEFAULT 'admin'
);

INSERT INTO users (name, email, password, role)
VALUES ('John Doe', 'john.doe@example.com', 'hashed_password_here', 'photographer');


CREATE TABLE pictures (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    image VARCHAR(255) NOT NULL,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

INSERT INTO pictures (title, description, image, user_id)
VALUES 
(
  "Cuba",
  "Cette photographie, prise à La Havane, reflète la simplicité et l’authenticité de Cuba. Les rues, empreintes d’histoire, se dessinent sous un ciel clair, où l’architecture ancienne rencontre le rythme tranquille du quotidien. Un moment de calme, où chaque élément semble capturer l'âme de l'île.",
  "https://cdn.pixabay.com/photo/2020/05/04/11/21/automobile-5128760_1280.jpg",
   1
);