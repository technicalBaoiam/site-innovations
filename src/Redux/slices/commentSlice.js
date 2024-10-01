import { createSlice } from "@reduxjs/toolkit";
// local
const initialState = {
    comment :[]
}

const commentSlice = createSlice({
    name:"comment",
    initialState,
    reducers:{
        setComment : (state,action)=>{
            state.comment = action.payload
        }
    }
})

export const {setComment} = commentSlice.actions
export default commentSlice.reducer;
