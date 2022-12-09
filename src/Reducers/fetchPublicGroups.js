import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

export const fetchPublicGroups = createAsyncThunk(
  "publicGroups/fetchPublicGroups",
  async (_, { getState }) => {
    try {
      const getToken = getState();
      let { data } = await Axios.get(
        "http://ec2-18-117-195-171.us-east-2.compute.amazonaws.com:3000/admin/api/allGroups",
        {
          headers: { Authorization: `${getToken.authData.userInfo.data}` },
        }
      );
      let userArray = Array.from(data.data);
      //sort data alphabatically start
      let newData = [...userArray];
      let alphabaticallySorted = newData.sort(function (a, b) {
        let nA = a.group_name.toLowerCase();
        let nB = b.group_name.toLowerCase();

        if (nA < nB) return -1;
        else if (nA > nB) return 1;
        return 0;
      });
      //sort data alphabatically end
      localStorage.setItem(
        "publicGroups",
        JSON.stringify(alphabaticallySorted)
      );
      return alphabaticallySorted;
    } catch (error) {
      console.log(error.response.data);
    }
  }
);

const initialState = {
  publicGroups: localStorage.getItem("publicGroups")
    ? JSON.parse(localStorage.getItem("publicGroups"))
    : [],
  error: "",
};

const fetchPublicGroupReducer = createSlice({
  name: "fetchPublicGroups",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchPublicGroups.fulfilled, (state, action) => {
      state.publicGroups = action.payload;
    });
    builder.addCase(fetchPublicGroups.rejected, (state, action) => {
      state.error = "All Public Groups are not coming";
    });
  },
});

export default fetchPublicGroupReducer.reducer;
