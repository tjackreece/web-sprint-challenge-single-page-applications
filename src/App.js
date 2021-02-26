import React from "react";

import Nav from "./componets/Nav";
import Banner from "./componets/Banner";
// import Resturants from "./componets/Resturants";
import ResturantCard from "./componets/ResturantCard";
import resturantList from "./componets/ResturantList/ResturantList";

// import Form2 from "./componets/Form2";

// import { useState } from "react";
// import { ResturantList } from "../src/componets/ResturantList/ResturantList";
// console.log(resturantList);
// const initialFormValues = {
// 	///// TEXT INPUTS /////
// 	username: "",
// 	email: "",
// 	///// DROPDOWN /////
// 	pizzaSize: "",
// };
const App = () => {
	// const [friends, setFriends] = useState([]); // careful what you initialize your state to

	// 🔥 STEP 1 - WE NEED STATE TO HOLD ALL VALUES OF THE FORM!

	// const [formValues, setFormValues] = useState(initialFormValues); // fix this using the state hook

	// const updateForm = (inputName, inputValue) => {
	// 🔥 STEP 8 - IMPLEMENT a "form state updater" which will be used inside the inputs' `onChange` handler
	//  It takes in the name of an input and its value, and updates `formValues`
	// setFormValues({ ...formValues, [inputName]: inputValue });
	// };

	// const submitForm = () => {
	// 🔥 STEP 9 - IMPLEMENT a submit function which will be used inside the form's own `onSubmit`
	//  a) make a new friend object, trimming whitespace from username and email
	// const newFriend = {
	// username: formValues.username.trim(),
	// email: formValues.email.trim(),
	//  role: formValues.role,
	// };
	//  b) prevent further action if either username or email or role is empty string after trimming
	// if (!newFriend.username || !newFriend.email || !newFriend.role) {
	// return;
	// }
	//  c) POST new friend to backend, and on success update the list of friends in state with the new friend from API
	//  d) also on success clear the form
	// };
	return (
		<>
			<Nav />
			<Banner />
			{resturantList.map((resturant) => {
				if (resturant !== null) {
					return <ResturnantCard resturant={resturant} />;
				}
				return null;
			})}
			{/* <Form2 values={formValues} update={updateForm} submit={submitForm} /> */}
		</>
	);
};
export default App;
