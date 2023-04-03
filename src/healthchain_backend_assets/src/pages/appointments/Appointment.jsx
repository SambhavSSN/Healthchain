import React, { useState } from "react";
import "./Appointment.scss";
import AppointmentCard from "./AppointmentCard";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

import * as Redux from "react-redux";
import { loadDepartmentList } from "../../redux/actions/departmentAction";
import { loadDoctorAppointmentOpenHours } from "../../redux/actions/doctorAppointmentOpenHourAction";
import { loadDoctorList } from "../../redux/actions/doctorAction";


// const doctors = [
//     {
//         id: 1,
//         name: "Sambhav",
//         department: "Cardiology",
//         cabinNumber: "101",
//         availableSlots: [
//             "9:00 AM",
//             "10:00 AM",
//             "11:00 AM",
//             "2:00 PM",
//             "3:00 PM",
//             "4:00 PM"
//         ]
//     },
//     {
//         id: 2,
//         name: "Samyak",
//         department: "Dermatology",
//         cabinNumber: "102",
//         availableSlots: [
//             "10:00 AM",
//             "11:00 AM",
//             "12:00 PM",
//             "3:00 PM",
//             "4:00 PM",
//             "5:00 PM"
//         ]
//     },
//     {
//         id: 3,
//         name: "Manan",
//         department: "Pediatrics",
//         cabinNumber: "103",
//         availableSlots: ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"]
//     },
//     {
//         id: 4,
//         name: "Dhanunjay",
//         department: "Gynecology",
//         cabinNumber: "104",
//         availableSlots: ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM"]
//     },
//     {
//         id: 5,
//         name: "Akshay",
//         department: "Orthopaedics",
//         cabinNumber: "105",
//         availableSlots: ["2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"]
//     }
// ];

const Appointment = () => {
    const [chosenDepartment, setChosenDepartment] = useState("All Departments");

    const [doctorApptOpenHoursList, setDoctorApptOpenHoursList] = useState([]);


    const dispatch = Redux.useDispatch();


    const { doctors } = Redux.useSelector(state => state.doctorList);

    const { departments } = Redux.useSelector(state => state.departmentList);

    const { openHours } = Redux.useSelector(state => state.openHours);


    React.useEffect(() => {
        dispatch(loadDepartmentList());
    }, [])

    React.useEffect(() => {
        dispatch(loadDoctorAppointmentOpenHours());
    }, [dispatch])

    React.useEffect(() => {
        dispatch(loadDoctorList())
    }, [dispatch])

    React.useEffect(() => {
        for (let i = 0; i < openHours.length; i++) {
            const doc_details = {};
            doc_details.doctor_id = openHours[i].doctor_id;
            doc_details.openHoursDates = openHours[i].openHoursDates;
            doc_details.openHoursTime = openHours[i].openHoursTime;

            doctors.find((doc, index, arr) => {
                if (doc.doctor_id === openHours[i].doctor_id) {
                    doc_details.name = doc.name;
                    doc_details.department = doc.department;
                }
            })

            if (doc_details.name !== undefined) {
                setDoctorApptOpenHoursList((oldList) => {
                    oldList.push(doc_details);
                    const uniqueArr = [];
                    oldList.forEach(obj => {
                        if (!uniqueArr.some(item => JSON.stringify(item) === JSON.stringify(obj))) {
                            uniqueArr.push(obj);
                        }
                    });
                    return uniqueArr;
                })
            }
        }
    }, [openHours, doctors])



    const deptChangeKoHandle = (event) => {
        setChosenDepartment(event.target.value);
    };

    const filteredDoctors =
        chosenDepartment === "All Departments"
            ? doctorApptOpenHoursList
            : doctorApptOpenHoursList.filter((doctor) => doctor.department === chosenDepartment);

    return (
        <div className="appointy">
            <Sidebar />
            <div className="ekAurClass">
                <Navbar />
                <div className="deptContainer">

                    <div className="deptHeader">
                        <label htmlFor="deptChoose">Select department:</label>
                        <select
                            id="deptChoose"
                            value={chosenDepartment}
                            onChange={deptChangeKoHandle}
                        >

                            <option key={"All Departments"} value={"All Departments"}>
                                All Departments
                            </option>
                            {departments.map((department) => (
                                <option key={department} value={department}>
                                    {department}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="cardWalaComp">
                        {filteredDoctors.map((d) => (
                            <AppointmentCard
                                key={d.doctor_id}
                                doctor_id={d.doctor_id}
                                name={d.name}
                                department={d.department}
                                openHoursDates={d.openHoursDates}
                                openHoursTime={d.openHoursTime}
                            />
                        ))}
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Appointment;