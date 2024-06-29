"use client"

import { useRouter } from 'next/navigation';
import BarGraph from './BarGraph';

interface SummaryProps {
  totalDoctors: number;
  totalPatients: number;
  totalAppointments: number;
}

const Summary: React.FC<SummaryProps> = ({ totalDoctors, totalPatients, totalAppointments }) => {
  const router = useRouter();

  const graphData = [
    {
      day: "Doctors",
      date: "",
      totalAmount: totalDoctors
    },
    {
      day: "Patients",
      date: "",
      totalAmount: totalPatients
    },
    {
      day: "Appointments",
      date: "",
      totalAmount: totalAppointments
    }
  ];

  const handleDoctorsClick = () => {
    router.push('/admin/dashboard/all_doctors');
  };

  const handlePatientsClick = () => {
    router.push('/admin/dashboard/all_patient');
  };

  return (
    <div className="max-w-[1150px] m-auto">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-h-50vh overflow-y-auto">
        <div
          className="rounded-xl border-2 p-4 flex flex-col items-center gap-2 transition cursor-pointer hover:bg-gray-100"
          onClick={handleDoctorsClick}
        >
          <div className="text-xl md:text-4xl font-bold">
            {totalDoctors}
          </div>
          <div className="text-center">
            Total Doctors
          </div>
        </div>
        <div
          className="rounded-xl border-2 p-4 flex flex-col items-center gap-2 transition cursor-pointer hover:bg-gray-100"
          onClick={handlePatientsClick}
        >
          <div className="text-xl md:text-4xl font-bold">
            {totalPatients}
          </div>
          <div className="text-center">
            Total Patients
          </div>
        </div>
        <div className="rounded-xl border-2 p-4 flex flex-col items-center gap-2 transition cursor-pointer hover:bg-gray-100">
          <div className="text-xl md:text-4xl font-bold">
            {totalAppointments}
          </div>
          <div className="text-center">
            Total Appointments
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
