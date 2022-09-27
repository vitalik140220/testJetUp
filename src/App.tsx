import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import AddWord from "./screens/addWord/AddWord"
import CheckWords from "./screens/checkWords/CheckWords"
import Result from "./screens/result/Result"
import Home from "./screens/home/Home"
function App() {
	return (
		<div className='App'>
			<Router>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/add_word' element={<AddWord />} />
					<Route path='/result' element={<Result />} />
					<Route path='/check_word' element={<CheckWords />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
