import './App.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import Footer from './Components/Footer';


function App() {
  const books = [
    { image: "https://storage.googleapis.com/du-prd/books/images/9781649374172.jpg", title: 'IRON FLAME', description: 'The second book in the Empyrean series. Violet Sorrengail’s next round of training might require her to betray the man she loves.' },
    { image: "https://storage.googleapis.com/du-prd/books/images/9781649374042.jpg", title: 'FOURTH WING', description: 'Violet Sorrengail is urged by the commanding general, who also is her mother, to become a candidate for the elite dragon riders.' },
    { image: "https://storage.googleapis.com/du-prd/books/images/9781538719916.jpg", title: 'THE EDGE', description: 'The second book in the 6:20 Man series. Travis Devine investigates the murder of the C.I.A. operative Jenny Silkwell in rural Maine.' },
    { image: "https://storage.googleapis.com/du-prd/books/images/9780062406651.jpg", title: 'THE LITTLE LIAR', description: 'The actions of an 11-year-old boy help facilitate the delivery of Jewish residents, including his family, to Auschwitz.' },
   ];

  return (
    <div className="App">
      <div className="App">
        <Navbar />
        <Main books={books} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
