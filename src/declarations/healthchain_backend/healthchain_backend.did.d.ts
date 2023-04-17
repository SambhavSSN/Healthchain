import type { Principal } from '@dfinity/principal';
export interface Appointment {
  'patient_name' : string,
  'patient_id' : Principal,
  'appointment_id' : string,
  'time_slot' : string,
  'date' : string,
  'doctor_name' : string,
  'doctor_id' : Principal,
}
export interface DoctorMetaData {
  'designation' : string,
  'department' : string,
  'doctor_id' : Principal,
  'qualification' : string,
}
export interface DoctorOpenHours {
  'openHoursTime' : Array<Array<string>>,
  'openHoursDates' : Array<string>,
  'doctor_id' : Principal,
}
export interface Employee {
  'contact' : string,
  'salary' : bigint,
  'date_of_joining' : string,
  'email' : string,
  'first_name' : string,
  'last_name' : string,
  'employee_id' : string,
}
export interface MedicalLog {
  'weight' : number,
  'height' : number,
  'patient_id' : Principal,
  'blood_pressure' : bigint,
  'temperature' : number,
  'spo2' : bigint,
  'medications' : string,
  'blood_group' : string,
  'pulse_rate' : number,
  'doctor_name' : string,
  'additional_notes' : string,
  'doctor_id' : Principal,
  'time_stamp' : Time,
}
export interface Notice {
  'notice' : string,
  'from' : string,
  'time_stamp' : Time,
}
export interface Notification {
  'notification' : string,
  'time_stamp' : Time,
  'for_id' : Principal,
}
export interface ProfileData {
  'age' : string,
  'user_principal' : Principal,
  'user_type' : string,
  'contact' : string,
  'name' : string,
  'email' : string,
  'address' : string,
  'gender' : string,
  'image' : Array<number>,
  'registered_on' : Time,
}
export type Time = bigint;
export interface _SERVICE {
  'createAppointment' : (
      arg_0: string,
      arg_1: string,
      arg_2: string,
      arg_3: string,
      arg_4: string,
    ) => Promise<undefined>,
  'createAppointmentPatientSide' : (
      arg_0: string,
      arg_1: string,
      arg_2: string,
      arg_3: string,
    ) => Promise<undefined>,
  'createEmployee' : (
      arg_0: string,
      arg_1: string,
      arg_2: string,
      arg_3: string,
      arg_4: string,
      arg_5: bigint,
      arg_6: string,
    ) => Promise<undefined>,
  'createMedicalLog' : (
      arg_0: string,
      arg_1: number,
      arg_2: bigint,
      arg_3: bigint,
      arg_4: number,
      arg_5: string,
      arg_6: string,
      arg_7: string,
      arg_8: number,
      arg_9: number,
    ) => Promise<undefined>,
  'createNotice' : (arg_0: string, arg_1: string) => Promise<undefined>,
  'createNotification' : (arg_0: string, arg_1: string) => Promise<undefined>,
  'createOrUpdateDoctorMetaData' : (
      arg_0: Principal,
      arg_1: string,
      arg_2: string,
      arg_3: string,
    ) => Promise<undefined>,
  'createOrUpdateDoctorOpenHours' : (
      arg_0: Array<string>,
      arg_1: Array<Array<string>>,
    ) => Promise<undefined>,
  'createProfile' : (
      arg_0: string,
      arg_1: string,
      arg_2: string,
      arg_3: string,
      arg_4: string,
      arg_5: string,
      arg_6: Array<number>,
    ) => Promise<ProfileData>,
  'deleteEmployee' : (arg_0: string) => Promise<undefined>,
  'getDoctorById' : (arg_0: string) => Promise<[] | [ProfileData]>,
  'getDoctorMetaDataById' : (arg_0: string) => Promise<[] | [DoctorMetaData]>,
  'getPatientById' : (arg_0: string) => Promise<[] | [ProfileData]>,
  'getPatientMedicalLogsAccessList' : () => Promise<Array<Principal>>,
  'getTextTimeStampFromEpoch' : (arg_0: Time) => Promise<string>,
  'giveMedicalLogAccess' : (arg_0: Principal) => Promise<undefined>,
  'hasAccessToPatientMedicalLogs' : (arg_0: string) => Promise<boolean>,
  'readAllAppointments' : () => Promise<Array<Appointment>>,
  'readDepartments' : () => Promise<Array<string>>,
  'readDoctorAppointments' : () => Promise<Array<Appointment>>,
  'readDoctorMetaData' : () => Promise<Array<DoctorMetaData>>,
  'readDoctors' : () => Promise<Array<ProfileData>>,
  'readEmployees' : () => Promise<Array<Employee>>,
  'readMedicalLogs' : (arg_0: string) => Promise<Array<MedicalLog>>,
  'readNotices' : () => Promise<Array<Notice>>,
  'readNotifications' : () => Promise<Array<Notification>>,
  'readOpenHours' : () => Promise<Array<DoctorOpenHours>>,
  'readOpenHoursById' : (arg_0: string) => Promise<[] | [DoctorOpenHours]>,
  'readPatientAppointments' : () => Promise<Array<Appointment>>,
  'readPatients' : () => Promise<Array<ProfileData>>,
  'readProfileData' : () => Promise<[] | [ProfileData]>,
  'revokeMedicalLogAccess' : (arg_0: Principal) => Promise<undefined>,
  'updateEmployee' : (
      arg_0: string,
      arg_1: string,
      arg_2: string,
      arg_3: string,
      arg_4: string,
      arg_5: bigint,
      arg_6: string,
    ) => Promise<undefined>,
  'updateUserType' : (arg_0: Principal, arg_1: string) => Promise<undefined>,
}
