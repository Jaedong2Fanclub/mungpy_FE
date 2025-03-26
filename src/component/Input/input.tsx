import React, { CSSProperties, forwardRef } from "react";
import "./inputStyle.scss";

interface InputProps {
    showTitle?: boolean;
    title?: string;
    type: string;
    placeholder: string;
    style?: CSSProperties;
    value?: any;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur ?: (event: React.FocusEvent<HTMLInputElement>) => void;
    ref ?: React.Ref<HTMLInputElement>;
    name ?: string;
    className?: string;
}

const Input = forwardRef<HTMLInputElement,InputProps> (
    ({ title = '', type, placeholder, style, value, onChange, onBlur, name, className }, ref) => {
        return (
            <div className="input-container" style={style}>
                {title && (
                    <h2>
                        {title}
                        <span className="required">*</span>
                    </h2>
                )}
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    ref={ref}
                    name={name}
                    className={className}
                />
            </div>
        );
    }
);

export default Input; 