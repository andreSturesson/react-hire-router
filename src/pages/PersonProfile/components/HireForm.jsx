import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
function HireForm({ person, addHiredPerson }) {
	const [wage, setWage] = useState(0);
	const navigate = useNavigate();
	function handleSubmit(event) {
		event.preventDefault();
		addHiredPerson({ ...person, wage });
		navigate("/");
	}

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="wage">Wage Offer</label>
			<input
				type="text"
				id="wage"
				name="wage"
				onChange={(e) => setWage(e.target.value)}
				value={wage}
			/>
			<button type="submit" onSubmit={handleSubmit}>
				Hire
			</button>
		</form>
	);
}

export default HireForm;

HireForm.propTypes = {
	person: PropTypes.object,
	addHiredPerson: PropTypes.func,
};
