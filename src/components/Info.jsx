// components/Info.jsx
export default function Info() {
  return (
    <section className="info-section">
      <h2>More about the GOAT</h2>
      <p>32,534pp | Lv.108 | Accuracy 98.23%</p>
      <br />
      <br />
      <br />
      <h2 style={{ textAlign: "left", paddingLeft: "400px" }}>Top play</h2>
      <a href="https://osu.ppy.sh/users/7562902" target="_blank">
        <img
          src="/images/mrekk-topplay.png"
          alt="Top play"
          className="osu-score-img"
        />
      </a>
    </section>
  );
}
