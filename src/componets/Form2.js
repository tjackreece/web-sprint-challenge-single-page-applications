import React from "react";

export default function Form2(props) {
	// THESE ARE THE **EXACT PROPS** Form EXPECTS!!!
	const { values, update, submit } = props;

	const onChange = (evt) => {
		// 🔥 STEP 6 - IMPLEMENT the change handler for our inputs and dropdown
		// a) pull the name of the input from the event object
		// b) pull the value of the input from the event object
		const { name, value } = evt.target;
		// c) use the `update` callback coming in through props
		update(name, value);
	};

	const onSubmit = (evt) => {
		// 🔥 STEP 7 - IMPLEMENT the submit handler
		// a) don't allow the browser to reload!
		evt.preventDefault();
		// c) use the `submit` callback coming in through props
		submit();
	};

	return (
		<form onSubmit={onSubmit}>
			<div>
				<h2>Build Your Own Pizza</h2>
			</div>
			<div>
				<h2>Choice of Size</h2>
				<p>*Required</p>
				<label>
					<select name="pizzaSize" value={values.pizzaSize} onChange={onChange}>
						<option value="">---select---</option>
						<option value="small">Small</option>
						<option value="medium">Medium</option>
						<option value="large">Large</option>
						<option value="xtralarge">X-Large</option>
					</select>
				</label>
			</div>
			<div>
				<label>
					<h2>Choice of Sause</h2>
					<p>*Required</p>
					<input
						type="radio"
						value={values.sause}
						name="Tomato-Sauce"
						onChange={onChange}
					/>{" "}
					Tomato Sauce
					<input
						type="radio"
						value={values.sause}
						name="Hearty-Marinara-Sauce"
						onChange={onChange}
					/>{" "}
					Hearty Marinara Sauce
					<input
						type="radio"
						value={values.sause}
						name="Honey-BBQ-Sauce"
						onChange={onChange}
					/>{" "}
					Honey BBQ Sauce
					<input
						type="radio"
						value={values.sause}
						name="Garlic-Parmesan-Sauce"
						onChange={onChange}
					/>{" "}
					Garlic Parmesan Sauce
					<input
						type="radio"
						value={values.sause}
						name="Alfredo-Sauce"
						onChange={onChange}
					/>{" "}
					Alfredo Sauce
					<input
						type="radio"
						value={values.sause}
						name="Ranch"
						onChange={onChange}
					/>{" "}
					Ranch
				</label>
			</div>
			<div>
				<h2>Add Toppings</h2>
				<p>*Choose up to 10</p>
				<label>
					<input
						type="checkbox"
						value={values.sause}
						name="pepperoni"
						onChange={onChange}
					/>{" "}
					Pepperoni
					<input
						type="checkbox"
						value={values.sause}
						name="sausage"
						onChange={onChange}
					/>{" "}
					Sausage
					<input
						type="checkbox"
						value={values.sause}
						name="Canadian_bacon"
						onChange={onChange}
					/>{" "}
					Canadian Bacon
					<input
						type="checkbox"
						value={values.sause}
						name="Spicy-italian-sausage"
						onChange={onChange}
					/>{" "}
					Spicy Italian Sausage
					<input
						type="checkbox"
						value={values.sause}
						name="grilled-chicken"
						onChange={onChange}
					/>{" "}
					Grilled Chicken
					<input
						type="checkbox"
						value={values.sause}
						name="onions"
						onChange={onChange}
					/>{" "}
					Onions
					<input
						type="checkbox"
						value={values.sause}
						name="grilled-peppers"
						onChange={onChange}
					/>{" "}
					Grilled Peppers
					<input
						type="checkbox"
						value={values.sause}
						name="Diced-Tomatoes"
						onChange={onChange}
					/>{" "}
					Diced Tomatoes
					<input
						type="checkbox"
						value={values.sause}
						name="black-olives"
						onChange={onChange}
					/>{" "}
					Black Olives
					<input
						type="checkbox"
						value={values.sause}
						name="pepperoni"
						onChange={onChange}
					/>{" "}
					Pepperoni
					<input
						type="checkbox"
						value={values.sause}
						name="Roasted-Garlic"
						onChange={onChange}
					/>{" "}
					Roasted Garlic
					<input
						type="checkbox"
						value={values.sause}
						name="extra-cheese"
						onChange={onChange}
					/>{" "}
					Extra Cheese
				</label>
			</div>
			<div>
				<h2>Choice of Substitute</h2>
				<p> Optional</p>
				<label>
					<input
						type="radio"
						value={values.glutenfree}
						name="Gluten-Free"
						onChange={onChange}
					/>{" "}
					Gluten Free
				</label>
			</div>

			<div className="submit">
				<button>submit</button>
			</div>
		</form>
	);
}
