"use client"
import useCustomSelect from "@/hooks/useCustomSelect";
import React, { useEffect, useRef } from "react";
const SelectComponent = ({ options, type,placeholder, open, customClass, setValue }) => {
  const {
    isOpen,
    selectedOption,
    openDropdown,
    closeDropdown,
    toggleDropdown,
    selectOption,
  } = useCustomSelect(options, open);

  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      // Click is outside the dropdown, close the dropdown
      closeDropdown();
    }
  };

  useEffect(() => {
    if (isOpen) {
      // Add event listener when the component mounts
      document.addEventListener("click", handleClickOutside);
    }

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  const dropdownClassName = `nice-select ${customClass || ""} ${
    isOpen ? "open" : ""
  }`;

  return (
    <div
      className={dropdownClassName}
      tabIndex="0"
      onClick={toggleDropdown}
      ref={dropdownRef}
    >
      <span className="current">{selectedOption || placeholder}</span>
      <ul className="list">
        {options.map((option, index) => (
          <li
            key={index}
            className={`option${
              selectedOption === option[type] ? " selected focus" : ""
            }`}
            data-value={index}
            onClick={() => {
              setValue(option._id);
              selectOption(option[type]);
              openDropdown(); // Open the next dropdown
            }}
          >
            {option[type]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectComponent;
