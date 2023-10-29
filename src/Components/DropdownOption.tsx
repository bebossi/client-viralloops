import { ChangeEvent } from "react";
import { BiPlus } from "react-icons/bi";

interface DropdownOption {
  label: string;
  show: boolean;
}

interface DropdownOptionsInputProps {
  dropdownOptions: DropdownOption[];
  onOptionChange: (options: DropdownOption[]) => void;
  onAddOption?: (options: DropdownOption[]) => void;
}

const DropdownOptionsInput: React.FC<DropdownOptionsInputProps> = ({
  dropdownOptions,
  onOptionChange,
  onAddOption,
}) => {
  const handleOptionChange = (
    index: number,
    value: Partial<DropdownOption>
  ) => {
    const updatedOptions = [...dropdownOptions];
    updatedOptions[index] = { ...updatedOptions[index], ...value };
    onOptionChange(updatedOptions);
  };

  const addDropdownOption = (index: number, value: Partial<DropdownOption>) => {
    const updatedOptions = [...dropdownOptions];
    updatedOptions[index] = { ...updatedOptions[index], ...value };

    dropdownOptions.find((option) => {
      if (option.show === false) return (option.show = true);
    });
    onAddOption!(updatedOptions);
  };

  return (
    <div className="flex flex-col justify-center items-start">
      <h2 className="text-gray-600 mb-2">Dropdown options</h2>
      {dropdownOptions
        ?.filter((option) => option.show)
        .map((option, index) => (
          <div className="ml-1 flex gap-x-2 pb-2" key={index}>
            <input
              type="checkbox"
              checked={option.show}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleOptionChange(index, { show: e.target.checked })
              }
            />
            <label>{index + 1}</label>
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
      <BiPlus size={20} onClick={addDropdownOption} />
    </div>
  );
};

export default DropdownOptionsInput;
