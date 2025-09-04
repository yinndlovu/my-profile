import "./GalaxyBackground.css";

const GalaxyBackground = () => {
  const starCount = 100;
  const stars = Array.from({ length: starCount }, (_, index) => (
    <div
      key={index}
      className="star"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${Math.random() * 3 + 1}px`,
        height: `${Math.random() * 3 + 1}px`,
        animationDuration: `${Math.random() * 20 + 10}s`,
        animationDelay: `${Math.random() * 5}s`,
      }}
    />
  ));

  return (
    <div className="galaxy-background">
      <div className="nebula-layer" />
      <div className="stars-layer">{stars}</div>
      <div className="twinkling-layer" />
      <div className="overlay-layer" />
    </div>
  );
};

export default GalaxyBackground;
