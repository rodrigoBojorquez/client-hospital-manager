export const authSlice = (set) => ({
    doctorData: {
        userName: "",
        lastName: "",
        email: "",
        password: "",
        speciality: "",
        startWork: "",
        finishWork: "",
        workDays: [],
        contactNumber: "",
        licenceNumber: "",
        clinic: {
            name: "",
            address: "",
            city: ""
        }
    },
    patientData: {
        userName: "",
        lastName: "",
        email: "",
        password: "",
        contactNumber: "",
        address: "",
        dateOfBirth: "",
        emergencyContact: ""
    },

    setDoctorData: (payload) => set((state) => ({
        doctorData: {
            ...state.doctorData,
            userName: payload.userName ?? state.doctorData.userName,
            lastName: payload.lastName ?? state.doctorData.lastName,
            email: payload.email ?? state.doctorData.email,
            password: payload.password ?? state.doctorData.password,
            speciality: payload.speciality ?? state.doctorData.speciality,
            startWork: payload.startWork ?? state.doctorData.startWork,
            finishWork: payload.finishWork ?? state.doctorData.finishWork,
            workDays: payload.workDays ?? state.doctorData.workDays,
            contactNumber: payload.contactNumber ?? state.doctorData.contactNumber,
            licenceNumber: payload.licenceNumber ?? state.doctorData.licenceNumber,
            clinic: {
              name: payload.clinic?.name ?? state.doctorData.clinic.name,
              address: payload.clinic?.address ?? state.doctorData.clinic.address,
              city: payload.clinic?.city ?? state.doctorData.clinic.city,
            },
        }
    })),

    setPatientData: (payload) => set((state) => ({
        patientData: {
            ...state.patientData,
            userName: payload.userName ?? state.patientData.userName,
            lastName: payload.lastName ?? state.patientData.lastName,
            email: payload.email ?? state.patientData.email,
            password: payload.password ?? state.patientData.password,
            contactNumber: payload.contactNumber ?? state.patientData.contactNumber,
            address: payload.address ?? state.patientData.address,
            dateOfBirth: payload.dateOfBirth ?? state.patientData.dateOfBirth,
            emergencyContact: payload.emergencyContact ?? state.patientData.emergencyContact,
        }
    })),
})