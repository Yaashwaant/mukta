body {
  overflow: hidden;
  font-family: "Roboto", sans-serif;
  background: linear-gradient(135deg, black, #220033);
  color: white;
  text-align: center;
}

.carousel {
  position: relative;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-item {
  position: absolute;
  width: 300px;
  height: 400px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: black;
  box-shadow: 0 10px 50px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  transition: transform 0.8s ease-in-out;
}

.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.title {
  position: absolute;
  bottom: 20px;
  left: 20px;
  font-size: 24px;
  color: white;
}

.num {
  position: absolute;
  top: 10px;
  left: 20px;
  font-size: 30px;
  color: white;
}

.cursor {
  position: fixed;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  pointer-events: none;
  display: none;
}
