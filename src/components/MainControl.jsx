import React from "react";
import Balance from "./Balance";
import FormAddSubs from "./FormAddSubs";
import { useState } from "react";

const MainControl = ({ count }) => {
	const [typeSubs, setTypeSubs] = useState("");
	const [priceSubs, setPriceSubs] = useState("");
	return (
		<div className="main-form">
			<Balance count={count} />
			<FormAddSubs
				setTypeSubs={setTypeSubs}
				setPriceSubs={setPriceSubs}
				typeSubs={typeSubs}
				priceSubs={priceSubs}
			/>
		</div>
	);
};

export default MainControl;
