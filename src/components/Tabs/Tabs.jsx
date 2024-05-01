import React, { useState } from 'react';
import tab from '../modules/Tabs.module.scss'
import { CREATE_ACCOUNT_BTN, LOG_IN_CONSTANTA, TABS_1, TABS_2 } from '../common/constants';
import CreateAccount from '../forms/CreateAccount';
import CreateLogIn from '../forms/CreateLogIn';

const Tabs = ({ handleSetUser, onClose, handleLogInUser, users }) => {
	const [activeTab, setActiveTab] = useState(TABS_1);

	const handleTabClick = (tab) => {
		setActiveTab(tab);
	};

	return (
		<div className={tab.tabsContainer}>
			<div className={tab.tabButtons}>
				<button onClick={() => handleTabClick(TABS_1)} className={`${tab.tabBtn} ${activeTab === TABS_1 ? tab.active : ''}`}>
					{LOG_IN_CONSTANTA}
				</button>
				<button onClick={() => handleTabClick(TABS_2)} className={`${tab.tabBtn} ${activeTab === TABS_2 ? tab.active : ''}`}>
					{CREATE_ACCOUNT_BTN}
				</button>
			</div>
			<div className={tab.tabContent}>
				{activeTab === TABS_1 && <CreateLogIn handleLogInUser={handleLogInUser} onClose={onClose} users={users} />}
				{activeTab === TABS_2 && <CreateAccount handleSetUser={handleSetUser} onClose={onClose} />}

			</div>
		</div>
	);
};

export default Tabs;