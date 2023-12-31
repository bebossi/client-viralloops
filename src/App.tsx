import FormWidgetEditor from "./Pages/FormWidgetEditor";
import LoginPage from "./Pages/Login";
import SignupPage from "./Pages/Signup";
import { FormWidgetContextProvider } from "./Providers/FormWidgetProvider";
import "./index.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <FormWidgetContextProvider>
      <div>
        <Routes>
        <Route path="/" element={<SignupPage/>} />
        <Route path="/login" element={<LoginPage/>} />

        <Route path="/form" element={<FormWidgetEditor />} />        
        </Routes>
      </div>
    </FormWidgetContextProvider>
  );
}

export default App;
