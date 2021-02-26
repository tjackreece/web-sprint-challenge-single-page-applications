import React from "react";
import styled from "styled-components";

function Nav() {
	return (
		<HeaderDiv>
			<H1LogoDiv>
				<h1>Lambda Eats</h1>
			</H1LogoDiv>
			<NavDiv>
				<NavLinks href="/">Home</NavLinks>
				<NavLinks href="/help">Help</NavLinks>
			</NavDiv>
		</HeaderDiv>
	);
}
const HeaderDiv = styled.div`
	width: 100vw;
	// height: 5vh;
	display: flex;
	justify-content: space-between;
	flex-direction: row;
`;
const H1LogoDiv = styled.div`
	width: 25vw;
	margin: 1rem 3rem;
	color: red;
`;

const NavDiv = styled.div`
	margin: auto 0;
	width: 25vw;
`;
const NavLinks = styled.a`
	text-decoration: none;
	padding: 15px 40px;
	margin: 0 0.5px;
	border: solid 2px black;
`;

export default Nav;
