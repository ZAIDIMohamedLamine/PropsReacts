import "./App.css";
import Contact from "./Profile/Contact";
import Home from "./Profile/Home";
import About from "./Profile/About";
import Services from "./Profile/Services";
import PropTypes from "prop-types";

function App() {
  let handleName = () => {
    alert("Welcom to ZAIDI Mohamed Lamine Portfolio");
  };

  return (
    <div className="App">
      <Home
        name="ZAIDI Mohamed Lamine"
        bio="ZAIDI Mohamed Lamine, Geologist and Geotechnical engineer at COSIDER ENGINEERING, Student at GMC to becom a futer Web Developer."
        title="Geologist and Web Developer"
        image="../src/img/Bettercallme.png"
        handleFunction={handleName}
      />
      <About
        title="Geologist"
        detail="7 Years of experience as a Labortory engineer, Geotechnical engineer and Geologist. Currently studying full-stack development and working towards becoming a skilled developer in both front-end and back-end technologies."
        skill1="GIS"
        skill2="Foxta"
        skill3="Adobe Illustrator"
        skill4="HTML"
        skill5="CSS"
        skill6="React"
      />
      <Services />
      <Contact
        email="amine2013.ami@gmail.com"
        cell="+2136666666"
        address="Home At Algiers, ALGERIA"
      />
    </div>
  );
}

Home.defaultProps = {
  name: "ZAIDI Mohamed Lamine",
  bio: "ZAIDI Mohamed Lamine, Geologist and Geotechnical engineer at COSIDER ENGINEERING, Student at GMC to becom a futer Web Developer.",
  title: "Web Developer",
  image: "../src/img/Bettercallme.png",
};

Home.propTypes = {
  name: PropTypes.string,
  bio: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
};

About.propTypes = {
  title: PropTypes.string,
  detail: PropTypes.string,
  skill1: PropTypes.string,
  skill2: PropTypes.string,
  skill3: PropTypes.string,
  skill4: PropTypes.string,
  skill5: PropTypes.string,
  skill6: PropTypes.string,
};

About.defaultProps = {
  title: "Web Developer",
  detail:
    "Based in USA have a 3+ year professional experience Lorem ipsum dolor sit amet consectetur adipisicing.",
  skill1: "HTML5",
  skill2: "CSS3",
  skill3: "JavaScript",
  skill4: "Figma",
  skill5: "React",
  skill6: "Node",
};

Contact.PropTypes = {
  email: PropTypes.string,
  cell: PropTypes.string,
  address: PropTypes.string,
};

Contact.defaultProps = {
  email: "abc@gmail.com",
  cell: "+1234985543",
  address: "Abc street Manhattan NYC",
};

export default App;
