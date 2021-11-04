import React from "react";
import "./Dropdown.module.css";

type DropdownProps = {
  value: string | undefined;
  title: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  options: IDropdownOption[];
};

const Dropdown = (props: DropdownProps) => {
  const handleChange = (newValue: string | null) => {
    if (newValue != null) {
      props.setValue(newValue);
    }
  };

  return (
    <div className="container">
      <div className="title">{props.title}</div>
      <select
        className="input"
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
      >
        <option value={undefined}>{props.placeholder}</option>
        {props.options.map((item, idx) => (
          <option key={idx} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
