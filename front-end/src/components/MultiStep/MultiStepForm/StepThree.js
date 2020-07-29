import React, { Fragment } from "react";
import { Progress } from "reactstrap";
import { P2, Header } from "../../Core/Text";
import color from "../../../Config/Color";
import ModalStatusSuccess from "../../MultiStep/ModalStatus/ModalStatusSuccess";
import ModalStatusFail from "../../MultiStep/ModalStatus/ModalStatusFail";

const StepThree = (props) => {
  return (
    <Fragment>
      <br />
      <Header className="text-center">กำลังตรวจสอบ</Header>
      <Progress value="60">60%</Progress>
      <P2 className="text-center" color={color.description}>
        ระบบกำลังทำการตรวจสอบข้อมูลสลิปการโอนเงิน กรุณารอสักครู่...
      </P2>
      <br />
      <ModalStatusSuccess
        icon="fa fa-check-circle-o fa-4x"
        buttonLabel="Test Modal Status Success"
      />
      <ModalStatusFail
        icon="fa fa-times-circle-o fa-4x"
        buttonLabel="Test Modal Status Fail"
      />
      <br />
    </Fragment>
  );
};

export default StepThree;
