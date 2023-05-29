import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
});

export interface Book {
    id: number;
    title: string;
    body: string;
}

export interface BookState {
    books: Book[];
}

const initialState: BookState = {
    books: [],
};

export const bookSlice = createSlice({
    name: "books",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            fetchBooks.fulfilled,
            (state, action: PayloadAction<Book[]>) => {
                state.books = action.payload.slice(0, 10);
            }
        );
    },
});

export default bookSlice.reducer;
