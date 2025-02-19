import React, { useState } from 'react';
import {
    DropdownContainer,
    DropdownButton,
    DropdownContent,
    DropdownItem
} from './style'; // Adjust the import according to your file structure

interface DropdownProps {
    options: { [key: string]: string }[];
    onSelect: (key: string, value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
    const [selected, setSelected] = useState<string>('선택해주세요');

    const handleSelect = (key: string, value: string) => {
        setSelected(value);
        onSelect(key, value);
    };

    return (
        <DropdownContainer>
            <DropdownButton>{selected}</DropdownButton>
            <DropdownContent>
                {options.map((option, index) => {
                    const [key, value] = Object.entries(option)[0];
                    return (
                        <DropdownItem key={index} onClick={() => handleSelect(key, value)}>
                            {value}
                        </DropdownItem>
                    );
                })}
            </DropdownContent>
        </DropdownContainer>
    );
};

export default Dropdown;
