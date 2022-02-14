import Dashboard from "./components/Dashboard"
import "./App.css";

export default function App() {
  return (
    <main className="App">
      <section className="glass">
        <Dashboard />
        <section className="games">
          <div className="status">
            <h1>Active Games</h1>
            <input type="text" />
          </div>
          <div className="cards">
            <div className="card">
              <img src="./images/assassins.png" alt="Assassins Cread" />
              <div className="card-info">
                <h2>Assassins Creed Valhalla</h2>
                <p>PS5 Version</p>
                <div className="progress"></div>
              </div>
              <h2 className="percentage">60%</h2>
            </div>

            <div className="card">
              <img src="./images/sackboy.png" alt="Sack Boy" />
              <div className="card-info">
                <h2>Sack Boy</h2>
                <p>PC Version</p>
                <div className="progress"></div>
              </div>
              <h2 className="percentage">20%</h2>
            </div>

            <div className="card">
              <img src="./images/spiderman.png" alt="Spider Man" />
              <div className="card-info">
                <h2>Spider Man</h2>
                <p>PS5 Version</p>
                <div className="progress"></div>
              </div>
              <h2 className="percentage">60%</h2>
            </div>
          </div>
        </section>
      </section>
      <div className="circle1"></div>
      <div className="circle2"></div>
    </main>
  );
}
