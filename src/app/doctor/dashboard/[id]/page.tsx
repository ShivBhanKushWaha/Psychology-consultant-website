'use client'
import axios from "axios";
import { useEffect, useState } from "react";
import { SERVER_BASE_URL } from "../../../../../Config";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Logo } from "@assests";
import toast from "react-hot-toast";
import { useAppContext } from "../../../Context/context";

interface DisplayPatient {
  id: string; // Add ID to reference the patient
  name: string;
  gender: string;
  age: number;
  phone: string;
  appointmentDate:string;
}

interface DisplayDoctor {
  name: string;
  doctorId:string;
  specialization: string;
  email: string;
  phone: string;
  experience: string;
}

interface PatientPageData {
  patient: DisplayPatient;
  doctor: DisplayDoctor;
}

const PatientPage = () => {
  const router = useRouter();
  const params = useParams();
  const { resUserData, setResUserData, userType, setUserType } = useAppContext();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const [loading, setLoading] = useState(true); // Initially loading is true
  const [details, setDetails] = useState<PatientPageData | null>(null); // Use the simplified interface
  const [error, setError] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const [prescription, setPrescription] = useState({
    treatment: '',
    medication: '',
    therapies: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${SERVER_BASE_URL}/patient/details/${id}`);
        // Extract the necessary fields from the response data
        const patientData: DisplayPatient = {
          id: response.data.id,
          name: response.data.familyMember,
          gender: response.data.gender,
          age: parseInt(response.data.age, 10),
          phone: response.data.contactNumber,
          appointmentDate: response.data.selectSlot
        };
        
        const doctorData: DisplayDoctor = {
          doctorId:response.data.doctorId,
          name: response.data.doctor.name,
          specialization: response.data.doctor.specialization,
          email: response.data.doctor.email,
          phone: response.data.doctor.phone,
          experience: response.data.doctor.experience
        };

        setDetails({ patient: patientData, doctor: doctorData });
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to load patient details');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleSavePrescription = async () => {
    if (!details) return toast.error('User not found');

    try {
      setLoading(true)
      const prescriptionData = {
        doctorId: details.doctor.doctorId, // Assuming you have doctorId in real data
        patientId: details.patient.id,
        treatment: prescription.treatment,
        medication: prescription.medication,
        therapies: prescription.therapies,
        userId:resUserData.id
      };

      console.log(prescriptionData);
      const response = await axios.post(`${SERVER_BASE_URL}/patient/treatment`, prescriptionData);
      if(response){
        toast.success('Successfully submitted')
      }
    } catch (error) {
      console.error('Error saving prescription:', error);
      setError('Failed to save prescription');
    }
    finally{
      setLoading(false)
    }
  };


  if (loading) {
    return (
        <div className="flex justify-center items-center h-screen">
            <p>Loading...</p>
        </div>
    );
}
if (error) {
    return (
        <div className="flex justify-center items-center h-screen">
            <p className="text-red-500 text-lg text-center">Error: {error}</p>
        </div>
    );
}

  if (!details) {
    return <p>Patient not found</p>;
  }

  return (
    <div className="px-2 bg-white rounded-lg shadow-[#6F42C1] shadow-2xl sm:py-8 sm:px-16 py-4">
      <h2 className="text-2xl text-center font-bold text-[#6F42C1] mb-4">Add Prescription for {details.patient.name}</h2>
      <div className="lg:w-3/5 sm:h-4/5 w-full flex flex-col mx-auto border-[2px] border-[#6F42C1] rounded-2xl px-4 py-5">
        <div className="flex flex-col">
          <div className="flex flex-row items-center justify-evenly">
            <Image alt='logo' src={Logo} />
          </div>
          <div className="flex sm:flex-row flex-col sm:items-center items-start sm:justify-between mt-4">
            <div>
              <div className="flex flow-row items-center justify-between mt-1">
                <p className="text-[20px] text-[#6F42C1] text-opacity-100 font-semibold">Dr: <span className="text-[18px] text-opacity-50 font-normal">{details.doctor.name}</span></p>
              </div>
              <div className="flex flow-row items-center justify-between mt-1">
                <p className="text-[20px] text-[#6F42C1] text-opacity-100 font-semibold">Serial No: <span className="text-[18px] text-opacity-50 font-normal">{id}</span></p>
              </div>
              <div className="flex flow-row items-center justify-between mt-1">
                <p className="text-[20px] text-[#6F42C1] text-opacity-100 font-semibold">Patient Name: <span className="text-[18px] text-opacity-50 font-normal">{details.patient.name}</span></p>
              </div>
              <div className="flex flow-row items-center justify-between mt-1">
                <p className="text-[20px] text-[#6F42C1] text-opacity-100 font-semibold">Gender: <span className="text-[18px] text-opacity-50 font-normal">{details.patient.gender}</span></p>
              </div>
            </div>
            <div>
              <div className="flex flow-row items-center justify-between mt-1">
                <p className="text-[20px] text-[#6F42C1] text-opacity-100 font-semibold">Appointment Date: <span className="text-[18px] text-opacity-50 font-normal">{details.patient.appointmentDate == null ? "Not Appointment" : details.patient.appointmentDate}</span></p>
              </div>
              <div className="flex flow-row items-center justify-between mt-1">
                <p className="text-[20px] text-[#6F42C1] text-opacity-100 font-semibold">Age: <span className="text-[18px] text-opacity-50 font-normal">{details.patient.age}</span></p>
              </div>
              <div className="flex flow-row items-center justify-between mt-1">
                <p className="text-[20px] text-[#6F42C1] text-opacity-100 font-semibold">Phone: <span className="text-[18px] text-opacity-50 font-normal">{details.patient.phone}</span></p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <label className="text-2xl text-[#6F42C1] font-semibold mt-4" htmlFor="Treatment plan">Treatment plan</label>
          <textarea
            className="w-full resize-none border mt-1 border-[#6F42C1] rounded-xl outline-none appearance-none p-2 mb-4"
            rows={4}
            value={prescription.treatment}
            onChange={(e) => setPrescription({ ...prescription, treatment: e.target.value })}
            placeholder='Treatment plan'
          />
        </div>
        <div>
          <label className="text-2xl text-[#6F42C1] font-semibold mt-4" htmlFor="Medication">Medication</label>
          <textarea
            className="w-full resize-none border mt-1 border-[#6F42C1] rounded-xl outline-none appearance-none p-2 mb-4"
            rows={4}
            value={prescription.medication}
            onChange={(e) => setPrescription({ ...prescription, medication: e.target.value })}
            placeholder='Medication'
          />
        </div>
        <div>
          <label className="text-2xl text-[#6F42C1] font-semibold mt-4" htmlFor="Therapies">Therapies</label>
          <textarea
            className="w-full resize-none border mt-1 border-[#6F42C1] rounded-xl outline-none appearance-none p-2 mb-4"
            rows={4}
            value={prescription.therapies}
            onChange={(e) => setPrescription({ ...prescription, therapies: e.target.value })}
            placeholder='Therapies'
          />
        </div>

        <div className="flex flex-row gap-x-3 items-center justify-center">
          <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
          <p className="text-base text-[#6F42C1] text-opacity-80">I agree with rules & regulations of the doctor</p>
        </div>
        <div className="flex flex-row items-center justify-center mt-2">
          <button
            onClick={handleSavePrescription}
            disabled={!checked || loading}
            className={`bg-[#6F42C1] text-white px-6 py-2 rounded-lg outline-none mr-5 focus:outline-none border-none hover:bg-opacity-70 ${loading ? "bg-[#c3b4e0]" : ""}`}
          >
            {loading ? "Adding..." : "Save"}
          </button>
          <button
            className="px-8 py-2 bg-gray-300 text-[#6F42C1] rounded-md hover:bg-gray-400"
            onClick={() => router.back()}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatientPage;
