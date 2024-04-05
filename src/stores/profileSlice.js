export const profileSlice = (set) => ({
    profileData: {
        userName: "",
        role: "",
        auth: false,
        token: ""
    },
    authUser: (payload) => set((state) => ({
        profileData: {
            // por si hay actualizaciones a futuro
            ...state.profileData,
            userName: payload.userName ?? state.profileData.userName,
            role: payload.role ?? state.profileData.role,
            auth: true,
            token: payload.token ?? state.profileData.token,
        }
    })),
    logOut: () => set(() => ({
        profileData: {
            userName: "",
            role: "",
            auth: false,
            token: ""
        }    
    })),
})