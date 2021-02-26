import React from "react";
import styled from "styled-components";
// import Resturants from "./Resturants";

function ResturnantCard(props) {
	console.log(props);
	return (
		<CardDiv>
			<h1>Name:{}</h1>
			<p>{}</p>
			<p>Rating:{}</p>
			<p>Distance:{}</p>
			<p>Delivery Fee:{}</p>
		</CardDiv>
	);
}
const CardDiv = styled.div`
	height: 30vh;
	width: 30vw;
	border: solid black 2px;
	margin: 1rem 1rem;
`;
export default ResturnantCard;
