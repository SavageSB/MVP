import './App.css';
import 'w3-css/w3.css';
import Main from './Components/Main/Main';
import Navbar from './Components/Navbar/Navbar';
import Search from './Components/Search-field/Search';
import Cards from './Components/Cards/Cards';
function App() {
  const slides = [
    { url: "http://localhost:3000/img2.png", title: "virus" },
    { url: "http://localhost:3000/img3.png", title: "doctor" },
    { url: "http://localhost:3000/img1.png", title: "painkiller" }
  ]
  return (
    <div className="app">
      <Navbar></Navbar>
      <br></br>
      <br></br>
      <br></br>
      <Main slides={slides}></Main>
      <br></br>
      <br></br>
      <Search></Search>
      <br></br>
      <br></br>
      <Cards></Cards>
    </div>
  );

}
export default App;
