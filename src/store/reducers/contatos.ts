import { createSlice, PayloadAction } from '@reduxjs/toolkit';



const contatosSlice = createSlice({
    name: 'contatos',
    initialState: [  ],
    reducers: {
        remover: (state, action: PayloadAction<number>) => {
            state = state.filter((contato) => contato.id !== action.payload);
        } 
    }
})