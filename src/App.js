
import './App.css';
import Navbar from "./navbar";
import Header from "./header";
import Footer from "./footer";

function App() {
  return (
    <div className="App">
       <Navbar />
      <Header />
       <section>
        <div className="cards-container">

          <div className="card">
            <h3>💻 Front-End Development</h3>
            <p>Building modern and responsive websites using React.</p>
            <button>Read More</button>
          </div>

          <div className="card">
            <h3>🎨 UI / UX Design</h3>
            <p>Designing beautiful and user-friendly interfaces.</p>
            <button>Read More</button>
          </div>

          <div className="card">
            <h3>⚡ Performance</h3>
            <p>Optimizing website speed and performance.</p>
            <button>Read More</button>
          </div>

          <div className="card">
            <h3>📱 Responsive</h3>
            <p>Making websites work perfectly on all devices.</p>
            <button>Read More</button>
          </div>

        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
