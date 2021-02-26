import React from "react";
import styled from "styled-components";
import PizzaImage from "../Assets/Pizza.jpg";

function Banner() {
	return (
		<BannerDiv>
			<Styledh1>Your favorite food, delivered while coding</Styledh1>
			<StyledA href="/">Order Now</StyledA>
		</BannerDiv>
	);
}
const BannerDiv = styled.div`
	background-image: url(${PizzaImage});
	background-repeat: no-repeat;
	height: 50vh;
	display: flex;
	flex-direction: column;
`;
const Styledh1 = styled.h1`
	text-align: center;
	color: white;
	text-shadow: 4px 4px 4px black;
	font-size: 50px;
	
	padding 10rem 0 0 0;
`;
const StyledA = styled.a`
	color: white;
	border: solid white 2px;
	align-self: center;
	text-decoration: none;
	padding: 5px 10px;
	margin: 0 auto;
	text-shadow: 4px 4px 4px black;
	font-size: 30px;
`;

export default Banner;
