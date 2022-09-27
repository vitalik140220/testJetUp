import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { stat } from "fs"
import { Word } from "../../models/Word"

interface WordState {
	words: Word[]
	currentWord: string
	wordsCompleted: string[]
	variantsWords: string[]
	result: boolean[]
	trueAnswer: number | null
}

const initialState: WordState = {
	words: [],
	currentWord: "",
	wordsCompleted: [],
	variantsWords: [],
	result: [],
	trueAnswer: null
}

const wordSlice = createSlice({
	name: "word",
	initialState,
	reducers: {
		addWord: (state, action: PayloadAction<Word>) => {
			state.words = [...state.words, action.payload]
		},
		changeCurrentWord: (state, action: PayloadAction<string>) => {
			state.currentWord = action.payload
			state.wordsCompleted = [...state.wordsCompleted, action.payload]
		},
		changeVariantsWords: (state, action: PayloadAction<string[]>) => {
			state.variantsWords = action.payload
		},
		changeResult: (state, action: PayloadAction<boolean | null>) => {
			if (action.payload === null) {
				state.result = []
			} else {
				state.result = [...state.result, action.payload]
			}
		},
		changeTrueAnswer: (state, action: PayloadAction<number>) => {
			state.trueAnswer = action.payload
			state.currentWord = ""
			state.variantsWords = []
			state.wordsCompleted = []
		}
	}
})

export const {
	addWord,
	changeCurrentWord,
	changeVariantsWords,
	changeResult,
	changeTrueAnswer
} = wordSlice.actions
export default wordSlice.reducer
