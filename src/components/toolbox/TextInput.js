import React from "react";

const TextInput = ({ name, label, onChange, placeHolder, value, error }) => {
    let wrappperClass = "form-group"
    if (error && error.length > 0) {
        wrappperClass += " has-error"
    }

    return (
        <div className={wrappperClass}>
            <label htmlFor={name}>{label}</label>
            <div className="field">
                <input type="text"
                    name={name}
                    className="form-control"
                    placeholder={placeHolder}
                    value={value}
                    onChange={onChange}>

                </input>
                {error&&<div className ="alert alert-danger"></div>}
            </div>
        </div>
    )
}

export default TextInput