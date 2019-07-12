import React from 'react';
import Navbar from './components/Navbar';
import CoreValues from './components/CoreValues';
import Service from './components/Service';
import Team from './components/Team';
import Career from './components/Career';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Aux from './hoc/Aux_';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
  render() {
  	return (
        <Aux>
                <Navbar />
                <section className="section bg-home home-half" id="home">
                    <div className="display-table">
                        <div className="display-table-cell">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 offset-lg-2 text-white text-center">
                                        <h1 className="home-title text-white margin-t-50">WELCOME TO <br/> CONCAT</h1>
                                        <p className="padding-t-15 text-white home-desc">
                                            "In search of new possibilities, <br/> 
                                            made possible through innovaive attempts"
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* AboutUs Component*/}
                <AboutUs />

                {/* Service Component*/}
                <Service />

                {/* CoreValues Component*/}
                <CoreValues />
                
                {/* Team Component*/}
                <Team />

                {/* Started Component*/}
                <Career />
                
                {/* Footer Component*/}
                <Footer /> 
               
        </Aux>
  	);
  }
}

export default HomePage;