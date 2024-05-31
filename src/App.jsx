import "./App.css";
import Image from "./components/Image";
import NavBar from "./components/NavBar";
import Video from "./components/Video";

function App() {
  return (
    <>
      {/* haeder */}
      <NavBar />
      {/* video */}
      <Video />
      <div>
        {/* Image */}
        <Image />
      </div>
    </>
  );
}

export default App;
