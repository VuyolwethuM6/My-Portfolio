import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const Experience = () => {
  return (
    <section className="experience-section bg-black text-light py-5">
      <Container>
        <h2 className="text-center mb-4 font-weight-bold fs-1">Experience</h2>
        <Row>
          <Col lg={4} md={6} className="mb-4">
            <div className="experience-card p-4 bg-secondary text-center rounded">
              <h4>Title 1</h4>
              <p>Details about experience 1</p>
            </div>
          </Col>
          <Col lg={4} md={6} className="mb-4">
            <div className="experience-card p-4 bg-secondary text-center rounded">
              <h4>Title 2</h4>
              <p>Details about experience 2</p>
            </div>
          </Col>
          <Col lg={4} md={6} className="mb-4">
            <div className="experience-card p-4 bg-secondary text-center rounded">
              <h4>Title 3</h4>
              <p>Details about experience 3</p>
            </div>
          </Col>
          {/* Add more Col components for additional experiences */}
        </Row>
      </Container>
    </section>
  );
};

// export default Experience;
