import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../redux/store";
import { TaskState } from "../../interfaces/TaskState";

// export interface TaskState {
//   id: number;
//   name: string;
//   description: string;
//   date: Date;
//   important: boolean;
// }

const initialState: TaskState = {
  id: 1,
  name: "Add redux",
  description: "Add redux to this project",
  date: "2000-01-01",
  important: true,
};

export const taskSlice = createSlice({
  name: "counter",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addTask: (state, action: PayloadAction<TaskState>) => {
      state.id += 1;
      state.name = action.payload.name;
      state.description = action.payload.description;
      state.important = action.payload.important;
      state.date = action.payload.date;
    },
  },
});

export const { addTask } = taskSlice.actions;

//export const selectCount = (state: RootState) => state.counter.value;

export default taskSlice.reducer;
