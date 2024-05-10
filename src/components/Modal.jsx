import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyModal({children}) {
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(true);
  }

  return (
    <>
      <Button variant='secondary' onClick={() => handleShow()}>
        Players
      </Button>

      <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Players</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor:'hsla(0, 0%, 0%, 0.1)'}}>
            {children}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MyModal;