import "./App.css";
import { useSelector } from "react-redux";
import ContactForm from "components/ContactForm";
import Login from "components/Login";
import UserPanel from "components/UserPanel";

function App() {
  const inforUser = useSelector(({ home }) => home.inforUser);

  return (
    <div className="App">
      {Object.keys(inforUser).length === 0 ? (
        <Login />
      ) : (
        <div>
          <UserPanel />
          <ContactForm />
        </div>
      )}
    </div>
  );
}

export default App;
