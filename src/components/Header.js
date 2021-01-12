import React from "react"
import styled from "styled-components"
import Responsive from "./Responsive"
import logo from "../images/logo.png"
import { AiOutlineSearch } from "react-icons/ai"

const HeaderBlock = styled.div`
	position: fixed;
	width: 100%;
	background: #00000047 0% 0% no-repeat padding-box;
	opacity: 1;
`
const Wrapper = styled(Responsive)`
	height: 4rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-family: "DXPnM";
	color: white;
	font-size: 0.8rem;
	font-weight: 500;
	.left {
		align-items: center;
		justify-content: flex-start;
		display: flex;
		a {
			text-decoration: none;
			color: white;
			margin-left: 1.5rem;
			&:hover {
				color: #fde8c4;
			}
		}

		.logo {
			width: 4.5rem;
			height: 3rem;
			padding-right: 0;
		}
	}
	.right {
		display: flex;
		align-items: center;
		AiOutlineSearch {
			margin-right: 0.2rem;
			size: 1rem;
		}
		.searchBar {
			font-size: 1rem;
			font-family: "DXPnM";
			margin-left: 0.6rem;

			color: white;
			background: none;
			border-top: none;
			border-left: none;
			border-right: none;
			border-color: white;
			border-radius: 0;

			height: 1.6rem;
			width: 3rem;
			transition: width 0.35s linear;
			&::-webkit-input-placeholder {
				color: white;
			}
			&:focus {
				outline: none;
				width: 7rem;
				&::-webkit-input-placeholder {
					color: rgba(255, 255, 255, 0.5);
				}
			}
		}
	}
`

const Header = () => {
	return (
		<div>
			<HeaderBlock>
				<Wrapper>
					<div className="left">
						<img src={logo} className="logo" alt="" />
						<a href="about 골방">골방.dev</a>
						<a href="로그인 페이지">로그인</a>
					</div>
					<div className="right">
						<AiOutlineSearch size="1.5rem" />
						<form name="fr" onsubmit="">
							{
								//검색
							}
							<input type="text" className="searchBar" placeholder="검색" />
						</form>
					</div>
				</Wrapper>
			</HeaderBlock>
		</div>
	)
}

export default Header
