import React from 'react';
import './App.css';

function App() {
  return (
    <main className='App'>
      <section className='glass'>
        <aside className='dashboard'>
          <div className='user'>
            <img src='./images/avatar.png' alt='avatar'/>
            <h3>Loren Ipsum</h3>
            <p>Pro Member</p>
          </div>
          <div className="links">
            <div className="link">
              <img src="./images/twitch.png" alt="Twitch"/>
              <h2>Streams</h2>
            </div>
            <div className="link">
              <img src="./images/steam.png" alt="Twitch"/>
              <h2>Games</h2>
            </div>
            <div className="link">
              <img src="./images/upcoming.png" alt="Twitch"/>
              <h2>New</h2>
            </div>
            <div className="link">
              <img src="./images/library.png" alt="Twitch"/>
              <h2>Library</h2>
            </div>
          </div>
          <div className="pro">
            <h2>Joing pro for free games.</h2>
            <img src="./images/controller.png" alt="nitendo controler" />
          </div>
        </aside>
      </section>
      <div className='circle1'></div>
      <div className='circle2'></div>
    </main>
  );
}

export default App;
