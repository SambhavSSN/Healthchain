import type { Principal } from '@dfinity/principal';
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
  'blood_pressure' : bigint,
  'temperature' : number,
  'spo2' : bigint,
  'pulse_rate' : number,
  'time_stamp' : Time,
}
export interface Notice {
  'notice' : string,
  'from' : string,
  'time_stamp' : Time,
}
export interface Patient {
  'age' : bigint,
  'weight' : number,
  'height' : number,
  'patient_id' : string,
  'logs' : Array<MedicalLog>,
  'name' : string,
  'email' : string,
  'blood_group' : string,
  'address' : string,
  'gender' : string,
  'phone_number' : string,
  'registered_on' : Time,
}
export type Time = bigint;
export interface _SERVICE {
  'createEmployee' : (
      arg_0: string,
      arg_1: string,
      arg_2: string,
      arg_3: string,
      arg_4: string,
      arg_5: bigint,
      arg_6: string,
    ) => Promise<undefined>,
  'createNotice' : (arg_0: string, arg_1: string) => Promise<undefined>,
  'createPatient' : (
      arg_0: string,
      arg_1: string,
      arg_2: string,
      arg_3: string,
      arg_4: bigint,
      arg_5: string,
      arg_6: string,
      arg_7: number,
      arg_8: number,
      arg_9: string,
      arg_10: Array<MedicalLog>,
    ) => Promise<undefined>,
  'deleteEmployee' : (arg_0: string) => Promise<undefined>,
  'readEmployees' : () => Promise<Array<Employee>>,
  'readNotices' : () => Promise<Array<Notice>>,
  'readPatients' : () => Promise<Array<Patient>>,
  'updateEmployee' : (
      arg_0: string,
      arg_1: string,
      arg_2: string,
      arg_3: string,
      arg_4: string,
      arg_5: bigint,
      arg_6: string,
    ) => Promise<undefined>,
}
