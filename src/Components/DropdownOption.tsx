import { ChangeEvent } from "react";

interface DropdownOption {
  label: string;
  show: boolean;
}

interface DropdownOptionsInputProps {
  dropdownOptions: DropdownOption[];
  onOptionChange: (options: DropdownOption[]) => void;
}

const DropdownOptionsInput: React.FC<DropdownOptionsInputProps> = ({
  dropdownOptions,
  onOptionChange,
}) => {
  const handleOptionChange = (
    index: number,
    value: Partial<DropdownOption>
  ) => {
    const updatedOptions = [...dropdownOptions];
    updatedOptions[index] = { ...updatedOptions[index], ...value };
    onOptionChange(updatedOptions);
  };

  return (
    <div>
      {dropdownOptions?.map((option, index) => (
        <div className="m-2" key={index}>
          <input
            type="checkbox"
            checked={option.show}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleOptionChange(index, { show: e.target.checked })
            }
          />
          <label>{index}</label>
          <input
            className="border border-black"
            type="text"
            placeholder={`Option ${index + 1}`}
            value={option.label}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleOptionChange(index, { label: e.target.value })
            }
          />
        </div>
      ))}
    </div>
  );
};

export default DropdownOptionsInput;
