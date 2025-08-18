import Game from '../Game';
import Header from '../Header';
import Footer from '../Footer';

function App() {
  return (
    <div className="wrapper">
      <Header />

      <div className="game-wrapper">
        <Game />
        
      </div>
      <Footer />
    </div>
  );
}

export default App;
