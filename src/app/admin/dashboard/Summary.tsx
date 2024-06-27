"use client"

import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import BarGraph from './BarGraph'; // Import the BarGraph component

interface SummaryProps {
    doctors: Doctor[];
    patients: Patient[];
}

type Doctor = {
    name: string;
    status: string;
}

type Patient = {
    name: string;
    status: string;
}

type SummaryDataType = {
    [key: string]: {
        label: string;
        digit: number;
    }
}

const Summary: React.FC<SummaryProps> = ({ doctors, patients }) => {
    const router = useRouter();
    const [summaryData, setSummaryData] = useState<SummaryDataType>({
        doctors: {
            label: 'Total Doctors',
            digit: 0
        },
        patients: {
            label: 'Total Patients',
            digit: 0
        }
    });

    useEffect(() => {
        setSummaryData({
            doctors: {
                label: 'Total Doctors',
                digit: doctors.length
            },
            patients: {
                label: 'Total Patients',
                digit: patients.length
            }
        });
    }, [doctors, patients]);

    // Prepare data for BarGraph
    const graphData = [
        {
            day: "Doctors",
            date: "",
            totalAmount: summaryData.doctors.digit
        },
        {
            day: "Patients",
            date: "",
            totalAmount: summaryData.patients.digit
        }
    ];

    const handleDoctorsClick = () => {
        router.push('/admin/dashboard/all_doctors');
    };
    const handlePatientClick = () => {
        router.push('/admin/dashboard/all_patient');
    };

    return (
        <div className="max-w-[1150px] m-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-50vh overflow-y-auto">
                <div
                    className="rounded-xl border-2 p-4 flex flex-col items-center gap-2 transition cursor-pointer hover:bg-gray-100"
                    onClick={handleDoctorsClick}
                >
                    <div className="text-xl md:text-4xl font-bold">
                        {summaryData.doctors.digit}
                    </div>
                    <div className="text-center">
                        {summaryData.doctors.label}
                    </div>
                </div>
                <div onClick={handlePatientClick} className="rounded-xl border-2 p-4 flex flex-col items-center gap-2 transition cursor-pointer hover:bg-gray-100">
                    <div className="text-xl md:text-4xl font-bold">
                        {summaryData.patients.digit}
                    </div>
                    <div className="text-center">
                        {summaryData.patients.label}
                    </div>
                </div>
            </div>

            {/* Bar Graph Integration */}
            <div className="mt-8">
                <BarGraph data={graphData} />
            </div>
        </div>
    );
}

export default Summary;
