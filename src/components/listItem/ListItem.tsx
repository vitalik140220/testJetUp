import { FC } from "react"
import "./style.css"

interface ListItemProps {
	original: string
	translate: string
}

const ListItem: FC<ListItemProps> = ({ original, translate }) => {
	return (
		<div className='listItem'>
			<div className='originalContainer'>{original}</div>
			<div className='translateContainer'>{translate}</div>
		</div>
	)
}

export default ListItem
