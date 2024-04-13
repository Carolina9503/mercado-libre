"use client";
import RootLayout from "@/app/layout";
import React, { useState } from "react";
import HeaderBackground from "../../UI/Molecules/HeaderBackground/HeaderBackground";
import Search from "../../UI/Molecules/Search/Search";
import CardItem from "../../UI/Molecules/CardItem/CardItem";

const Home = () => {
  const dataLocal = [
    {
      id: 1,
      image:
        "https://mac-center.com/cdn/shop/files/iPhone_15_Pro_Black_Titanium_PDP_Image_Position-1__COES_813eeda0-bba4-4a15-a89f-00e902760fda_823x.jpg?v=1700298683",
      price: "$ 1.980",
      description: "Apple Touch 5g 16gb Negro igual a Nuevo",
      place: "Capital Federal",
    },
    {
      id: 2,
      image:
      "https://mac-center.com/cdn/shop/files/iPhone_15_Pro_Black_Titanium_PDP_Image_Position-1__COES_813eeda0-bba4-4a15-a89f-00e902760fda_823x.jpg?v=1700298683",
      price: "$ 1.980",
      description: "Apple Touch 5g 16gb Negro igual a Nuevo",
      place: "Capital Federal",
    },
    {
      id: 3,
      image:
      "https://mac-center.com/cdn/shop/files/iPhone_15_Pro_Black_Titanium_PDP_Image_Position-1__COES_813eeda0-bba4-4a15-a89f-00e902760fda_823x.jpg?v=1700298683",
      price: "$ 1.980",
      description: "Apple Touch 5g 16gb Negro igual a Nuevo",
      place: "Capital Federal",
    },
    {
      id: 4,
      image:
      "https://mac-center.com/cdn/shop/files/iPhone_15_Pro_Black_Titanium_PDP_Image_Position-1__COES_813eeda0-bba4-4a15-a89f-00e902760fda_823x.jpg?v=1700298683",
      price: "$ 1.980",
      description: "Apple Touch 5g 16gb Negro igual a Nuevo",
      place: "Capital Federal",
    },
    {
      id: 5,
      image:
      "https://mac-center.com/cdn/shop/files/iPhone_15_Pro_Black_Titanium_PDP_Image_Position-1__COES_813eeda0-bba4-4a15-a89f-00e902760fda_823x.jpg?v=1700298683",
      price: "$ 1.980",
      description: "Apple Touch 5g 16gb Negro igual a Nuevo",
      place: "Capital Federal",
    },
  ];
  const [value, setvalue] = useState("Iphon");
  const onClick = () => {
    console.log("click");
  };
  return (
    <RootLayout>
      <HeaderBackground>
        <Search
          onSearch={setvalue}
          onClick={onClick}
          placeholder="Buscando productos, marcas y más ..."
        ></Search>
      </HeaderBackground>
      {dataLocal.map((item) => (
        <CardItem
          key={item.id}
          image={item.image}
          price={item.price}
          description={item.description}
          place={item.place}
        />
      ))}
    </RootLayout>
  );
};

export default Home;
