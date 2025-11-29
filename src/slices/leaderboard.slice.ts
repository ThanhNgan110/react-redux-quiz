import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IMember {
  firstName: string,
  lastName: string,
  email: string,
  score: number
}

export interface LeaderboardState {
  members: IMember[]
}

const initialState: LeaderboardState = {
  members: []
}

const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState,
  reducers: {
    updateMember: (state, action: PayloadAction<IMember>) => {
      state.members.push(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateMember } = leaderboardSlice.actions

export default leaderboardSlice.reducer