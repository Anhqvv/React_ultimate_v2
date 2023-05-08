import React from 'react'
import { Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'

function ModalResult (props) {
  const { show, setShow, data } = props
  const handleCloseModal = () => {
    setShow(false)
  }
  let countCorrect = data.countCorrect
  let countTotal = data.countTotal
  let dataQuiz = data.dataQuiz
  return (
    <>
      <Modal
        centered
        size='xl'
        show={show}
        onHide={handleCloseModal}
        backdrop='static'
        keyboard={false}
        className='modal-add-user'
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal Result</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            Count Correct: <b>{countCorrect}</b>
          </div>
          <div>
            Total question: <b>{countTotal}</b>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary'>Show answers</Button>
          <Button variant='primary' onClick={() => handleCloseModal()}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalResult
