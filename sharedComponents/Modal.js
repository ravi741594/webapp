import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { interviewShowState } from 'redux/reducer/interviewReducer';

export default function DataModal(props) {
    
  return (
    <>
      <Modal show={props.show} onHide={() => props.handleModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{props.modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.modalBody}</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => props.handleModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// const mapStateToProps = state => {
//   return{
//     showVal : state.show
//   }
// }