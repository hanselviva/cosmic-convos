import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { universeData } from "./_universeData";
import { Container, Typography } from "@mui/material";
import Chatbox from "./Chatbox";

const CharacterPage: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const { universeId, characterId } = useParams();
  const universe = universeData.filter((data) => data.id == universeId)[0].data;
  const { name, id, avatar } = universe.characters.filter(
    (char) => char.id == characterId
  )[0];

  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="content-container" ref={divRef}>
      <Typography variant="h4" component="h1" sx={{ my: "2rem" }}>
        <img height="75px" width="75px" src={avatar} /> Chat with {name}
      </Typography>

      <Container
        sx={{
          py: 2,
          height: "600px",
          mb: 4,
        }}
        maxWidth="sm"
        key={id}
      >
        <Chatbox character={name} universe={universe.title} avatar={avatar} />
      </Container>
    </div>
  );
};

export default CharacterPage;
