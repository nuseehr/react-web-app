import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render() {
  	return (
         <footer className="footer bg-lightdark">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3 margin-t-20">
                        <img src="images/Logo_white.png" className="logo" />
                        <div className="text-muted margin-t-20">
                            <ul className="list-unstyled footer-list">
                                <li><Link to="JavaScript:Void(0);">Home</Link></li>
                                <li><Link to="JavaScript:Void(0);">About us</Link></li>
                                <li><Link to="JavaScript:Void(0);">Careers</Link></li>
                                <li><Link to="JavaScript:Void(0);">Contact us</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 margin-t-20 offset-lg-6 offset-md-6">
                        
                        <div className="text-muted margin-t-20">
                            <p className="contact_info">
                            <i class="material-icons contact_icons">room</i>
                            서울특별시 강남구 삼성로 96길 청림빌딩 4F
                            </p>
                            <p className="contact_info">
                            <i class="material-icons contact_icons">call</i>
                            000-0000-0000
                            </p>
                            <p className="contact_info">
                            <i class="material-icons contact_icons">mail</i>
                            jyk@concat.kr
                            </p>
                        </div>
                        <div className="contact_copyright text-muted margin-t-20">
                            <p>Copyright © CONCAT Corp. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
  	);
  }
}
export default Footer;