
import React from 'react';
import logo from "./logo.png";

const Header = (props) => {
    return (
        <main className="container">
					<section className="row my-3 flex-column align-items-center justify-content-center">
						<img src={logo} alt="Studio Ghibli Logo" />
                        <h1>Ghibli Films</h1>
						<div className="d-flex">
						</div>
					</section>
				</main>
    )
}

export default Header;