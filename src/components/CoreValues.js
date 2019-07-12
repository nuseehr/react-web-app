import React from 'react';

class CoreValues extends React.Component {
  render() {
  	return (
        <section className="section pt-5" id="services">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h1 className="section-title text-center">Core Value</h1>
                        <div className="section-title-border margin-t-20"></div>
                        <p className="section-subtitle text-muted text-center padding-t-30 font-secondary">CONCAT 4 WAYS</p>
                    </div>
                </div>
                <div className="row margin-t-30">
                    <div className="col-lg-3 col-sm-6 col-6 margin-t-20">
                        <div className="services-box hover-effect">
                            <img src="images/value/img-1.png" className="img-fluid" alt="" />
                            <h4 className="padding-t-15">Growth</h4>
                            <p className="text-darked value-subtitle">콘캣은 구성원 개개인의 성장을 <br/> 무엇보다 중요하게 생각합니다.</p>
                            <p className="text-darked value-desc">배움에 대한 투자를 아끼지 않음으로써 환경에 <br/> 적응해 나갈 수 있는 핵심역량을 개발하여 <br/> 창의적인 문제해결의 밑거름이 되도록 합니다. </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-6 margin-t-20">
                        <div className="services-box hover-effect">
                            <img src="images/value/img-2.png" className="img-fluid" alt="" />
                            <h4 className="padding-t-15">Data-driven</h4>
                            <p className="text-darked value-subtitle">콘캣은 데이터를 기반으로 하는 <br/> 혁신적인 조직입니다.</p>
                            <p className="text-darked value-desc">데이터 속에서 새로운 가치를 이끌어내고, 이러한 <br/> 가치를 사용자들의 일상 속에서 녹여내여 생활수준을 <br/> 한 단계 끌어올리는 서비스를 구현하고 있습니다. </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-6 margin-t-20">
                        <div className="services-box hover-effect">
                            <img src="images/value/img-3.png" className="img-fluid" alt="" />
                            <h4 className="padding-t-15">One-team</h4>
                            <p className="text-darked value-subtitle">콘캣은 구성원의 다양한<br/> 무의견을 존중합니다. </p>
                            <p className="text-darked value-desc">새로운 서비스를 개발하는 업무는 협업을 필요로 <br/> 합니다. 팀원들의 다양한 생각과 의견을 적극 검토하여 <br/> 좋은 아이디어로 함께 의논하고 발전시키고 있습니다. </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-6 margin-t-20">
                        <div className="services-box hover-effect">
                            <img src="images/value/img-4.png" className="img-fluid" alt="" />
                            <h4 className="padding-t-15">Integrity</h4>
                            <p className="text-darked value-subtitle">콘캣은 조직과 사회에 대한 <br/> 책임감을 중요시하는 조직입니다.</p>
                            <p className="text-darked value-desc">사용자 데이터를 처리하는 과정에서 현재 및 잠재적 <br/> 사용자들의 권리와 이익을 침해하지 않으며, 최첨단  <br/> 보안 솔루션을 통해 사용자 중심 서비스를 구현하고 <br/> 있습니다. </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  	);
  }
}
export default CoreValues;