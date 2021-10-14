import React, { PureComponent } from 'react';

interface InputProps {
    name: string,
    label: string,
    value: string,
    onChange: any,
    error: string,
    type: string
}
 
interface InputState {
    
}
 
class Input extends React.Component<InputProps, InputState> {
    render() { 
        const {name, label, error, ...rest} = this.props;
        return (  
            <div className="mb-3">
                <label htmlFor={name} className="form-label">{label}</label>
                <input
                    // value={value}
                    // onChange={onChange}
                    // type={type}
                    {...rest}
                    name={name}
                    id={name}
                    className="form-control"
                />
                {error && <p className="alert text-danger" style={{padding: '0px 10px',fontSize:'12px'}}>{error}</p>}
            </div>
        );
    }
}
 
export default Input;