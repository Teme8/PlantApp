import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Plant {
  id: number;
  plantName: string;
  plantNotes: string;
  image: string;
  date: string;
}

interface PlantState {
  value: Plant[];
}

const initialState: PlantState = {
  value: [],
};

const plantSlice = createSlice({
  name: "plant",
  initialState,
  reducers: {
    addPlant: (state, action) => {
      state.value.push(action.payload);
    },
    editPlant: (state, action) => {
      state.value[action.payload.id].image = action.payload.image;
      state.value[action.payload.id].plantName = action.payload.plantName;
      state.value[action.payload.id].plantNotes = action.payload.plantNotes;
    }
  },
});

export const { addPlant, editPlant } = plantSlice.actions;
export default plantSlice.reducer;