import React from 'react';
import { Link } from 'react-router-dom';

class AboutUs extends React.Component {
  render() {
  	return (
            <section className="section pt-5" id="AboutUs">
              <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h1 className="section-title text-center">ABOUT US</h1>
                        <div className="section-title-border margin-t-20"></div>
                    </div>
                </div>

                <div className="row margin-t-30">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="embed-responsive embed-responsive-16by9 margin-t-30">
                            <iframe src="images/movie.mp4" class="embed-responsive-item" frameborder="0" />
                        </div>
                    </div>
                <div className="row margin-t-30 offset-lg-2 offset-1 bg-wave">
                    <div className="col-lg-6 ">
                        <div className="blog-box margin-t-30">
                            <div>
                                <h4 className="mt-3"><Link to="JavaScript:Void(0);" className="blog-title">사람을 위한 서비스의 <br/> 가능성을 열어갑니다. </Link></h4>
                                <div className="aboutus-line-wrapper">
                                    <img src="images/line.png" className="img-fluid"/>
                                </div>
                                <p className="text-muted aboutus-description"> 
                                CONCAT은 데이터와 알고리즘에 대한 이해와 분석을 기반으로 <br/> 
                                사용자의 삶에 긍정적인 변화를 이끌어내는 조직입니다. <br/><br/> 
                                혁신적이고 실험적인 접근법과 사용자 중심의 문제 해결 능력을 <br/> 
                                바탕으로, 삶에 가장 확실한 가치를 제공할 수 있는 서비스를 <br/> 
                                만들고자 합니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
  	);
  }
}
export default AboutUs;