import React from 'react';

class Team extends React.Component {
  render() {
  	return (
     <section className="section pt-4" id="team">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h1 className="section-title text-center">MEMBERS</h1>
                        <div className="section-title-border margin-t-20"></div>
                        <p className="section-subtitle text-muted text-center font-secondary padding-t-30">함께 문화를 해결하고 서로의 비전을 나누는 <br/> 사람들이 모여 즐겁고 치열하게 일합니다.</p>
                    </div>
                </div>
                <div className="row margin-t-50">
                    <div className="col-lg-3 col-sm-6 col-6">
                        <div className="team-box hover-effect">
                            <div className="team-wrapper">
                                <div className="team-member">
                                    <img alt="" src="images/team/img-1.jpg" className="img-fluid rounded" />
                                </div>
                            </div>
                            <h4 className="team-name">김재엽 대표</h4>
                            <p className="text-uppercase team-designation">CEO</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-6">
                        <div className="team-box hover-effect">
                            <div className="team-wrapper">
                                <div className="team-member">
                                    <img alt="" src="images/team/img-2.jpg" className="img-fluid rounded" />
                                </div>
                            </div>
                            <h4 className="team-name">곽태민</h4>
                            <p className="text-uppercase team-designation">DEVELOPER</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-6">
                        <div className="team-box hover-effect">
                            <div className="team-wrapper">
                                <div className="team-member">
                                    <img alt="" src="images/team/img-3.png" className="img-fluid rounded" />
                                </div>
                            </div>
                            <h4 className="team-name">박재용</h4>
                            <p className="text-uppercase team-designation">MARKETING</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-6">
                        <div className="team-box hover-effect">
                            <div className="team-wrapper">
                                <div className="team-member">
                                    <img alt="" src="images/team/img-4.jpg" className="img-fluid rounded" />
                                </div>
                            </div>
                            <h4 className="team-name">여진수</h4>
                            <p className="text-uppercase team-designation">DEVELOPER</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-6">
                        <div className="team-box hover-effect">
                            <div className="team-wrapper">
                                <div className="team-member">
                                    <img alt="" src="images/team/img-5.jpg" className="img-fluid rounded" />
                                </div>
                            </div>
                            <h4 className="team-name">윤태완</h4>
                            <p className="text-uppercase team-designation">DEVELOPER</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
  	);
  }
}
export default Team;