import React from "react";
import "./App.css";

export default function App() {
	return (
		<main className="App">
			<section className="glass">
				<aside className="dashboard">
					<div className="user">
						<img src="./images/avatar.png" alt="avatar" />
						<h3>Loren Ipsum</h3>
						<p>Pro Member</p>
					</div>
					<div className="links">
						<div className="link">
							<img src="./images/twitch.png" alt="Twitch" />
							<h2>Streams</h2>
						</div>
						<div className="link">
							<img src="./images/steam.png" alt="Twitch" />
							<h2>Games</h2>
						</div>
						<div className="link">
							<img src="./images/upcoming.png" alt="Twitch" />
							<h2>New</h2>
						</div>
						<div className="link">
							<img src="./images/library.png" alt="Twitch" />
							<h2>Library</h2>
						</div>
					</div>
					<div className="pro">
						<h2>Joing pro for free games.</h2>
						<img src="./images/controller.png" alt="nitendo controler" />
					</div>
				</aside>
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
