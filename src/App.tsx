import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import AddWord from "./screens/addWord/AddWord"
import CheckWords from "./screens/checkWords/CheckWords"
import History from "./screens/history/History"
import Home from "./screens/home/Home"
function App() {
	return (
		<div className='App'>
			<Router>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/add_word' element={<AddWord />} />
					<Route path='/history' element={<History />} />
					<Route path='/check_word' element={<CheckWords />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
