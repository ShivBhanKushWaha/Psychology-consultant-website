'use client'
import { Container } from "@organisms";
import Summary from "./Summary";
import { useEffect, useState } from "react";
import axios from "axios";
import { SERVER_BASE_URL } from "../../../../Config";
import { useAppContext } from "../../Context/context";
import { useRouter } from "next/navigation";

type SummaryDataType = {
  totalDoctors: number;
  totalPatients: number;
  totalAppointments: number; // corrected to match the response key
}

const Admin = () => {
  const router = useRouter()
  const [summaryData, setSummaryData] = useState<SummaryDataType | null>(null);
  const { resUserData, setResUserData, userType, setUserType } = useAppContext();


  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await axios.get(`${SERVER_BASE_URL}/dashboard`);
        setSummaryData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };
    fetchDashboardData();
  }, []);

  if (userType != 'admin') {
    return (
      <div className="flex items-center justify-center min-h-screen flex-col ">
        <p className="text-center text-2xl">You are not admin</p>
        <p className="text-center text-xl">Want to login</p>
        <button onClick={() => router.push('/admin/signin')} className="bg-[#6F42C1] rounded-full text-white w-60 px-6 py-2 mt-6">
        Click Here
        </button>
      </div>
    )
  }

  return (
    <div className="pt-8">
      <Container>
        {summaryData ? (
          <Summary
            totalDoctors={summaryData.totalDoctors}
            totalPatients={summaryData.totalPatients}
            totalAppointments={summaryData.totalAppointments}
          />
        ) : (
          <div className="flex justify-center items-center h-screen">
            <p>Loading...</p>
          </div>
        )
        }
      </Container>
    </div>
  );
};

export default Admin;
