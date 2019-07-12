import React from 'react';


class Navbar extends React.Component {
  render() {
  	return (
        <nav className="navbar navbar-expand-lg bg-light fixed-top navbar-custom sticky sticky-dark">
            <div className="container">
                <a className="navbar-brand" href="#home">
                    <img src="images/Logo.png" className="logo" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <i class="material-icons">menu</i>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav navbar-center" id="mySidenav">
                        <li className="nav-item">
                            <a href="#AboutUs" className="nav-link">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="#service" className="nav-link">Service</a>
                        </li>
                        <li className="nav-item">
                            <a href="#team" className="nav-link">Team</a>
                        </li>
                        <li className="nav-item">
                            <a href="#career" className="nav-link">Career</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
  	);
  }
}

export default Navbar;