import Details from "@/app/components/pages/Details/Details";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Details Page",
  description: "Prueba mercado libre"
};

const page = () => {
  return <Details />;
};

export default page;
