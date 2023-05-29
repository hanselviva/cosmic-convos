import React from "react";
import { useParams } from "react-router-dom";
import { universeData } from "./universe-data";

const Content: React.FC = () => {
  const { id } = useParams();
  const data = universeData.filter((universe) => universe.id == id);

  return <div>{data[0].data.title}</div>;
};

export default Content;
