import React from 'react';
import cm from '../modules/CustomModal.module.scss'
import logIn from '../image/logInImage.jpeg'
import { IoMdClose } from "react-icons/io";
import Tabs from '../Tabs/Tabs';

const CustomModal = ({ isOpen, onClose, handleSetUser, handleLogInUser, users }) => {

	return (
		<>
			{
				isOpen && (
					<div className={cm.modal} >
						<div className={cm.modalWrapper}>
							<div className={cm.modalContent}>
								<button className={cm.modalCloseBtn} onClick={() => onClose()}><IoMdClose className={cm.close} /></button>
								<div className={cm.modalImage}>
									<img src={logIn} alt="" />
								</div>
								<div className={cm.modalFormCreateAccountWrapper}>
									<Tabs handleSetUser={handleSetUser} onClose={onClose} handleLogInUser={handleLogInUser} users={users} />
								</div>
							</div>
						</div>
					</div>
				)}
		</>

	)
}
export default CustomModal;

