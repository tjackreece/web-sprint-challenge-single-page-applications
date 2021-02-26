import React from "react";
import styled from "styled-components";

function Resturants() {
	return (
		<ResturantsDiv>
			<Styledh1>Pizza Delivery in Naples, Fl</Styledh1>
		</ResturantsDiv>
	);
}
const ResturantsDiv = styled.div`
	height: 50rem;
	background-color: red;
	border: green solid 2px;
`;
const Styledh1 = styled.h1`
	font-size: x-large;
	margin: 2rem 0;
`;

export default Resturants;
