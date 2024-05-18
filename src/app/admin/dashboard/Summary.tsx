"use client"

import { useEffect, useState } from "react";

interface SummaryProps {
    doctors: Doctor[];
    patients: Patient[];
    appointments: Appointment[];
}

type Doctor = {
    name: string;
    status: string;
}

type Patient = {
    name: string;
    status: string;
    Paid: string;
    fees: string;
}

type Appointment = {
    fees: number;
    status: string;
    time: string;
}

type SummaryDataType = {
    [key: string]: {
        label: string;
        digit: number;
    }
}

const Summary: React.FC<SummaryProps> = ({ doctors, patients, appointments }) => {
    const [summaryData, setSummaryData] = useState<SummaryDataType>({
        doctors: {
            label: 'Total Doctor',
            digit: 10
        },
        verifiedDoctors: {
            label: 'Total Verified Doctor',
            digit: 0
        },
        unVerifiedDoctors: {
            label: 'Total UnVerified Doctor',
            digit: 0
        },
        patients: {
            label: 'Total Patient',
            digit: 0
        },
        paidAppointment: {
            label: 'Paid Appointment',
            digit: 0
        },
        unpaidAppointment: {
            label: 'Unpaid/cancel Appointment',
            digit: 0
        },
    })

    useEffect(() => {
        setSummaryData((prev) => {
            let tempData = { ...prev }

            const paidAppointments = appointments.filter((appointment) => appointment.status === 'paid');
            const unPaidAppointments = appointments.filter((appointment) => appointment.status === 'unpaid' || appointment.status === 'cancelled');

            const verifiedDoctors = doctors.filter((doctor) => doctor.status === 'verified');
            const unVerifiedDoctors = doctors.filter((doctor) => doctor.status === 'unverified');

            tempData.doctors.digit = doctors.length;
            tempData.verifiedDoctors.digit = verifiedDoctors.length;
            tempData.unVerifiedDoctors.digit = unVerifiedDoctors.length;
            tempData.paidAppointment.digit = paidAppointments.length;
            tempData.unpaidAppointment.digit = unPaidAppointments.length;
            tempData.patients.digit = patients.length;

            return tempData
        })
    }, [doctors, appointments, patients])

    const summaryKeys = Object.keys(summaryData)

    return (
        <div className="max-w-[1150px] m-auto">
            <div className="grid grid-cols-2 gap-3 max-h-50vh overflow-y-auto">
                {
                    summaryKeys && summaryKeys.map((key) => (
                        <div key={key} className="rounded-xl border-2 p-4 flex flex-col items-center gap-2 transition">
                            <div className="text-xl md:text-4xl font-bold">
                                {summaryData[key].digit}
                            </div>
                            <div className="text-center">
                                {summaryData[key].label}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Summary;
