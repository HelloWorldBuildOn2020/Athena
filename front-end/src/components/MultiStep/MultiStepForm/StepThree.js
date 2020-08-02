import React from "react";
import { P2, Header } from "../../Core/Text";
import color from "../../../Config/Color";
import { CircularProgress } from "@material-ui/core";

const StepThree = (props) => {
  return (
    <div className="row d-flex justify-content-center">
      <div className="col-6">
        <br />
        {props.loading ?
          <div className="row d-flex justify-content-center">
            <Header className="text-center">
              กำลังตรวจสอบ
              <br/>
              <br/>
              <CircularProgress />
            </Header>
          </div> :
          <>
            <Header color={color.primary} className="text-center">
              ยืนยันการตรวจสอบเรียบร้อย
            </Header>
            <div className="text-center">
              <Header
                className="fa fa-check-circle-o fa-4x"
                color={color.primary}
              ></Header>
            </div>
            <P2 color={color.primary} className="text-center">
              คุณสามารถเข้าเรียนได้ทันที
            </P2>
          </>
        }
        <br />
      </div>
    </div>
  );
};

export default StepThree;
