// import logo from './logo.svg';
// import './App.css';
import './styles.css'
import Nav from './components/Nav.js';
import Header from './components/Header.js';
import Footer from './components/Footer';
import Flowers from './components/Flowers';
import flowerData from './flowerData';


const App = () => {
  const flowers = flowerData.map((ele, index) => {
    return (
      <Flowers
        {...ele}
        // image={ele.image}
        // name={ele.name}
        // price={ele.price}
        // tags={ele.tags}
        key={index}
      />
    )
  })
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <main>{flowers}</main>
      <Footer/>
    </div>
  );
}

export default App;
