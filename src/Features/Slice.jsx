
import { createSlice } from "@reduxjs/toolkit";

const MySlice = createSlice({
  name: "user",
  initialState: {
    userInfo: null,
    userToken: null,

     lecturerInfo: null,
    lecturerToken: null,

    studentInfo:null,
    studentToken:null,
  },
  reducers: {
    userLogin: (state, { payload }) => {
      state.userInfo = payload.userInfo;
      state.userToken = payload.userToken;
    },
    userLogout: (state) => {
      state.userInfo = null;
      state.userToken = null;
    },
    updateuserInfo: (state, { payload }) => {
      if (state.userInfo) {
        state.userInfo = { ...state.userInfo, ...payload };
      }
    },
lecturerLogin: (state, { payload }) => {
  state.lecturerInfo = payload.lecturerInfo;
  state.lecturerToken = payload.lecturerToken;
},
lecturerLogout: (state) => {
  state.lecturerInfo = null;
  state.lecturerToken = null;
},
updateLecturerInfo: (state, { payload }) => {
  if (state.lecturerInfo) {
    state.lecturerInfo = { ...state.lecturerInfo, ...payload };
  }
},




    studentLogin: (state, { payload }) => {
      state.studentInfo = payload.studentInfo;
      state.studentToken = payload.studentToken;
    },
    studentLogout: (state) => {
      state.studentInfo = null;
      state.studentToken = null;
    },

  },
});

export const { userLogin, userLogout, updateuserInfo , studentLogin, studentLogout, lecturerLogin, lecturerLogout, updateLecturerInfo} = MySlice.actions;
export default MySlice.reducer;

