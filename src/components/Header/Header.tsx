import { FC } from "react"
import { Link } from "react-router-dom"
import "./style.css"

const Header: FC = () => {
	return (
		<header>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/add_word'>Add</Link>
				</li>
				<li>
					<Link to='/history'>History</Link>
				</li>
				<li>
					<Link to='/check_word'>Check</Link>
				</li>
			</ul>
		</header>
	)
}

export default Header
