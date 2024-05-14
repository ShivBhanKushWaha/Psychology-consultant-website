import { DoctorsList, Hero, Symptoms, Talk, Therapy } from "@organisms";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero/>
      <DoctorsList/>
      <Talk/>
      <Therapy/>
      <Symptoms/>
    </div>
  );
}
