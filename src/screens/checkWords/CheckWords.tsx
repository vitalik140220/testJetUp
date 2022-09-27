import { FC } from "react"
import useCheckWords from "./checkWords.hook"
import "./style.css"

const CheckWords: FC = () => {
	const {
		isCheck,
		hanldeCheckClick,
		currentWord,
		variantsWords,
		handleVariantClick
	} = useCheckWords()
	return (
		<div className='checkWords'>
			{isCheck ? (
				<div className='checkCard'>
					<div className='word'>{currentWord}</div>
					<div className='variants'>
						{variantsWords.map((word, id) => (
							<div className='variant' key={id} onClick={handleVariantClick}>
								{word}
							</div>
						))}
					</div>
				</div>
			) : (
				<button onClick={hanldeCheckClick}>Start check</button>
			)}
		</div>
	)
}

export default CheckWords
