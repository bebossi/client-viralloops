import { useContext, useState } from "react";
import TextEditor from "./TextEditor";
import { FormWidgetContext } from "../Providers/FormWidgetProvider";
import InputFields from "./InputFields";
import { api } from "../api";
import CustomFields from "./CustomFields";

const SideBar = () => {
  const [showStyles, setShowStyles] = useState(true);
  const [showHeading, setShowHeading] = useState(true);
  const [showInputs, setShowInputs] = useState(true);
  const [showCustomFields, setShowCustomFields] = useState(true);
  const [showButton, setShowButton] = useState(true);
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
    <div className="p-4 border rounded-md w-full h-screen overflow-y-auto">
      <h1
        className=" text-2xl font-bold mb-8 hover:cursor-pointer"
        onClick={() => setShowStyles(!showStyles)}
      >
        Style
      </h1>
      {showStyles ? (
        <>
          <div className="mb-8">
            <h1
              className="hover:cursor-pointer text-lg font-bold mb-4"
              onClick={() => setShowHeading(!showHeading)}
            >
              Heading
            </h1>
            <div>
              {showHeading ? (
                <>
                  <div className="mb-4">
                    <h2 className="mb-4 font-semibold">Title</h2>
                    <TextEditor fieldKey="Title" />
                  </div>
                  <div className="mb-4">
                    <h2 className="mb-4 font-semibold">Subtitle</h2>
                    <TextEditor fieldKey="Subtitle" />
                  </div>
                </>
              ) : null}
            </div>
          </div>
          <div className="mb-8">
            <h1
              className="text-lg font-bold hover:cursor-pointer"
              onClick={() => setShowInputs(!showInputs)}
            >
              Input fields
            </h1>
            {showInputs ? (
              <>
                <InputFields fieldKey="FirstNameInput" />
                <InputFields fieldKey="LastNameInput" />
                <InputFields fieldKey="EmailInput" />
              </>
            ) : null}
          </div>
          <div className="mb-8">
            <h2
              className="text-lg font-bold mb-4 hover:cursor-pointer"
              onClick={() => setShowCustomFields(!showCustomFields)}
            >
              Custom fields
            </h2>
            {showCustomFields ? (
              <>
                <div className="mb-2">
                  <h3 className="font-semibold text-lg mb-2">Checkbox</h3>
                  <CustomFields fieldKey="Checkbox" />
                </div>
                <div className="mb-2">
                  <h3 className="font-semibold text-lg mb-2">Radio Button</h3>
                  <CustomFields fieldKey="RadioButton" />
                </div>
                <div className="mb-2">
                  <h3 className="font-semibold text-lg mb-2">Dropdown</h3>
                  <CustomFields fieldKey="Dropdown" />
                </div>
              </>
            ) : null}
          </div>
          <div>
            <div className="mb-4">
              <h2
                className="text-lg font-semibold mb-4 hover:cursor-pointer"
                onClick={() => setShowButton(!showButton)}
              >
                Button
              </h2>
              {showButton ? <TextEditor fieldKey="Button" /> : null}
            </div>
          </div>
        </>
      ) : null}
      <div className="flex justify-around sticky -bottom-4 gap-x-10 bg-white">
        <button className="rounded-md bg-red-500 font-bold p-2">Cancel</button>
        <button
          className="rounded-md bg-green-500 font-bold p-2"
          onClick={saveChanges}
        >
          Save changes
        </button>
      </div>
    </div>
  );
};

export default SideBar;
