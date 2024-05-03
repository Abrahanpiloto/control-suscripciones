import React from "react";
import Balance from "./Balance";
import FormAddSubs from "./FormAddSubs";
import { useState } from "react";
import DisplayItems from "./DisplayItems";

const MainControl = ({ count }) => {
	const [typeSubs, setTypeSubs] = useState("");
	const [priceSubs, setPriceSubs] = useState("");
	const [subs, setSubs] = useState([]);

	const eliminarItem = (id) => {
		const newList = subs.filter((item) => item.id != id);
		setSubs(newList);
	};

	const editItem = (id) => {
		subs.map((item) => {
			if (item.id === id) {
				setTypeSubs(item.type);
				setPriceSubs(item.price);
			}
		});
	};

	return (
		<>
			<div className="main-form">
				<Balance count={count} />
				<FormAddSubs
					setTypeSubs={setTypeSubs}
					setPriceSubs={setPriceSubs}
					typeSubs={typeSubs}
					priceSubs={priceSubs}
					subs={subs}
					setSubs={setSubs}
				/>
			</div>
			<DisplayItems
				subs={subs}
				eliminarItem={eliminarItem}
				editItem={editItem}
			/>
		</>
	);
};

export default MainControl;
