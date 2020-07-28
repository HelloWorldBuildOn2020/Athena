import React, { Fragment, useState} from 'react'
import { FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap'
import { P2, Header } from '../../Core/Text'
import color from '../../../Config/Color'
import KBank from '../../../KBank.png'

const messageEmptyMoney = 'กรุณากรอกจำนวนเงิน'
const messageEmptyDate = 'กรุณากรอกวันที่โอน'
const messageEmptyTime = 'กรุณากรอกเวลาที่โอน'

const StepTwo = (props) => {
	const [invalidMoney, setInvalidMoney] = useState(false)
	const [invalidDate, setInvalidDate] = useState(false)
	const [invalidTime, setInvalidTime] = useState(false)
	const [messageErrorMoney, setMessageErrorMoney] = useState(false)
	const [messageErrorDate, setMessageErrorDate] = useState(false)
	const [messageErrorTime, setMessageErrorTime] = useState(false)

	const handleValidationMoney = (value) => {
		if(value === '') {
			setInvalidMoney(true)
			setMessageErrorMoney(messageEmptyMoney)
    } else {
      setInvalidMoney(false)
    }
	}
	
	const handleValidationDate = (value) => {
		if(value === '') {
			setInvalidDate(true)
			setMessageErrorDate(messageEmptyDate)
    } else {
			setInvalidDate(false)
    }
	}

	const handleValidationTime = (value) => {
		if(value === '') {
			setInvalidTime(true)
			setMessageErrorTime(messageEmptyTime)
    } else {
			setInvalidTime(false)
    }
	}
	
	return(
		<Fragment>
			<br/>
			<Header className='text-center'> ชำระเงิน โอนผ่าน ATM </Header>
			<Header className='text-success text-center'> ยอดที่ต้องชำระ 1,000 บาท </Header>
			<Header> แจ้งโอน </Header>
			<P2 color={color.black}>เมื่อโอนเงินแล้ว โปรดแจ้งชำระเงินโดยกรอกฟอร์มด้านล่าง</P2>
			<Header> เลือกบัญชี </Header>
			<img src={KBank} alt='OpenDurian Payment' style={{maxWidth: '350px', width: '100%'}}></img>
			<FormGroup>
				<br/>
				<Label>จำนวนเงิน</Label>
				<Input 
					placeholder='จำนวนเงิน' 
					onChange={(e)=> handleValidationMoney(e.target.value)}
					invalid={invalidMoney}
				/>
				<FormFeedback>{messageErrorMoney}</FormFeedback>
				<P2 color={color.description}>ตามที่โอนจริง เช่น 1,000.13</P2>
			</FormGroup>
			<FormGroup>
				<Label>วันที่โอน</Label>
				<Input 
					type='date'
					placeholder='เช่น 19/07/2020'
					onChange={(e)=> handleValidationDate(e.target.value)}
					invalid={invalidDate}
				/>
				<FormFeedback>{messageErrorDate}</FormFeedback>
				<P2 color={color.description}>เช่น 21/10/2018 (กรอกวันที่ตามสลิป ATM หรือใบฝาก ถ้ามี)</P2>
			</FormGroup>
			<FormGroup>
				<Label>เวลาที่โอน</Label>
				<Input
					type='time'
					placeholder='เช่น 22:58'
					onChange={(e)=> handleValidationTime(e.target.value)}
					invalid={invalidTime}
				/>
				<FormFeedback>{messageErrorTime}</FormFeedback>
				<P2 color={color.description}>เช่น 15:45 (กรอกเวลาตามสลิป ATM หรือใบฝาก ถ้ามี)</P2>
			</FormGroup>
			<FormGroup>
				<Label>สลิปหลักฐานการโอน</Label>
				<br/>
				<Input type='file'/>
				<FormText color='muted'>
					ไฟล์ขนาดไม่เกิน 2MB นามสกุล .jpg .png .gif
				</FormText>
			</FormGroup>
			<br/>
		</Fragment>
	)
}

export default StepTwo

