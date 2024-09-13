import { getCookie } from "cookies-next";

const { createSlice } = require("@reduxjs/toolkit");

const getInfo = () => {
    if (getCookie("token")) {
        return true;
    } else {
        return false;
    }
};

const AuthCheckerSlice = createSlice({
    name: "AuthChecker",
    initialState: {
        user: getInfo(),
    },
    reducers: {},
});

// export const {} = AuthCheckerSlice.actions;

export default AuthCheckerSlice.reducer;
