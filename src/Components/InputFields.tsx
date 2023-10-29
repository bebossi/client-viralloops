import { useContext, useEffect, useState } from "react";
import { TextEditorProps } from "./TextEditor";
import { FormWidgetContext } from "../Providers/FormWidgetProvider";

const InputFields = ({ fieldKey }: TextEditorProps) => {
  const formWidgetContext = useContext(FormWidgetContext);

  if (!formWidgetContext) {
    return null;
  }

  const { formWidget, setFormWidget } = formWidgetContext;
  const fieldSettings = formWidget.fields[fieldKey];

  const [showInput, setShowInput] = useState(fieldSettings.showInput);
  const [label, setLabel] = useState(fieldSettings.label);
  const [isRequired, setIsRequired] = useState(fieldSettings.isRequired);

  useEffect(() => {
    setFormWidget((prevFormWidget) => ({
      ...prevFormWidget,
      fields: {
        ...prevFormWidget.fields,
        [fieldKey]: {
          label,
          showInput,
          isRequired,
        },
      },
    }));
  }, [label, showInput, isRequired, fieldKey]);

  return (
    <div className="p-4 border rounded-md flex items-center bg-gray-200 my-2">
      <div className="mr-4">
        <input
          type="checkbox"
          id="showInput"
          checked={fieldKey === "EmailInput" ? true : showInput}
          onChange={() => {
            fieldKey === "EmailInput" ? true : setShowInput(!showInput);
          }}
        />
      </div>
      <div className=" mr-2">
        <input
          className="border-[3px] border-black border-solid"
          type="text"
          id="inputLabel"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
        />
      </div>
      <div className="flex gap-x-2">
        <label htmlFor="isRequired" className="ml-2">
          Required
        </label>
        <input
          type="checkbox"
          id="isRequired"
          checked={fieldKey === "EmailInput" ? true : isRequired}
          onChange={() => {
            fieldKey === "EmailInput" ? true : setIsRequired(!isRequired);
          }}
        />
      </div>
    </div>
  );
};

export default InputFields;
