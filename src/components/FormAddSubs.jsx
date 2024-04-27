import React from "react";
import { useState } from "react";

const FormAddSubs = ({ setPriceSubs, setTypeSubs, typeSubs, priceSubs }) => {
	const [error, setError] = useState(false);

	const handleSubscriptions = (e) => {
		e.preventDefault();

		if (typeSubs === "" || Number(priceSubs) <= 0) {
			setError(true);

			setTimeout(() => {
				setError(false);
			}, 3000);
			return;
		}
	};

	return (
		<div className="add-subscription">
			<h3>Agregar Suscripciones</h3>
			<form onSubmit={handleSubscriptions}>
				<p>Servicio</p>
				<select onChange={(e) => setTypeSubs(e.target.value)}>
					<option value="">--Elegir--</option>
					<option value="Netflix">Netflix</option>
					<option value="disneyplus">Disney Plus</option>
					<option value="hbomax">HBO Max</option>
					<option value="starplus">Star Plus</option>
					<option value="primevideos">Prime Videos</option>
					<option value="spotify">Spotify</option>
					<option value="apletv">Aple tv</option>
				</select>
				<p>Precio</p>
				<input
					type="number"
					placeholder="Ingresa aqui el precio $"
					onChange={(e) => setPriceSubs(e.target.value)}
				/>
				<input type="submit" value="agregar" />
			</form>
			{error ? (
				<p className="error">Por favor llene todos los campos </p>
			) : null}
		</div>
	);
};

export default FormAddSubs;
