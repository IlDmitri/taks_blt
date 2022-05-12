import React, { useState } from 'react';

interface DropdownProps {
    selected: any,
    setSelected: any,
    options: Array<string>,
    className?: any
}

const Dropdown: React.FC<DropdownProps> = ({
    selected,
    setSelected,
    options,
    className
}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`dropdown form-control ${className}`}>
            <div
                className="dropdown__select"
                onClick={() => setIsOpen(!isOpen)}
            >
                {selected}
            </div>
            {isOpen && (
                <div className="dropdown__options">
                    {options.map(item => (
                        <div
                            key={item}
                            className={`dropdown__item ${(selected === item) ? 'dropdown__item--active' : ''}`}
                            onClick={() => {
                                setSelected(item);
                                setIsOpen(false);
                            }}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;