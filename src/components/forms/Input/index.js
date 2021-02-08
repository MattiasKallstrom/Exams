import React from 'react';
import './styles.css';

const Input = ({ DiverseHandler, label, ...otherProps }) => {
    return(
        <div className="Row">
            {label && (
                <label>
                    {label}
                </label>
            )}

            <input className="input" onChange={DiverseHandler} {...otherProps}/>
        </div>
    )
}

export default Input;