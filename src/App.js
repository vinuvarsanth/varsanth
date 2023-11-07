import './App.css';
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
function App()
{
  // inside div tag we can give multiple components but in only one components is supported inside return.
  return (
    <div>
      <Navbar/>
      <Main/>
      <Footer/>
    </div>

  );
}

export default App; // default export
