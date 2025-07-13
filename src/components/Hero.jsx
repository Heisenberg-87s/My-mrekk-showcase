// components/Hero.jsx
export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Mrekk</h1>
        <p>He achieved the #1 score on global rankings on 08 April 2021!</p>
        <a href="https://osu.ppy.sh/users/7562902" target="_blank">
          <img
            src="/images/mrekk1.png"
            alt="Mrekk top 1"
            className="osu-score-img"
          />
        </a>
        <p>2021 - currently</p>
      </div>
    </section>
  );
}
