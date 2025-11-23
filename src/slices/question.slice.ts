import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface FormState {
  category: number | null,
  type: string,
  difficulty: string,
  amount: number  | null
}

export interface QuestionState {
  form: FormState,
  score: number
}

const initialState: QuestionState = {
  form: {
    category: null,
    type: '',
    difficulty: '',
    amount: null
  },
  score: 0 
}

export const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<number>) => {
      state.form.category = action.payload
    },
    setDifficulty: (state, action: PayloadAction<string>) => {
      state.form.difficulty = action.payload
    },
    setType: (state, action: PayloadAction<string>) => {
      state.form.type = action.payload
    },
    setAmount: (state, action: PayloadAction<number>) => {
      state.form.amount = action.payload
    },
    updateScore: (state) => {
      state.score = state.score + 1
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCategory, setDifficulty, setType, setAmount, updateScore } = questionSlice.actions

export default questionSlice.reducer