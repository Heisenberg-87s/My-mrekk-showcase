import VideoBackground from "./components/VideoBackground";
import VideoBackground1 from "./components/VideoBackground1";
import Hero from "./components/Hero";
import Info from "./components/Info";
import "./App.css"


function App() {
  const name = "Mrekk";

  return (
    <>
      <div style={{ width: "100vw", height: "100vh", margin: 0, padding: 0 }}>
        <VideoBackground />
      </div>

      <Hero />
      <Info />
      
      <div style={{ width: "100vw", height: "100vh", margin: 0, padding: 0 }}>
        <VideoBackground1 />
      </div>

    </>
  );
}

export default App;
