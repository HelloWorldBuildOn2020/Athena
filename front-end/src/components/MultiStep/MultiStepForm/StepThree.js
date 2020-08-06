import React, { useState, useEffect } from "react";
import { P2, Header } from "../../Core/Text";
import color from "../../../Config/Color";
import { CircularProgress } from "@material-ui/core";

const StepThree = (props) => {
  const { statusCode, loading } = props
  const [headerMessage, setHeaderMessage] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    checkStatus()
  }, [statusCode])

  const checkStatus = () => {
    if(statusCode == 200) {
      setHeaderMessage("ยืนยันการตรวจสอบเรียบร้อย");
      setMessage("คุณสามารถเข้าเรียนได้ทันที");
    } else if(statusCode == 400) {
      setHeaderMessage("ไม่สามาตรวจสอบข้อมูลได้")
      setMessage("กรุณารอเจ้าหน้าที่ตรวจสอบอีกครั้งภายใน 48 ชั่วโมง")
    } else {
      setHeaderMessage("เกิดข้อผิดพลาด");
      setMessage("กรุณากรอกใหม่อีกครั้ง");
    }
  }

  return (
    <div className="row d-flex justify-content-center">
      <div className="col-6">
        <br />
        {loading ?
          <div className="row d-flex justify-content-center">
            <Header className="text-center">
              กำลังตรวจสอบ ...
              <br/>
              <br/>
              <CircularProgress />
            </Header>
          </div> :
          <>
            <Header color={color.primary} className="text-center">
              {headerMessage}
            </Header>
            <div className="text-center">
              <Header
                className="fa fa-check-circle-o fa-4x"
                color={color.primary}
              ></Header>
            </div>
            <P2 color={color.primary} className="text-center">
              {message}
            </P2>
          </>
        }
        <br />
      </div>
    </div>
  );
};

export default StepThree;
