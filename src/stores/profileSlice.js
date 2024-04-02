export const profileSlice = (set) => ({
    profileData: {
        userName: "",
        role: "",
        auth: false
    },
    authUser: (payload) => set((state) => ({
        profileData: {
            // por si hay actualizaciones a futuro
            ...profileData,
            userName: payload.userName ?? "",
            role: payload.role ?? "patient",
            auth: true
        }
    })),
    logOut: () => set(() => ({
        profileData: {
            userName: "",
            role: "",
            auth: false  
        }    
    })),
})