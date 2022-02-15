export default function Cards() {
  return (
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
  )
}
