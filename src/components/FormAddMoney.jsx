import { useState } from "react";

const FormAddMoney = ({ setCount, setIsValid }) => {
	const [input, setInput] = useState("");
	const [error, setError] = useState(false);

	{
		/* Comentario: step 3*/
	}
	const handleFormMoney = (e) => {
		e.preventDefault();
		{
			/* Comentario: step 4 agrego validacion */
		}
		if (input === "" || Number(input) <= 0) {
			setError(true);

			setTimeout(() => {
				setError(false);
			}, 3000);
			return;
		}
		// setError(false);
		setCount(Number(input)); //Comentario: step 5 creo en "App" en state count
		setIsValid(true); //Comentario: step 6: este set hace que se renderice en app el componente: MainControl
	};

	return (
		<div className="form-add-money">
			<form onSubmit={handleFormMoney}>
				{" "}
				{/* Comentario: Step 2 */}
				<p>Agregar Presupuesto</p>
				<input
					type="number"
					placeholder="Ingrese aqui la cantidad $"
					onChange={(e) => setInput(e.target.value)} //{/* Comentario: step 1 */}
				/>
				<input className="agregar" type="submit" value="Agregar" />
			</form>
			{error ? (
				<p className="error">Presupuesto invalido, ingresa un presupuesto</p>
			) : null}
		</div>
	);
};

export default FormAddMoney;
