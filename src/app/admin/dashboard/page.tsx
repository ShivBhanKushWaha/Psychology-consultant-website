import { Container } from "@organisms"
import Summary from "./Summary";
import BarGraph from "./BarGraph"

const Admin = async () => {
  // dummy data 
  const doctors = [
    { name: "Dr. John Doe", status: "verified" },
    { name: "Dr. Jane Smith", status: "verified" },
    { name: "Dr. Jane Smith", status: "verified" },
    { name: "Dr. Jane Smith", status: "verified" },
    { name: "Dr. Emily Johnson", status: "unverified" },
    { name: "Dr. Emily Johnson", status: "unverified" },
  ];

  const patients = [
    { name: "Alice Brown", status: "Admitted", Paid: "Yes", fees: "1500" },
    { name: "Bob White", status: "Discharged", Paid: "No", fees: "2000" },
    { name: "Charlie Green", status: "Under Treatment", Paid: "Yes", fees: "3000" },
  ];

  return (
    <div className="pt-8">
      <Container>
        <Summary doctors={doctors} patients={patients} />
      </Container>
    </div>
  )
}

export default Admin;