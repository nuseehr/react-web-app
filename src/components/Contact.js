import React from 'react';

class Contact extends React.Component {
  render() {
  	return (
        <section className="section bg-dark" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 text-center">
                        <h1 className="get-started-title text-white">CONTACT</h1>
                        <p className="section-subtitle font-secondary text-white text-center padding-t-30 contact_desc">서울특별시 강남구 삼성로 96길 청림빌딩 4F
                        </p>
                        <iframe width="100%" height="450" frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ1685yBSkfDURO_N3ZLRVsQw&key=AIzaSyCAcy1Q6Bw4Kv4sRx32pMMhnCmgaLJX4r8" allowfullscreen="" ></iframe>
                    </div>
                </div>
            </div>
        </section>
  	);
  }
}
export default Contact;