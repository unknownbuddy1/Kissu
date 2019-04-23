import React from 'react';
import PropTypes from 'prop-types';

import withUniqueId from '../hocs/withUniqueId';

function SwitchInput({ id, label, name, value, onChange }) {
    return (
        <div className="form-group">
            <div className="form-switch">
                <input
                    type="checkbox"
                    className="checkbox"
                    id={id}
                    name={name}
                    checked={value}
                    onChange={onChange}
                />

                <span className="form-icon" aria-hidden="true"></span>

                <label htmlFor={id}>
                    {label}

                    <div className="form-icon-target"></div>
                </label>
            </div>
        </div>
    );
}

SwitchInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.node,
    name: PropTypes.string,
    value: PropTypes.bool,
    onChange: PropTypes.func
};

SwitchInput.defaultProps = {
    label: 'Switch',
    name: 'switch'
};

export default withUniqueId(SwitchInput);