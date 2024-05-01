import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ERROR_TEXT, LOG_IN_CONSTANTA } from '../common/constants'
import forms from '../modules/forms.module.scss'
import { MdError } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";

const CreateLogIn = ({ onClose, handleLogInUser, users }) => {
    //-----------------------------------

    const [vissible, setVissible] = useState(false);


    const {
        register,
        handleSubmit,
        formState: {
            errors,
            isValid
        }
    } = useForm({ mode: 'onBlur' })

    const handleLogInComponent = (data) => {
        handleLogInUser(data)
        onClose(false)
    }



    const handleVissiblePassword = () => {
        setVissible(!vissible);
    }
    //-----------------------------------

    return (
        <div className={forms.logInWrapper}>
            <form className={forms.logIn} onSubmit={handleSubmit(handleLogInComponent)}>
                <div className={forms.email}>
                    <input {...register('email', {
                        required: true,
                    })} placeholder='email' className={forms.emailInput} />
                    <div className={forms.error}>{errors?.email ? <p className={forms.errorText}> <MdError /> {ERROR_TEXT}</p> : ''}</div>
                </div>
                <div className={forms.password}>
                    <div className={forms.passwordOpenClose}>
                        <input type={vissible ? 'text' : 'password'} {...register('password', {
                            required: true,
                        })} placeholder='password' className={forms.emailInput} />
                        <span onClick={handleVissiblePassword} className={forms.eyeBtn} > {
                            vissible
                                ?
                                <IoEyeOutline className={forms.eye} />
                                :
                                <IoEyeOffOutline className={forms.eye} />
                        }</span>
                    </div>
                    <div className={forms.error}>{errors?.password ? <p className={forms.errorText}> <MdError />  {ERROR_TEXT}</p> : ''}</div>
                </div>
                <button type='submit' className={forms.createAccountBtn} disabled={!isValid} >{LOG_IN_CONSTANTA}</button>

                <div className={forms.standardList}>
                    <h3 className={forms.standardTitle}>standard</h3>
                    <li className={forms.standardItems}> standard email:{users[0].email}</li>
                    <li className={forms.standardItems}> standard password:{users[0].password} </li>
                </div>
            </form>

        </div>

    )
}

export default CreateLogIn;