import React from 'react';
import { Link } from 'react-router-dom';


class Service extends React.Component {
  render() {
  	return (
        <section className="section bg-gray" id="service">
        <div className="container">
            <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h1 className="section-title text-center">SERVICE</h1>
                        <div className="section-title-border margin-t-20"></div>
                    </div>
            </div>
            <div className="row margin-t-30">
                <div className="col-lg-6 col-sm-6 col-6">
                    <div className="services-box">
                        <img src="images/phone.png" className="img-fluid"/>
                    </div>
                </div>
                <div className="col-lg-5 col-sm-5 col-5">
                    <div className="services-box">
                        <h2 className="service-title">더 좋은 선택! 맞춤보험 <br/> 컨설팅을 도와드립니다.</h2>
                        <p className="text-muted service-desc">
                            정교한 데이터를 기반으로 고객에게 믿을 수 있는 <br/>
                            보험 보장 분석을 제공하여, 보험 설계사와 고객을 <br/>
                            연결해주는 차세대형 보험 어플입니다.
                        </p>
                        <Link to="JavaScript:Void(0);" className="btn margin-t-10 col-sm-6 col-6"><img src="images/googleStore.png" className="img-fluid"/></Link>
                        <Link to="JavaScript:Void(0);" className="btn margin-t-10 col-sm-6 col-6"><img src="images/appStore.png" className="img-fluid"/></Link>
                    </div>
                </div>
                <i class="material-icons service-icons col-lg-1 col-sm-1 col-1">arrow_forward_ios</i>
            </div>
        </div>
    </section>
  	);
  }
}
export default Service;