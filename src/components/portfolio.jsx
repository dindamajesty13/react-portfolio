import React from "react";
import image2 from "../img/image2.jpg";
import './portfolio.css'

class Portfolio extends React.Component {
  render() {
    return (
            <div className="col-md-4">
              <div className="work-box">
                <a href={this.props.image} data-lightbox="gallery-mf">
                  <div className="work-img">
                    <img src={this.props.image} alt="" className="img-thumbnail" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">{this.props.title}</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            {this.props.desc}
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              
              </div>
            </div>
    );
  }
}

Portfolio.defaultProps = {
  title: "Title Here",
  desc: "Description Here",
  image: image2,
}

export default Portfolio;
