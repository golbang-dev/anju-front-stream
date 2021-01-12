import React, { useState } from "react"
import styled from "styled-components"
import Responsive from "./Responsive"
import homeBackground from "../images/homeBackground.jpeg"
import { AiOutlineSearch } from "react-icons/ai"

const ImageWrapper = styled.div`
	width: 100%;
	padding-bottom: 66%;
	background-image: url(${homeBackground});
	background-size: 100%;
	background-repeat: no-repeat;
	position: absolute;
	top: 0;
	left: 0;
	z-index: -1;
`

const IntroductionWrapper = styled(Responsive)`
	padding-left: 0.8rem;
	margin-top: 8rem;
	display: flex;
	font-family: DXPnM;
	font-size: 3rem;
	color: white;
	z-index: 1;
`

const SearchBoxWrapper = styled(Responsive)`
	align-items: center;
`

const Search = styled.div`
	display: flexbox;
	justify-content: flex-start;
	align-items: center;
	color: white;
	background: #00000047 0% 0% no-repeat padding-box;
	opacity: 1;
	padding-left: 1rem;
	padding-top: 1rem;
	padding-bottom: 0.5rem;
	padding-right: 0;
	margin-top: 1rem;
	width: ${(props) => props.width};
	border-radius: 50px;
	transition: width 0.6s linear;
	.SearchBar {
		font-size: 2rem;
		font-family: "DXPnM";
		margin-left: 0.6rem;
		color: white;
		background: none;
		border: none;
		height: 2.4rem;
		width: 15rem;

		&::-webkit-input-placeholder {
			color: white;
		}
		&:focus {
			outline: none;
			&::-webkit-input-placeholder {
				color: rgba(255, 255, 255, 0.5);
			}
		}
	}
`

const ExplorerListWrapper = styled(Responsive)`
	height: auto;
`

const HomeBody = () => {
	const [searchBarWidth, setSearachBarWidth] = useState("13rem")

	return (
		<div>
			<ImageWrapper>
				<IntroductionWrapper>
					대충 아무말
					<br />
					다들 글을 써보세요
					<br />
					무야호~
					<br />
					그만큼 신난다는 거지~
				</IntroductionWrapper>
				<SearchBoxWrapper>
					<Search width={searchBarWidth}>
						<AiOutlineSearch size="2rem" />
						<form name="fr" onsubmit="">
							{
								//검색
							}
							<input
								className="SearchBar"
								type="text"
								placeholder="상세 검색"
								onFocus={() => setSearachBarWidth("30rem")}
								onBlur={() => setSearachBarWidth("13rem")}
							/>
						</form>
					</Search>
				</SearchBoxWrapper>
			</ImageWrapper>
			<ExplorerListWrapper></ExplorerListWrapper>
		</div>
	)
}

export default HomeBody
