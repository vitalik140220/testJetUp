import { ChangeEvent, useState } from "react"
import { useAppDispatch } from "../../hooks/redux"
import { addWord } from "../../redux/slices/wordSlice"

const useAddWord = () => {
	const [original, setOriginal] = useState<string>("")
	const [translate, setTranslate] = useState<string>("")

	const dispatch = useAppDispatch()

	const handleOriginalChange = (event: ChangeEvent<HTMLInputElement>) => {
		setOriginal(event.target.value)
	}
	const handleTranslateChange = (event: ChangeEvent<HTMLInputElement>) => {
		setTranslate(event.target.value)
	}

	const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
		dispatch(addWord({ original, translate }))
		setOriginal("")
		setTranslate("")
	}

	return {
		handleOriginalChange,
		handleTranslateChange,
		original,
		translate,
		handleSubmit
	}
}

export default useAddWord
