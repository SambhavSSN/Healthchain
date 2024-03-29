import { healthchain_backend } from "../../../../declarations/healthchain_backend";


export const loadPatientById = (id,authCannister) => async (dispatch) => {
    // const filtered_patient = patientList.filter((patient) => {
    //     if (patient.patient_id == id) {
    //         return patient;
    //     }
     
    // })

    if (authCannister) {

        let filtered_patient = await authCannister.getPatientById(id);

        filtered_patient = filtered_patient[0];

        console.log(filtered_patient)
    
        dispatch({
            type: "get_patient_by_id",
            payload: filtered_patient,
        });
    }
}