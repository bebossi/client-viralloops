import { useContext, useEffect, useState } from "react";
import { BiBold, BiUnderline } from "react-icons/bi";
import { FormWidgetContext } from "../Providers/FormWidgetProvider";

export interface TextEditorProps {
  fieldKey: string;
}

const TextEditor = ({ fieldKey }: TextEditorProps) => {
  const formWidgetContext = useContext(FormWidgetContext);

  if (!formWidgetContext) {
    return null;
  }

  const { formWidget, setFormWidget } = formWidgetContext;
  const fieldSettings = formWidget.fields[fieldKey];

  const [label, setLabel] = useState(fieldSettings.label);
  const [fontSize, setFontSize] = useState(fieldSettings.fontSize);
  const [fontFamily, setFontFamily] = useState(fieldSettings.fontFamily);
  const [bold, setBold] = useState(fieldSettings.bold);
  const [underline, setUnderline] = useState(fieldSettings.underline);
  const [fontColor, setFontColor] = useState(fieldSettings.fontColor);
  const [backgroundColor, setBackgroundColor] = useState(
    fieldSettings.backgroundColor
  );
  const [borderRadius, setBorderRadius] = useState(fieldSettings.borderRadius);

  useEffect(() => {
    setFormWidget((prevFormWidget) => ({
      ...prevFormWidget,
      fields: {
        ...prevFormWidget.fields,
        [fieldKey]: {
          label,
          fontSize,
          fontFamily,
          bold,
          underline,
          fontColor,
          backgroundColor,
          borderRadius,
        },
      },
    }));
  }, [
    label,
    backgroundColor,
    fontSize,
    fontFamily,
    borderRadius,
    bold,
    underline,
    fontColor,
    fieldKey,
  ]);

  return (
    <>
      <div className="mb-2">
        <label className="block text-gray-600 mr-2 ">{fieldKey} label</label>
        <input
          className="border-b-2 border-black focus:border-b focus:border-black"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          type="text"
        />
      </div>
      <div className="flex items-center justify-center border border-black rounded-md mb-4 divide-x-2 divide-black">
        <div className="text-center">
          <select
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value)}
          >
            <option value="15">15 px</option>
            <option value="16">16 px</option>
            <option value="17">17 px</option>
            <option value="18">18 px</option>
            <option value="19">19 px</option>
            <option value="20">20 px</option>
            <option value="21">21 px</option>
            <option value="22">22 px</option>
          </select>
        </div>
        <div>
          <select
            value={fontFamily}
            onChange={(e) => setFontFamily(e.target.value)}
          >
            <option value="Arial, sans-serif">Arial</option>
            <option value="Times New Roman, serif">Times New Roman</option>
            <option value="Courier New, monospace">Courier New</option>
            <option value="">Courier New</option>
          </select>
        </div>
        <div>
          <BiUnderline size={25} onClick={() => setUnderline(!underline)} />
        </div>
        <div>
          <BiBold size={25} onClick={() => setBold(!bold)} />
        </div>
        <div>
          <input
            type="color"
            value={fontColor}
            onChange={(e) => setFontColor(e.target.value)}
          />
        </div>
      </div>
      {fieldKey === "Button" && (
        <>
          <div className="flex justify-between">
            <label className="block text-gray-600">Background color</label>
            <div className="flex border divide-x-2">
              <input
                type="color"
                onChange={(e) => setBackgroundColor(e.target.value)}
              />
              <p>{backgroundColor}</p>
            </div>
          </div>
          <div className="mb-4 flex justify-between">
            <label className="block text-gray-600">Border radius</label>
            <div className="flex  border">
              <button
                onClick={() =>
                  setBorderRadius((prev) => String(parseInt(prev || "0") - 1))
                }
              >
                -
              </button>
              <input
                className="w-6 text-center"
                onChange={(e) => setBorderRadius(e.target.value)}
                value={borderRadius}
              />
              <button
                onClick={() =>
                  setBorderRadius((prev) => String(parseInt(prev || "0") + 1))
                }
              >
                +
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default TextEditor;
