import { moneyFormat } from "../helpers";

const SingleItem = ({ price, type, id }) => {
	const urlImage = `../public/${type}.png`;
	return (
		<div className="single-item">
			<img src={urlImage} alt={type} />
			<h3>Precio: {moneyFormat(Number(price))}</h3>
			<a href="" className="delete">
				Borrar
			</a>
			<a href="" className="edit">
				Editar
			</a>
		</div>
	);
};

export default SingleItem;
