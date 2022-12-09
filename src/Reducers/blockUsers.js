import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

export const fetchBlockedUsers = createAsyncThunk(
  "blockedUsers/fetchBlockedUsers",
  async (_, { getState }) => {
    try {
      const getToken = getState();

      let { data } = await Axios.get(
        "http://ec2-18-117-195-171.us-east-2.compute.amazonaws.com:3000/admin/api/get_blocked_users",
        {
          headers: { Authorization: `${getToken.authData.userInfo.data}` },
        }
      );
      let userArray = Array.from(data.data);
      //sort data alphabatically start
      let newData = [...userArray];
      let alphabaticallySorted = newData.sort(function (a, b) {
        let nA = a.username.toLowerCase();
        let nB = b.username.toLowerCase();

        if (nA < nB) return -1;
        else if (nA > nB) return 1;
        return 0;
      });
      //sort data alphabatically end
      localStorage.setItem(
        "blockedUsers",
        JSON.stringify(alphabaticallySorted)
      );

      return alphabaticallySorted;
    } catch (error) {
      console.log(error.response.data);
    }
  }
);
export const blockFromAllBlockPage = createAsyncThunk(
  "blockerUser/blockUnBlockStatusFromBlock",
  async (dataBlock, { getState }) => {
    try {
      const getToken = getState();
      const { user_id, status, blocked_for, page, blocked_reason } = dataBlock;
      const { data } = await Axios.post(
        "http://ec2-18-117-195-171.us-east-2.compute.amazonaws.com:3000/admin/api/blockUser",
        { user_id, blocked_for, blocked_reason },
        {
          headers: { Authorization: `${getToken.authData.userInfo.data}` },
        }
      );
      if (data.code == 200) {
        if (page == "BLOCK_PAGE") {
          return { user_id, status };
        }
      }
    } catch (error) {
      console.log(error.response.data);
    }
  }
);

const initialState = {
  blockedUsers: localStorage.getItem("blockedUsers")
    ? JSON.parse(localStorage.getItem("blockedUsers"))
    : [],
  blockError: "",
};

const fetchBlockedUsersReducer = createSlice({
  name: "BlockedUsers",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchBlockedUsers.fulfilled, (state, action) => {
      state.blockedUsers = action.payload;
    });
    builder.addCase(fetchBlockedUsers.rejected, (state, action) => {
      state.blockError = "All Blocked Users Data are not coming";
    });
    builder.addCase(blockFromAllBlockPage.fulfilled, (state, action) => {
      let newArray = state.blockedUsers.filter(
        (data) => data.user_id !== action.payload.user_id
      );
      state.blockedUsers = newArray;
      localStorage.setItem("blockedUsers", JSON.stringify(state.blockedUsers));
    });
    builder.addCase(blockFromAllBlockPage.rejected, (state, action) => {
      state.blockError = "Block Api in blocked is not working";
    });
  },
});

export default fetchBlockedUsersReducer.reducer;
