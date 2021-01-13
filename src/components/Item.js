import React from "react"

import styled from "styled-components"

const ExploreItem = styled.div`
	width: 45%;
	background-color: rgba(255, 255, 255, 0.1);
	height: 80%;
	border-radius: 25px;
	font-family: DXPnM;
	&:hover {
		color: white;
	}
`
const Profile = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	img {
		top: 4%;
		left: 4%;
		margin-top: 4%;
		margin-bottom: 4%;
		position: relative;
	}
`
const Name = styled.div`
	font-size: 1.4rem;
	margin-left: 7%;
`

const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	bottom: 5%;
	padding-left: 4%;
	padding-right: 4%;
`

const Title = styled.div`
	font-size: 2rem;
`
const Content = styled.div`
	font-size: 1rem;
	margin-bottom: 1rem;
`
const Tags = styled.div`
	display: flex;
	justify-content: flex-start;

	font-size: 0.8rem;
`
const Tag = styled.div`
	margin-right: 2%;
	padding-left: 0.4rem;
	padding-right: 0.4rem;
	border-radius: 5px;
	background: #00000047 0% 0% no-repeat padding-box;
`
const Item = (props) => {
	return (
		<ExploreItem>
			<Profile>
				<img src={props.Profile.image} alt="" />
				<Name>{props.Profile.name}</Name>
			</Profile>
			<ContentWrapper>
				<Title>{props.Title}</Title> <Content>{props.Content}</Content>{" "}
				<Tags>
					<Tag>{props.Tags.tag1} </Tag>
					<Tag>{props.Tags.tag2}</Tag>
				</Tags>
			</ContentWrapper>
		</ExploreItem>
	)
}

export default Item
