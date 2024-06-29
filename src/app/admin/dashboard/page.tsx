'use client'
import { Container } from "@organisms";
import Summary from "./Summary";
import { useEffect, useState } from "react";
import axios from "axios";
import { SERVER_BASE_URL } from "../../../../Config";

type SummaryDataType = {
  totalDoctors: number;
  totalPatients: number;
  totalAppointments: number; // corrected to match the response key
}

const Admin = () => {
  const [summaryData, setSummaryData] = useState<SummaryDataType | null>(null);

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
          <div>Loading...</div> // Loading state while data is being fetched
        )}
      </Container>
    </div>
  );
};

export default Admin;
