import classes from './Input.module.css';
import React from 'react';
;



const Input = React.forwardRef((props, ref) => {
    return (
        <div className={classes.input}>
            <label htmlFor='amount'>{props.label}</label>
            <input  id= 'amount'
                    type= 'number'
                    min= '1'
                    max= '5'
                    step= '1'
                    defaultValue= '1'
                    ref={ref}/>

        </div>);
}
);
export default Input;