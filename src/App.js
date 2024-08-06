import logo from './logo.svg';
import './App.css';
import Navigation from './customers/components/Navigation';
import HomePage from './customers/pages/HomePage';
import Footer from './customers/components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div>
        <Navigation />
      </div>
      <div>
        <HomePage />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
