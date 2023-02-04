import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CloseButton from "react-bootstrap/CloseButton";
import { EpgItem } from "./components/EpgItem";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

export const EpgApp = () => {
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(true);
  }

  function handleHide() {
    setShow(false);
  }

  return (
    <>
      <Container>
        <br />
        <br />
        <Row className="justify-content-md-center">
          <Button variant="secondary" onClick={handleShow}>
            Mostrar EPG
          </Button>
        </Row>
      </Container>

      <Modal
        fullscreen={true}
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
      >
        <Modal.Header>
          <CloseButton variant="white" onClick={handleHide} />
        </Modal.Header>
        <Modal.Body>
          <EpgItem />
        </Modal.Body>
      </Modal>
    </>
  );
};
