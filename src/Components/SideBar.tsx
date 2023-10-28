import { useContext } from "react";
import TextEditor from "./TextEditor";
import { FormWidgetContext } from "../Providers/FormWidgetProvider";
import InputFields from "./InputFields";
import { api } from "../api";
import CustomFields from "./CustomFields";

const SideBar = () => {
  const formWidgetContext = useContext(FormWidgetContext);

  if (!formWidgetContext) {
    return null;
  }

  const saveChanges = async () => {
    try {
      const response = await api.post("/formWidget", {
        formWidget: formWidgetContext.formWidget, 
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-4 border rounded-md">
      <h1 className="text-lg font-semibold mb-4">Style</h1>
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Typogragphy</h2>
        <div className="mb-4">
          <label>Heading</label>
          <TextEditor fieldKey="Title" />
        </div>
        <div className="mb-4">
          <TextEditor fieldKey="Subtitle" />
        </div>
      </div>
      <div>
        <div>
          <h1 className="text-lg font-semibold">Button</h1>
          <div className="mb-4">
            <TextEditor fieldKey="Button" />
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-semibold">Input fields</h2>
        <InputFields fieldKey="FirstNameInput" />
        <InputFields fieldKey="LastNameInput" />
        <InputFields fieldKey="EmailInput" />
      </div>
      <div>
        <h2 className="text-lg font-semibold">Custom fields</h2>
        <CustomFields fieldKey="Checkbox" />
        <CustomFields fieldKey="RadioButton" />
        <CustomFields fieldKey="Dropdown" />
      </div>
      <div className="flex justify-around">
        <button>Cancel</button>
        <button onClick={saveChanges}>Save changes</button>
      </div>
    </div>
  );
};

export default SideBar;
