import styled from "styled-components"
import React, { useState } from "react"
import Responsive from "./Responsive"
import exploreBackground from "../images/exploreBackground.jpeg"
import Item from "./Item"
import profileImage from "../images/profile.png"

const ImageWrapper = styled.div`
	position: absolute;
	top: 66vw;
	height: 100%;
	width: 100%;
	background-image: url(${exploreBackground});
	background-size: 100%;
	background-repeat: no-repeat;
`
const Title = styled(Responsive)`
	color: white;
	font-family: DXPnM;
	font-size: 3rem;
	margin-top: 3%;
`
const ResponsiveBox = styled(Responsive)`
	margin-top: 2%;
	height: 73%;
	border-radius: 25px;
	background: #00000047 0% 0% no-repeat padding-box;
	opacity: 1;
	display: flex;
	justify-content: space-between;
	color: white;
	font-size: 3rem;
	font-family: DXNPeriod;
	align-items: center;
`
const Button = styled.div`
	&:hover {
		color: #fde8c4;
		cursor: pointer;
	}
`
const Explore = () => {
	const [itemTitle, setItemTitle] = useState("긍정적인 생각, 유연한 사고")
	const [itemContent, setItemContent] = useState(
		"자 드가자~자 드가자~자 드가자~자 드가자~자 드가자~자 드가자~자 드가자~자 드가자~자 드가자~자 드가자~자 드가자~자 드가자~자 드가자~자 드가자~자 드가자~자 드가자~자 드가자~자 드가자~자 드가자~자 드가자~자 드가자~자 드가자~자 드가자~자 드가자~자 드가자~자 드가자~자 드가자~자 드가자~자 드가자~자 드가자~자 드가자~자 드가자~자 드가자~자 드가자~자 드가자~자 드가자~"
	)
	const [tags, setTags] = useState({ tag1: "#비트코인", tag2: "#업비트", tagNum: 2 })
	const [profile, setProfile] = useState({ image: profileImage, name: "김찬호" })

	return (
		<ImageWrapper>
			<Title>무매몽지나 무지몽매나 뜻만 통하면 됐지</Title>
			<ResponsiveBox>
				<Button onClick="">{"<"}</Button>
				<Item Title={itemTitle} Content={itemContent} Tags={tags} Profile={profile} />
				<Item Title={itemTitle} Content={itemContent} Tags={tags} Profile={profile} />
				<Button onClick="">{">"}</Button>
			</ResponsiveBox>
		</ImageWrapper>
	)
}
export default Explore
