import { Component } from "react";
import React from "react";
import Portfolio from "../components/portfolio";

class PortfolioContainer extends Component {
    render(){
        return(
            <section id="work" className="portfolio-mf sect-pt4 route">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                        <div className="title-box text-center">
                            <h3 className="title-a">Portfolio</h3>
                            <p className="subtitle-a">
                            I have completed several projects. If you are interested, let's learn about my project
                            </p>
                            <div className="line-mf"></div>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <Portfolio title="Siap OPA JABAR" desc="Mobile Apps Using Android Studio" image="https://asset.kompas.com/crops/oQ0ROEsG1N5P7cDWZVDF8gT70FU=/0x0:1200x800/750x500/data/photo/2021/05/19/60a4651376176.jpg"/>
                        <Portfolio title="Iteung" desc="WhatsApp Bot" image="https://www.binaryfolks.com/media/30th%20dec%20blog%20header.png"/>
                        <Portfolio title="Ateng" desc="Mobile Apps Using React Native" image="https://cdn.techinasia.com/wp-content/uploads/2020/05/Deskera-app-2psd-750x500.jpg"/>
                        <Portfolio title="TTS Bot" desc="Mobile Apps Using Kotlin" image="https://cdn.techinasia.com/wp-content/uploads/2018/09/75861737_m-750x500.jpg"/>
                        <Portfolio/>
                        <Portfolio/>
                    </div>
                </div>
            </section>
        )
    }
}

export default PortfolioContainer;