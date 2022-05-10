import React from 'react';
import './Signin.scss';
import SignInForm from '../../organisms/SignInForm/SignInForm';
import WrapperText from '../../molecules/WrapperText/WrapperText';

export default function Signin() {
    const inputLabel = [
        {
            type: "email",
            placeholder: "Email",
            inputId: "email"
        },
        {
            type: "password",
            placeholder: "Password",
            inputId: "password"
        }
    ];

    return (
        <main className="login-container">
            <WrapperText className={"login-container__article"} title={"Login"} description={"Get Access to your Orders, Wishlist and Recommendations"} />
            <SignInForm inputLabel={inputLabel} button={"Login"} className={"login-container__form"} />
        </main>
    )
}
