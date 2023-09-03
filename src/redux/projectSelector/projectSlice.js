import { createSlice } from "@reduxjs/toolkit";

export const projectSlice = createSlice({
  name: "projectSlice",
  initialState: {
    projects: {
      all: [],
      selected: {},
    },
  },
  reducers: {
    addProjects(state, action) {
      state.projects.all = [...action.payload];
    },
    selectProject(state, action) {
      state.projects.selected = action.payload;
    },
  },
});

export const { addProjects, selectProject } = projectSlice.actions;

export default projectSlice.reducer;
