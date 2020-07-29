import React, { useState, Fragment } from "react"
import { Modal, ModalHeader, ModalBody } from "reactstrap"
import MultiStep from "./MultiStepForm/MultiStep"
import { HomeButton } from "../Core/Button"

const ModalMultiStep = (props) => {
  const { buttonLabel, className } = props

  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  return (
    <Fragment>
      <HomeButton color="danger" onClick={toggle}>
        {buttonLabel}
      </HomeButton>
      <Modal isOpen={modal} toggle={toggle} className={className} size="lg">
        <ModalHeader toggle={toggle}>สั่งซื้อและชำระเงิน</ModalHeader>
        <ModalBody className="d-flex justify-content-center">
          <MultiStep />
        </ModalBody>
      </Modal>
    </Fragment>
  )
}

export default ModalMultiStep
