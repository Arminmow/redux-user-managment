import React from 'react';

function MyInput({isValid, errMsg, text, name, value, type, onChange}) {
    return (
        <>
            <label htmlFor={name} className="registerLabel">{isValid && (
                <span className="reqStar">*</span>)} {text}</label>
            <input id={name}
                   className={isValid ? "registerInput inputErr" : "registerInput"}
                   placeholder={text} type={type} name={name} value={value}
                   onChange={onChange}/>
            {isValid && (
                <span className="errorMessage">{errMsg}</span>
            )}
        </>
    );
}

export default MyInput;
