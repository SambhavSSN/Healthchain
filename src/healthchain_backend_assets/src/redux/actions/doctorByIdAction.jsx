import { healthchain_backend } from "../../../../declarations/healthchain_backend";


export const loadDoctorById = (id) => async (dispatch) => {

    const filtered_doctor = await healthchain_backend.getDoctorById(id);

    if (filtered_doctor.length < 1) {
        dispatch({
            type: "get_doctor_by_id",
            payload: {},
        });
    } else {
        dispatch({
            type: "get_doctor_by_id",
            payload: filtered_doctor[0],
        });
    }
    
    
}