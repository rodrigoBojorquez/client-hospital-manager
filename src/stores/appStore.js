import { create } from "zustand";

// SLICES
import { profileSlice } from "./profileSlice";
import { authSlice } from "./authSlice";

export const useAppStore = create((...a) => ({
    ...profileSlice(...a),
    ...authSlice(...a),
}))