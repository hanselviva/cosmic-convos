import React from "react";
import { useParams } from "react-router-dom";
import { universeData } from "./universe-data";

const CharacterPage: React.FC = () => {
  const { universeId, characterId } = useParams();
  const universe = universeData.filter((data) => data.id == universeId)[0].data;
  const { name, id, avatar } = universe.characters.filter(
    (char) => char.id == characterId
  )[0];

  return <div> Chat with {name}</div>;
};

export default CharacterPage;
