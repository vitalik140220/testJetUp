import { FC } from "react"
import ListItem from "../../components/listItem/ListItem"
import { useAppSelector } from "../../hooks/redux"
import "./style.css"

const Home: FC = () => {
	const { words } = useAppSelector((state) => state.words)
	return (
		<div className='home'>
			<div className='title'>Vocabulary</div>
			<ul>
				<ListItem original='Original' translate='Translate' />
				{words.map(({ original, translate }, id) => (
					<ListItem original={original} key={id} translate={translate} />
				))}
			</ul>
		</div>
	)
}

export default Home
