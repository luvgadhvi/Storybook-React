import React from 'react';
import './Button.css';
// import PropTypes from 'prop-types';


function Button(props) {
    const { variant = 'primary', children, ...rest } = props;
    return (
        <button className={`button ${variant}`} {...rest} >
            {children}
        </button>
    );
}
// Button.propTypes = {

// };

export default Button;