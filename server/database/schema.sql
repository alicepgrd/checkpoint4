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
  "This photograph, taken in Havana, reflects the simplicity and authenticity of Cuba. The streets, steeped in history, unfold under a clear sky, where ancient architecture meets the tranquil rhythm of daily life. A moment of calm, where every element seems to capture the soul of the island.",
  "https://cdn.pixabay.com/photo/2020/05/04/11/21/automobile-5128760_1280.jpg",
   1
),
(
  "Hawai",
  "This photograph, taken in Hawaii, reveals the purity and magic of the islands. The landscapes, bathed in light, stretch between a shimmering ocean and majestic mountains, where nature reigns supreme. A suspended moment, where every detail seems to embody the vibrant and serene spirit of this tropical paradise",
  "https://cdn.pixabay.com/photo/2020/02/11/10/24/sea-4839056_1280.jpg",
   1
),
(
  "USA",
  "This photograph, taken in Antelope Canyon, captures the mesmerizing beauty of nature’s sculpted masterpiece. Sunlight cascades through narrow cracks, illuminating the smooth, flowing walls in warm hues of orange and red. Each curve and shadow tells a story of time and transformation, creating a serene yet awe-inspiring moment that embodies the quiet power of the Earth.",
  "https://cdn.pixabay.com/photo/2010/12/23/12/43/sandstone-4025_1280.jpg",
   1
),
(
  "Tokyo",
  "This photograph, taken in Tokyo, captures the vibrant energy and harmonious contrasts of the city. Neon lights reflect off sleek skyscrapers, while quiet alleyways whisper stories of tradition and modernity intertwined. A fleeting moment where the pulse of urban life meets the serenity of hidden corners, embodying the soul of a city that never sleeps yet always finds balance.",
  "https://cdn.pixabay.com/photo/2025/01/20/20/11/shrine-9348003_1280.jpg",
   1
),
(
  "Canada",
  "This photograph, taken in Canada, captures the vast, untamed beauty of its landscapes. Towering mountains, serene lakes, and endless forests stretch under expansive skies, where nature’s grandeur feels both timeless and boundless. A quiet moment where the wilderness speaks, embodying the raw, peaceful spirit of a land shaped by ice, wind, and water.",
  "https://cdn.pixabay.com/photo/2023/05/28/09/21/south-tyrol-8023213_1280.jpg",
   1
);