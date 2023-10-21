import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//import instance, { API_URL } from "../../api/index";

const initialState = {
  status: null,
  isAuth: false,
  role: "DOCTOR",
  name: "",
  surname: "",
  id: "",
};

/*export const loginUser = createAsyncThunk("authDoctorSlice/loginDoctor", async (params, { rejectWithValue }) => {
  try {
    const response = await instance.post("login/", {
      email: params.email,
      password: params.password,
    });
    //if (response.data.userData.isActivated) {
      if (params.remember_me === "remember_me") {
        localStorage.setItem("token", response.data.accessToken);
      }
      return response.data;
    /* } else {
      errorProcessing.message = `Необходимо активировать аккаунт ${params.email}`;
      return rejectWithValue(errorProcessing);
    }
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const registrationUser = createAsyncThunk("authUserSlice/registrationUser", async (params, { rejectWithValue }) => {
  try {
    const response = await instance.post("registration/", {
      email: params.email,
      password: params.password,
      userName: params.userName,
    });
    return response.data.message;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const logoutUser = createAsyncThunk("authUserSlice/logoutUser", async (_, { rejectWithValue }) => {
  try {
    await instance.post("logout/");
    localStorage.removeItem("token");
  } catch {
    return rejectWithValue("Не удалось выполнить разлогирование!");
  }
});

export const checkUser = createAsyncThunk("authUserSlice/checkUser", async (_, { rejectWithValue }) => {
  try {
   /* const response = await axios.get(`${API_URL}/refresh`, {
      withCredentials: true, 
    });
    localStorage.setItem("token", response.data.accessToken);
    return response.data;
  } catch (err) {
    localStorage.removeItem("token");
    return rejectWithValue(err.response.data.message);
  }
});*/

const authDoctor = createSlice({
  name: "authDoctorSlice",
  initialState,
  reducers: {
    setAuth(state, action) {
      state.isAuth = true;
      state.name = action.payload.name;
      state.surname = action.payload.surname;
      state.id = action.payload.id;
      if (action.payload.role.find((el) => el.id === 1)) {
        state.role = "ADMIN";
      }
    },
  },
  /*extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.message = null;
        state.status = "loading";
        state.errorProcessing = {
          message: null,
          errors: null,
        };
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "resolved";
        state.isAuth = true;
        state.userData = action.payload.userData;
        state.imgUser = action.payload.imgUser;
        state.userEvents = action.payload.userEvents;
        state.userImgEvents = action.payload.userImgEvents;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "rejected";
        state.isAuth = false;
        state.errorProcessing = action.payload;
      })
      .addCase(registrationUser.pending, (state) => {
        state.message = null;
        state.status = "loading";
        state.errorProcessing = {
          message: null,
          errors: null,
        };
      })
      .addCase(registrationUser.fulfilled, (state, action) => {
        state.status = "resolved";
        state.message = action.payload;
        state.isRegistration = !state.isRegistration;
      })
      .addCase(registrationUser.rejected, (state, action) => {
        state.status = "rejected";
        state.isAuth = false;
        state.errorProcessing = action.payload;
      })
      .addCase(logoutUser.pending, (state) => {
        state.message = null;
        state.status = "loading";
        state.errorProcessing = {
          message: null,
          errors: null,
        };
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.status = "resolved";
        state.isAuth = false;
        state.userData = null;
        state.imgUser = null;
        state.userEvents = null;
        state.userImgEvents = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.status = "rejected";
        state.isAuth = false;
        state.errorProcessing = {
          message: action.payload,
          errors: null,
        };
      })
      .addCase(checkUser.pending, (state) => {
        state.message = null;
        state.status = "loading";
        state.errorProcessing = {
          message: null,
          errors: null,
        };
      })
      .addCase(checkUser.fulfilled, (state, action) => {
        state.status = "resolved";
        state.isAuth = true;
        state.userData = action.payload.userData;
        state.imgUser = action.payload.imgUser;
        state.userEvents = action.payload.userEvents;
        state.userImgEvents = action.payload.userImgEvents;
      })
      .addCase(checkUser.rejected, (state, action) => {
        state.status = "rejected";
        state.isAuth = false;
        state.userData = null;
        state.imgUser = null;
        state.userEvents = null;
        state.userImgEvents = null;
        state.errorProcessing = {
          message: action.payload,
          errors: null,
        };
      });
  },*/
});

export const { setAuth } = authDoctor.actions;
export default authDoctor.reducer;
