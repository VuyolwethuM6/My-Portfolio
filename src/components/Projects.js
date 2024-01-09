import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import { ProjectCard } from "./ProjectCard";
import 'animate.css';
/**
 * Websites, Apps & Games
 */
import creative from "../assets/img/Creative.PNG"
import gadget from "../assets/img/Gadget.PNG";
import colorSharp2 from "../assets/img/color-sharp2.png";
import chatapp from "../assets/img/ChatApp.PNG";
import tictac from "../assets/img/TicTacToe.PNG";
import bank from "../assets/img/BankApp.PNG";
import metric from "../assets/img/metric.PNG";
/**
 * Certificates
 */
import gitc from "../assets/img/git-c.png";
import javas from "../assets/img/cert5.png";
import javac from "../assets/img/java.png";
import htmlc from "../assets/img/html-css.png"
import innovator from "../assets/img/port3.png";
import iot from "../assets/img/cert3.png";
import intro from "../assets/img/cert4.png";
import ai from "../assets/img/cert2.png";
import cloud from "../assets/img/cloud-intro.png";

export const Projects = () => {

  const projects = [
    {
      title: <a href="#" >Creative Tutors </a>,
      description: "Website about tutors and services they provide.",
      imgUrl: creative,
    },
    {
      title: "Inverter Business",
      description: "Gadget borrow website",
      imgUrl: gadget,
    },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg3,
    // }
  ];

  const apps = [
    {
      title: "Chat App",
      description: "Website about tutors and services they provide.",
      imgUrl: chatapp,
    },
    {
      title: "Tic Tac Toe - Game",
      description: "Gadget borrow website",
      imgUrl: tictac,
    },
    {
      title: "CodeX Banking App",
      description: "Design & Development",
      imgUrl: bank,
    },
    {
      title: "Metric Converter App",
      description: "Convert Metrics",
      imgUrl: metric
    }
  ];

  const cert = [
    {
      title: "Git",
      description: "",
      imgUrl: gitc,
    },
    {
      title: "Java",
      description: "",
      imgUrl: javac,
    },
    {
      title: "JavaScript",
      description: "",
      imgUrl: javas,
    }
    ,
    {
      title: "HTML-CSS",
      description: "",
      imgUrl: htmlc,
    },
    {
      title: "Innovator",
      description: "",
      imgUrl: innovator,
    },
    {
      title: "IOT",
      description: "",
      imgUrl: iot,
    },
    {
      title: "Coding Intro",
      description: "",
      imgUrl: intro,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Welcome to the heart of my digital journey – a collection of projects that embody my passion for coding and innovation. Each project is a testament to my commitment to delivering solutions that not only meet but exceed expectations.<br/> Here's a sneak peek into my project portfolio:</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Websites</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Web Apps & Games</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Certificates</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                          {
                            apps.map((apps, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...apps}
                                  />
                              )
                            })
                          }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                          {
                            cert.map((cert, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...cert}
                                  />
                              )
                            })
                          }
                        </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
