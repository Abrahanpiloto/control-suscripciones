import { moneyFormat } from "../helpers";

const SingleItem = ({ price, type, id, eliminarItem, editItem }) => {
	const urlImage = `../public/${type}.png`;

	const handleDelete = (e) => {
		e.preventDefault();
		const alert = window.confirm(`¿Deseas Borrar ${type}?`);
		if (alert) {
			eliminarItem(id);
		}
	};

	const handleEdit = (e) => {
		e.preventDefault();

		editItem(id);
	};

	return (
		<div className="single-item">
			<img src={urlImage} alt={type} />
			<h3>Precio: {moneyFormat(Number(price))}</h3>
			<a href="" className="delete" onClick={handleDelete}>
				Borrar
			</a>
			<a href="" className="edit" onClick={handleEdit}>
				Editar
			</a>
		</div>
	);
};

export default SingleItem;
