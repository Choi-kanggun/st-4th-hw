import React from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const params = useParams();
  console.log(params.id);
  return <div>Detail</div>;
};

export default Detail;
