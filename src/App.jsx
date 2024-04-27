import { useState } from "react";
import "./App.css";
import FormAddMoney from "./components/FormAddMoney";
import { Header } from "./components/Header";
import MainControl from "./components/MainControl";

function App() {
	const [count, setCount] = useState(0); //comentario: step 5: state que va a contener el monto ingresado en el FormAddMoney
	const [isValid, setIsValid] = useState(false); //Comentario: step 6: este set hace que se renderice en app el componente: MainControl

	const componentMainControl = isValid ? (
		<MainControl count={count} />
	) : (
		<FormAddMoney setCount={setCount} setIsValid={setIsValid} />
	);
	return (
		<div className="App">
			<Header />
			{componentMainControl}
		</div>
	);
}

export default App;
