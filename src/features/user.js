import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from "axios";

const api=axios.create({
    baseURL:"http://localhost:3500"
});

export const fetchUsers=createAsyncThunk("/users",async()=>{
    try{
        const res= await api.get('/users');
        return res.data[0];
    }
    catch(err){
        return err;
    }
});

const userSlice=createSlice({
    name:"user",
    initialState:{value:{name:'',id:'',age:''},isLoading:false},
    reducers:{
        login:(state,action)=>{
            state.value=action.payload;
        },
        logout:(state)=>{
            state.value={name:'',password:''};
        }
    },
    extraReducers:{
        [fetchUsers.pending]:(state)=>{
            state.isLoading=true;
        },
        [fetchUsers.fulfilled]:(state,action)=>{
            state.isLoading=false;
            if((action.payload))
            state.value=action.payload;
            console.log(action.payload);
        }
    }
});

export const {login,logout}=userSlice.actions;

export default userSlice.reducer;