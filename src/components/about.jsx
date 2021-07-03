import React from "react";
import myImage from "../img/myImage.png";
import './about.css'

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "HTML5", porcentage: "80%", value: "80" },
        { id: "CSS3_skill", content: "CSS3", porcentage: "75%", value: "75" },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "90%",
          value: "90"
        },
        { id: "PHP_skill", content: "PHP", porcentage: "70%", value: "70" },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "Python_skill",
          content: "Python",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "Java_skill",
          content: "Java",
          porcentage: "95%",
          value: "95"
        },
        {
          id: "Kotlin_skill",
          content: "Kotlin",
          porcentage: "80%",
          value: "80"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content: "First Paragraph about me, my name is dinda majesty, i was born on may 13, 2020 in Lubuk Sikaping, I'm 21 years old now"
        },
        {
          id: "second-p-about",
          content: "Second Paragraph about me, I'm studying informatics engineering in Politeknik Pos Indonesia"
        },
        {
          id: "third-p-about",
          content: "Third Paragraph about me, I'm from Indonesia, I'v been living in bandung since 2018"
        },
        ,
        {
          id: "fourth-p-about",
          content: "Fourth Paragraph about me, I am a person who likes research and analysis of the latest and most popular technology on informatics engineering. I always improve my skills and I am an Open Minded person so I am able to receive ideas and various information. I can develop software individually and work with a team. I have a very impressive work experience."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
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

export default About;
