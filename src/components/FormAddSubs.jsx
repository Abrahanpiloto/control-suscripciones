import React from "react";
import { useState } from "react";

const FormAddSubs = ({
	setPriceSubs,
	setTypeSubs,
	typeSubs,
	priceSubs,
	subs,
	setSubs,
	setEditId,
	editId
}) => {
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

		if(editId != "") {
			setEditId("")
			const newSubs = subs.map(item => {
				if(item.id === editId) {
					item.price = priceSubs
					item.type = typeSubs
				}
				return item
			})
			setSubs(newSubs)
		} else {
			const data = {
				id: Date.now(),
				type: typeSubs,
				price: Number(priceSubs),
			};
			setSubs([...subs, data]);
		}

		setPriceSubs("");
		setTypeSubs("");
		console.log(subs);
	};
	return (
		<div className="add-subscription">
			<h3>Agregar Suscripciones</h3>
			<form onSubmit={handleSubscriptions}>
				<p>Servicio</p>
				<select onChange={(e) => setTypeSubs(e.target.value)} value={typeSubs}>
					<option value="">--Elegir--</option>
					<option value="netflix">Netflix</option>
					<option value="disneyplus">Disney Plus</option>
					<option value="hbomax">HBO Max</option>
					<option value="starplus">Star Plus</option>
					<option value="primevideo">Prime Videos</option>
					<option value="spotify">Spotify</option>
					<option value="apletv">Apple Tv</option>
				</select>
				<p>Precio</p>
				<input
					type="number"
					placeholder="Ingresa aqui el precio $"
					onChange={(e) => setPriceSubs(e.target.value)}
					value={priceSubs}
				/>
				{editId != "" ? <input type="submit" value="guardar" /> : <input type="submit" value="agregar" />}
				
			</form>
			{error ? (
				<p className="error">Por favor llene todos los campos </p>
			) : null}
		</div>
	);
};

export default FormAddSubs;
