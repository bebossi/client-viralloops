import { createContext, useState } from "react";

export interface FormWidget {
  fields: { [key: string]: FieldSettings };
}

export interface FieldSettings {
  label?: string;
  fontSize?: string;
  fontFamily?: string;
  bold?: boolean;
  underline?: boolean;
  fontColor?: string;
  backgroundColor?: string;
  borderRadius?: string;
  isRequired?: boolean;
  showInput?: boolean;
  dropdownOptions?: {
    label: string;
    show: boolean;
  }[];
}

const FormWidgetContext = createContext<{
  formWidget: FormWidget;
  setFormWidget: React.Dispatch<React.SetStateAction<FormWidget>>;
} | null>(null);

function FormWidgetContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [formWidget, setFormWidget] = useState<FormWidget>({
    fields: {
      Title: {
        label: "Invite Your friends",
        fontSize: "20",
        fontFamily: "Arial, sans-serif",
        bold: true,
        underline: false,
        fontColor: "#000000",
      },
      Subtitle: {
        label: "Join our referral program",
        fontSize: "16",
        fontFamily: "Arial, sans-serif",
        bold: false,
        underline: false,
        fontColor: "#000000",
      },
      Button: {
        label: "Join and win",
        fontSize: "16",
        fontFamily: "Arial, sans-serif",
        bold: false,
        underline: false,
        fontColor: "#FFFFFF",
        backgroundColor: "#000000",
        borderRadius: "0",
      },
      FirstNameInput: {
        label: "Enter your first name",
        fontSize: "16",
        fontFamily: "Arial, sans-serif",
        isRequired: false,
        showInput: true,
      },
      LastNameInput: {
        label: "Enter your last name",
        fontSize: "16",
        fontFamily: "Arial, sans-serif",
        isRequired: false,
        showInput: true,
      },
      EmailInput: {
        label: "Enter your email address",
        fontSize: "16",
        fontFamily: "Arial, sans-serif",
        isRequired: true,
        showInput: true,
      },
      Checkbox: {
        label: "Check box label",
        isRequired: false,
        showInput: false,
      },
      RadioButton: {
        label: "Radio button label",
        isRequired: false,
        showInput: false,
      },
      Dropdown: {
        showInput: false,
        isRequired: false,
        dropdownOptions: [
          {
            label: "Option 1 ",
            show: true,
          },
          {
            label: "Option 2",
            show: true,
          },
          {
            label: "Option 3",
            show: true,
          },
          {
            label: "",
            show: false,
          },
          {
            label: "",
            show: false,
          },
          {
            label: "",
            show: false,
          },
          {
            label: "",
            show: false,
          },
          {
            label: "",
            show: false,
          },
          {
            label: "",
            show: false,
          },
          {
            label: "",
            show: false,
          },
        ],
      },
    },
  });

  return (
    <FormWidgetContext.Provider value={{ formWidget, setFormWidget }}>
      {children}
    </FormWidgetContext.Provider>
  );
}

export { FormWidgetContext, FormWidgetContextProvider };
