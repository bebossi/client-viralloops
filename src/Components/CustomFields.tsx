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
  const [isRequired, setIsRequired] = useState(fieldSettings.isRequired);
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
          dropdownOptions,
          isRequired,
        },
      },
    }));
  }, [label, isRequired, dropdownOptions, showInput, fieldKey]);

  return (
    <>
      {fieldKey === "Checkbox" && (
        <div className="flex gap-x-1 bg-gray-200 p-1 rounded-md">
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
          <div className="flex gap-x-2">
            <label htmlFor="isRequired" className="ml-2">
              Required
            </label>
            <input
              type="checkbox"
              id="isRequired"
              checked={isRequired}
              onChange={() => setIsRequired(!isRequired)}
            />
          </div>
        </div>
      )}
      {fieldKey === "RadioButton" && (
        <div className="flex gap-x-1 bg-gray-200 p-1 rounded-md">
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
          <div className="flex gap-x-2">
            <label htmlFor="isRequired" className="ml-2">
              Required
            </label>
            <input
              type="checkbox"
              id="isRequired"
              checked={isRequired}
              onChange={() => setIsRequired(!isRequired)}
            />
          </div>
        </div>
      )}
      {fieldKey === "Dropdown" && (
        <>
          <DropdownOptionsInput
            dropdownOptions={dropdownOptions!}
            onOptionChange={(newOptions) => setDropdownOptions(newOptions)}
            onAddOption={(newOptions) => setDropdownOptions(newOptions)}
          />
          <div className="bg-gray-200 p-1 rounded-md gap-x-2 flex">
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
            <div className="flex gap-x-2">
              <label htmlFor="isRequired" className="ml-2">
                Required
              </label>
              <input
                type="checkbox"
                id="isRequired"
                checked={isRequired}
                onChange={() => setIsRequired(!isRequired)}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CustomFields;
