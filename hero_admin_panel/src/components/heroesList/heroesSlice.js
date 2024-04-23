import {createSlice } from "@reduxjs/toolkit";
import { heroesFetching } from "../../actions";

const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle'
}

const heroesSlice = createSlice({
    name: 'heroes',
    initialState,
    redusers: {
        heroesFetching:  state => {state.heroesLoadingStatus = 'loading'},
    }}
);



