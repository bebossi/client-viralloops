import { useContext, useEffect } from "react";
import { FormWidgetContext } from "../Providers/FormWidgetProvider";

const Modal = () => {
  const formWidgetContext = useContext(FormWidgetContext);

  if (!formWidgetContext) {
    return null;
  }
  const { formWidget } = formWidgetContext;
  const { fields } = formWidget;

  useEffect(() => {}, [formWidget]);
  return (
    <>
      <div className="w-full p-4 overflow-x-hidden overflow-y-auto  max-h-full bg-gray-200">
        <div className="relative w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow ">
            <div className="px-6 py-6 lg:px-8">
              <div className="flex flex-col justify-center items-center">
                <h3
                  className="mb-4 text-xl font-medium"
                  style={{
                    fontSize: fields.Title.fontSize + "px",
                    fontFamily: fields.Title.fontFamily,
                    fontWeight: fields.Title.bold ? "bold" : "normal",
                    textDecoration: fields.Title.underline
                      ? "underline"
                      : "none",
                    color: fields.Title.fontColor,
                  }}
                >
                  {fields.Title.label}
                </h3>
                <h2
                  className="mb-4 text-lg"
                  style={{
                    fontSize: fields.Subtitle.fontSize + "px",
                    fontFamily: fields.Subtitle.fontFamily,
                    fontWeight: fields.Subtitle.bold ? "bold" : "normal",
                    textDecoration: fields.Subtitle.underline
                      ? "underline"
                      : "none",
                    color: fields.Subtitle.fontColor,
                  }}
                >
                  {fields.Subtitle.label}
                </h2>
              </div>
              <form className="space-y-6" action="#">
                <div>
                  {fields.FirstNameInput.showInput ? (
                    <input
                      className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 "
                      placeholder={
                        fields.FirstNameInput.label +
                        (fields.FirstNameInput.isRequired ? "*" : "")
                      }
                      required={fields.FirstNameInput.isRequired}
                    />
                  ) : null}
                </div>
                <div>
                  {fields.LastNameInput.showInput ? (
                    <input
                      className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 "
                      placeholder={
                        fields.LastNameInput.label +
                        (fields.LastNameInput.isRequired ? "*" : "")
                      }
                      required={fields.LastNameInput.isRequired}
                    />
                  ) : null}
                </div>
                <div>
                  {fields.EmailInput.showInput ? (
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400"
                      placeholder={fields.EmailInput.label + "*"}
                      required
                    />
                  ) : null}
                </div>
                <div>
                  {fields.Checkbox.showInput ? (
                    <div className="flex">
                      <input
                        type="checkbox"
                        required={fields.Checkbox.isRequired}
                        className="mr-3"
                      />
                      <p>
                        {fields.Checkbox.label}{" "}
                        <span className="font-bold">
                          {fields.Checkbox.isRequired ? "*" : null}
                        </span>
                      </p>
                    </div>
                  ) : null}
                </div>
                <div>
                  {fields.RadioButton.showInput ? (
                    <div className="flex ">
                      <input
                        type="radio"
                        required={fields.RadioButton.isRequired}
                        className="mr-3"
                      />
                      <p>
                        {fields.RadioButton.label}{" "}
                        <span className="font-bold">
                          {fields.RadioButton.isRequired ? "*" : null}
                        </span>
                      </p>
                    </div>
                  ) : null}
                </div>
                <div>
                  {fields.Dropdown.showInput ? (
                    <div className="flex gap-x-2 ">
                      <select className="border-black border">
                        {fields.Dropdown.dropdownOptions!.filter(
                          (option) => option.show
                        ).map((option, index) => (
                          <option key={index} value={option.label}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <p className="font-bold">
                        {fields.Dropdown.isRequired ? "*" : null}
                      </p>
                    </div>
                  ) : null}
                </div>
                <div className="flex justify-center items-center">
                  <button
                    type="submit"
                    className="mb-4 text-lg p-2 w-full"
                    style={{
                      fontSize: fields.Button.fontSize + "px",
                      fontFamily: fields.Button.fontFamily,
                      fontWeight: fields.Button.bold ? "bold" : "normal",
                      textDecoration: fields.Button.underline
                        ? "underline"
                        : "none",
                      color: fields.Button.fontColor,
                      backgroundColor: fields.Button.backgroundColor,
                      borderRadius: fields.Button.borderRadius + "px",
                    }}
                  >
                    {fields.Button.label}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
