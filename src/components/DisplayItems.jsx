import SingleItem from "./SingleItem";

const DisplayItems = ({ subs }) => {
	return (
		<>
			<h2>Suscripciones:</h2>
			{subs.map((item) => (
				<SingleItem
					id={item.id}
					price={item.price}
					type={item.type}
					key={item.id}
				/>
			))}
		</>
	);
};

export default DisplayItems;
