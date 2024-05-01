import React, { useState, useEffect } from 'react';
import cm from './modules/CustomModal.module.scss'
import CustomModal from './CustomModal/CustomModal';
import { useDispatch, useSelector } from 'react-redux'
import { createUsersOnServer, getUsers } from './redux/reducers/userSlice';
import { ENTRANCE } from './common/constants';


const Entrance = () => {

    //-----------------------------------
    const [isOpen, setOpen] = useState(false)
    const [userData, setUserData] = useState({})
    const [logInUser, setLogInUser] = useState({})

    const users = useSelector(({ users }) => users)

    const dispatch = useDispatch()

    const handleSetUser = (data) => {
        setUserData({
            name: data.firstName,
            surname: data.lastName,
            email: data.email,
            password: data.password,
            signUp: data.signUp,
            privacy: data.privacy,
        })
    }
    const handleLogInUser = (data) => {
        setLogInUser({
            email: data.email,
            password: data.password
        })
    }

    const comparisonsData = (userLogIn, users) => {
        for (let i = 0; i < users.length; i++) {
            const currentUser = users[i];
            if (currentUser.email === userLogIn.email && currentUser.password === userLogIn.password) {
                return true;
            }
        }
        return false;
    }

    const currentUser = comparisonsData(logInUser, users)


    useEffect(() => {
        dispatch(getUsers());
        if (Object.keys(userData).length > 0) {
            dispatch(createUsersOnServer(userData));
        };

    }, [dispatch]);


    //-----------------------------------

    console.log('users:', users);

    console.log('currentUser:', currentUser);



    return (
        <>
            <div className={cm.EntranceBox}>
                <button className={cm.buttonOpen} onClick={() => setOpen(true)}>{ENTRANCE}</button>
                <div className={cm.response}>{currentUser ? 'Welcome' : 'authentication error'}</div>
            </div>
            <CustomModal isOpen={isOpen}
                onClose={() => setOpen(false)}
                handleLogInUser={handleLogInUser}
                handleSetUser={handleSetUser}
                users={users}
            />

        </>
    )
}

export default Entrance