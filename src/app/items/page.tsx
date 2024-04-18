import type { Metadata } from "next";
import Home from "../components/pages/Home/Home";

export const metadata: Metadata = {
  title: "Home Page",
  description: "Prueba mercado libre"
};

const page = () => {
  return <Home />;
};

export default page;
