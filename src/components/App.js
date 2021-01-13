import React from "react"
import GlobalStyle from "./GlobalStyle"
import Header from "./Header"
import HomeBody from "./HomeBody"
import Explore from "./Explore"

const App = () => {
	// scroll event 만들고싶어용
	// Item 슬라이더.
	return (
		<div>
			<GlobalStyle />
			<HomeBody />
			<Explore />
			<Header />
		</div>
	)
}

export default App
