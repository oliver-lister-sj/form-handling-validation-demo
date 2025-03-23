import "./App.css";
import FormikForm from "./components/FormikForm";
import ReactHookForm from "./components/ReactHookForm";
import TanstackForm from "./components/TanstackForm";

function App() {
  return (
    <>
      <ReactHookForm />
      <FormikForm />
      <TanstackForm />
    </>
  );
}

export default App;
