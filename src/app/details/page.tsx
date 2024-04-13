import React from "react";

import Details from "../components/pages/Details/Details";

const page = () => {
  const detailItem = {
    id: 1,
    image: "https://i.blogs.es/d69481/iphone-14-00-01/650_1200.jpg",
    price: "1.980",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas at
          inventore, cupiditate modi ab quae tempora nesciunt quia adipisci,
          pariatur rem. Neque voluptatum autem rem quibusdam natus quo
          architecto tempora!`,
    title: "Apple Touch 5g 16gb Negro igual a Nuevo",
  };
  return <Details detailItem={detailItem} />;
};

export default page;
