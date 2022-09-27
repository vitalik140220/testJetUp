import { useState, MouseEvent, useEffect } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { useAppSelector, useAppDispatch } from "../../hooks/redux"
import {
	changeCurrentWord,
	changeResult,
	changeTrueAnswer,
	changeVariantsWords
} from "../../redux/slices/wordSlice"

const useCheckWords = () => {
	const [isCheck, setIsCheck] = useState(false)
	const dispatch = useAppDispatch()
	const { words, currentWord, wordsCompleted, variantsWords, result } =
		useAppSelector((state) => state.words)

	const s = useNavigate()

	const getRandomWord = (): any => {
		const randomIndex = Math.floor(Math.random() * words.length)
		if (words.length === 0) {
			return null
		} else if (
			words[randomIndex].original === currentWord &&
			wordsCompleted.includes(words[randomIndex].original) &&
			words.length === wordsCompleted.length
		) {
			return null
		} else if (wordsCompleted.includes(words[randomIndex].original)) {
			return getRandomWord()
		} else {
			dispatch(changeCurrentWord(words[randomIndex].original))
		}
	}

	const getRandomVariant = () => {
		const variants: string[] = []
		const indexWord = words.findIndex((word) => word.original === currentWord)
		const getRandom = () => {
			const randomIndex = Math.floor(Math.random() * words.length)
			if (!variants.includes(words[indexWord].translate)) {
				variants.push(words[indexWord].translate)
			} else if (variants.includes(words[randomIndex].translate)) {
				getRandom()
			} else {
				variants.push(words[randomIndex].translate)
			}
		}
		for (let i = 0; i < words.length; i++) {
			if (i === 4 || indexWord === -1) {
				break
			}
			console.log(i)
			if (words.length === 1) {
				return
			} else {
				getRandom()
			}
		}

		dispatch(changeVariantsWords(variants.sort(() => Math.random() - 0.5)))
	}

	useEffect(() => {
		getRandomVariant()
	}, [currentWord])

	const hanldeCheckClick = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
		getRandomWord()
		setIsCheck(true)
	}
	useEffect(() => {
		if (result.length === words.length && result.length !== 0) {
			const trueAnswer = result.reduce((prev, acc) => {
				if (acc) {
					return prev + 1
				}
				return prev
			}, 0)
			dispatch(changeTrueAnswer((trueAnswer * 100) / result.length))
			s("/result")
			dispatch(changeResult(null))
		} else if (result.length === 10) {
			const trueAnswer = result.reduce((prev, acc) => {
				if (acc) {
					return prev + 1
				}
				return prev
			}, 0)
			dispatch(changeTrueAnswer((trueAnswer * 100) / result.length))
			s("/result")
			dispatch(changeResult(null))
		}
	}, [result])

	const handleVariantClick = (event: MouseEvent<HTMLDivElement>) => {
		event.preventDefault()

		if (getRandomWord() === null) {
			dispatch(
				changeResult(
					words[words.findIndex((word) => word.original === currentWord)]
						.translate === event.currentTarget.textContent
				)
			)
		} else {
			dispatch(
				changeResult(
					words[words.findIndex((word) => word.original === currentWord)]
						.translate === event.currentTarget.textContent
				)
			)
		}
	}

	return {
		isCheck,
		hanldeCheckClick,
		currentWord,
		variantsWords,
		handleVariantClick
	}
}

export default useCheckWords
