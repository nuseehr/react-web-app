import React from 'react';
import { Link } from 'react-router-dom';

class Started extends React.Component {
  render() {
  	return (
        <section className="section section-lg bg-get-start" id="career">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 text-center">
                        <h1 className="get-started-title text-white">CAREER</h1>
                        <div className="section-title-border-white margin-t-20"></div>
                        <h4 className="get-started-title text-white margin-t-20">Get in Touch</h4>
                        <p className="section-subtitle text-white text-center padding-t-30 font-secondary">
                        도전적이고 책임감을 갖춘 Unbound Thinker를 찾습니다. <br/> 
                        원하는 직무의 채용공고가 보이지 않는다면 언제든 jyk@concat.kr로 이력서를 보내주세요. 
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 text-center margin-t-20">
                    <Link to="JavaScript:Void(0);" className="btn-apply margin-t-30">
                    APPLY<i class="material-icons apply-icons">arrow_forward_ios</i>
                    </Link>
                    </div>
                </div>
            </div>
        </section>
  	);
  }
}
export default Started;