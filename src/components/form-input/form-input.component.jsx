import React from 'react'
import './form-input.styles.scss'

const FormInput = ({ handleChange, label, id, ...otherProps}) => (
    <div className="form-group">
        <input id={id} className="form-input" onChange={handleChange} {...otherProps} />
        {
            label ? (
                <label htmlFor={id} className={`${otherProps.value ? otherProps.value.length ? 'shrink' : '' : ''} form-input-label`}>{label}</label>
            )
            : null
        }
    </div>
)

export default FormInput;
