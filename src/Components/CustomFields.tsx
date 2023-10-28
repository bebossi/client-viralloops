import { useContext, useEffect, useState } from "react";
import { FormWidgetContext } from "../Providers/FormWidgetProvider";
import DropdownOptionsInput from "./DropdownOption";

export interface CustomFieldProps {
  fieldKey: string;
}
const CustomFields = ({ fieldKey }: CustomFieldProps) => {
  const formWidgetContext = useContext(FormWidgetContext);

  if (!formWidgetContext) {
    return null;
  }

  const { formWidget, setFormWidget } = formWidgetContext;
  const fieldSettings = formWidget.fields[fieldKey];
  const [label, setLabel] = useState(fieldSettings.label);
  const [showInput, setShowInput] = useState(fieldSettings.showInput);
  const [dropdownOptions, setDropdownOptions] = useState(
    fieldSettings.dropdownOptions
  );

  useEffect(() => {
    setFormWidget((prevFormWidget) => ({
      ...prevFormWidget,
      fields: {
        ...prevFormWidget.fields,
        [fieldKey]: {
          label,
          showInput,
          dropdownOptions
        },
      },
    }));
  }, [label,dropdownOptions, showInput, fieldKey]);
  return (
    <>
      {fieldKey === "Checkbox" && (
        <div>
          <input
            type="checkbox"
            id="showInput"
            checked={showInput}
            onChange={() => {
              setShowInput(!showInput);
            }}
          />
          <input type="checkbox" />
          <input onChange={(e) => setLabel(e.target.value)} value={label} />
        </div>
      )}
      {fieldKey === "RadioButton" && (
        <div className="flex">
          <input
            type="checkbox"
            id="showInput"
            checked={showInput}
            onChange={() => {
              setShowInput(!showInput);
            }}
          />
          <input type="radio" />
          <input onChange={(e) => setLabel(e.target.value)} value={label} />
        </div>
      )}
      {fieldKey === "Dropdown" && (
        <>
          <DropdownOptionsInput
            dropdownOptions={dropdownOptions!}
            onOptionChange={(newOptions) => setDropdownOptions(newOptions)}
          />
          <div>
            <input
              type="checkbox"
              checked={showInput}
              onChange={() => {
                setShowInput(!showInput);
              }}
            />
            <select>
              {dropdownOptions!
                .filter((option) => option.show)
                .map((option, index) => (
                  <option key={index} value={option.label}>
                    {option.label}
                  </option>
                ))}
            </select>
          </div>
        </>
      )}
    </>
  );
};

export default CustomFields;
