import { FC } from "react"
import useAddWord from "./addWord.hook"
import "./style.css"
const AddWord: FC = () => {
	const {
		handleOriginalChange,
		handleTranslateChange,
		original,
		translate,
		handleSubmit
	} = useAddWord()

	return (
		<div className='addWord'>
			<div className='title'>Add Word</div>
			<form>
				<label>Original</label>
				<input value={original} onChange={handleOriginalChange} />
				<label>Translate</label>
				<input value={translate} onChange={handleTranslateChange} />
				<button onClick={handleSubmit}>Add</button>
			</form>
		</div>
	)
}

export default AddWord
