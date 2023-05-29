import React from "react";
import { useParams } from "react-router-dom";
import { universeData } from "./_universeData";
import { Container, Typography } from "@mui/material";
import Chatbox from "./Chatbox";

const CharacterPage: React.FC = () => {
  const { universeId, characterId } = useParams();

  const universe = universeData.filter((data) => data.id == universeId)[0].data;

  const { name, id, avatar } = universe.characters.filter(
    (char) => char.id == characterId
  )[0];

  return (
    <div className="content-container">
      <Typography variant="h4" component="h1" style={{ marginTop: "2rem" }}>
        Chat with {name}
      </Typography>

      <Container sx={{ py: 8, height: "600px" }} maxWidth="sm">
        <Chatbox character={name} universe={universe.title} avatar={avatar} />
      </Container>
    </div>
  );
};

export default CharacterPage;
