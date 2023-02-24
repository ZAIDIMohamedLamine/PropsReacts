
import './App.css';
import Contact from './Profile/Contact';
import Home from './Profile/Home';
import About from './Profile/About';
import Services from './Profile/Services';
import PropTypes from "prop-types";

function App() {
  
  let handleName = () => {
    alert("John Schmidt");
  };

  return (
    <div className="App">
      <Home name="John Schmidt" bio="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, ipsa?Lorem ipsum, dolor sit amet consectetur adipisicing." title="Web Developer" image="https://preview.colorlib.com/theme/schmidt/images/jschmidt-2.png.webp" handleFunction={handleName} />
      <About title="Web Developer" detail="Based in USA have a 3+ year professional experience Lorem ipsum dolor sit amet consectetur adipisicing." skill1="HTML5" skill2="CSS3" skill3="JavaScript" skill4="Figma" skill5="React" skill6="Node" />
      <Services />
      <Contact email="abc@gmail.com" cell="+1234985543" address="Abc street Manhattan NYC"/>
    </div>
  );
}

Home.defaultProps = {
  name: "John Schmidt",
  bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, ipsa?Lorem ipsum, dolor sit amet consectetur adipisicing.",
  title: "Web Developer",
  image: 'https://preview.colorlib.com/theme/schmidt/images/jschmidt-2.png.webp'
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
  skill6: PropTypes.string
};

About.defaultProps = {
  title: "Web Developer",
  detail: "Based in USA have a 3+ year professional experience Lorem ipsum dolor sit amet consectetur adipisicing.",
  skill1: 'HTML5',
  skill2: 'CSS3',
  skill3: 'JavaScript',
  skill4: 'Figma',
  skill5: 'React',
  skill6: 'Node'
};

Contact.PropTypes = {
  email: PropTypes.string,
  cell: PropTypes.string,
  address: PropTypes.string
};

Contact.defaultProps = {
  email: 'abc@gmail.com',
  cell: '+1234985543',
  address: 'Abc street Manhattan NYC'
};

export default App;
