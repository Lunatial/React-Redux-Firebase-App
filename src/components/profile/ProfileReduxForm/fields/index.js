import React from 'react';

export const customInput = props => {
    // console.log(props.meta);
    const {label, input, type, meta} = props;
    return (
        <div>
            <label>{label}</label>
            <input {...props.input} type={type}/>
            {(meta.error &&
                meta.touched) &&
            !meta.active && (
                <div style={{color: 'red'}}>
                    {meta.error}
                </div>
            )}
        </div>
    )
};

export const customSelect = props => {
    return (
        <div>
            <label>{props.label}</label>
            <select {...props.input}>
                <option value="month">Egy hónap</option>
                <option value="year">Egy év</option>
                <option value="day">Egy nap</option>
            </select>
        </div>
    )
};
