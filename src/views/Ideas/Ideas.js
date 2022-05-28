import React from "react";
import {
  Accordion,
  Badge,
  Button,
  Card,
  Container,
  useAccordionButton,
} from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import MainScreen from "../../components/MainScreen/MainScreen";
import notes from "../../utils/demo_data";
import "./Ideas.css";
const Ideas = () => {
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
    }
  };

  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log("totally custom!")
    );

    return (
      <button
        type="button"
        style={{ border: "0px", background: "none", width: "100%", textAlign: "left" }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }

  return (
    <>
      <MainScreen title="Welcome Back Arya" />
      <Container>
        <Link to="/create">
          <Button variant="primary" className="create-btn">
            Create Note
          </Button>
        </Link>
        <Container
          className="d-flex justify-content-center"
          style={{ padding: "20px 0px 80px 0px", width: "80%" }}
        >
          <Container>
            {notes &&
              notes.map((note) => (
                <Accordion defaultActiveKey="1" key={note._id}>
                  <Card key={note._id} style={{ margin: 10 }}>
                    <Card.Header style={{ display: "flex" }}>
                      <span
                        style={{
                          color: "black",
                          textDecoration: "none",
                          flex: 1,
                          cursor: "pointer",
                          alignSelf: "center",
                          fontSize: 18,
                        }}
                      >
                        <CustomToggle eventKey="0">{note.title}</CustomToggle>
                      </span>
                      <div>
                        <Button href={`note/${note._id}`}>Edit</Button>
                        <Button
                          variant="danger"
                          className="mx-2"
                          onClick={() => deleteHandler(note._id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <h4>
                          <Badge variant="success">
                            Category - {note.category}
                          </Badge>
                        </h4>
                        <blockquote className="blockquote mb-0">
                          <ReactMarkdown>{note.content}</ReactMarkdown>
                          <footer className="blockquote-footer">
                            Created on{" "}
                            <cite title="Source Title">12 Nov '22</cite>
                          </footer>
                        </blockquote>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              ))}
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default Ideas;
