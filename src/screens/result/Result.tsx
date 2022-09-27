import { FC } from "react"
import { useAppSelector } from "../../hooks/redux"
import "./style.css"

const Result: FC = () => {
	const { trueAnswer } = useAppSelector((state) => state.words)

	return (
		<div className='result'>
			{!trueAnswer
				? "You don`t check words"
				: `Your result ${trueAnswer?.toFixed(2)} %`}
		</div>
	)
}

export default Result
