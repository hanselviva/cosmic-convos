import React, { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { universeData } from "./_universeData";
import {
  Typography,
  Container,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  useTheme,
} from "@mui/material";

const UniversePage: React.FC = () => {
  const { universeId } = useParams();
  const navigate = useNavigate();
  const divRef = useRef<HTMLDivElement>(null);

  const { data } = universeData.filter(
    (universe) => universe.id == universeId
  )[0];

  const activeTheme = useTheme();
  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [universeId]);

  return (
    <Container
      sx={{
        py: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      maxWidth="lg"
    >
      <Typography variant="h3" component="h1" style={{ marginTop: "2rem" }}>
        <span role="img">✨</span>
        {data.title}
      </Typography>
      <Typography
        variant="subtitle2"
        component="p"
        style={{
          marginTop: "2rem",
          maxWidth: "600px",
          textAlign: "justify",
          textAlignLast: "center",
        }}
      >
        {data.description}
      </Typography>
      <Typography
        variant="h5"
        component="h2"
        style={{ marginTop: "2rem" }}
        ref={divRef}
      >
        Choose Character to Converse
      </Typography>

      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container>
          {data.characters.map((char) => {
            return (
              <Grid item key={char.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "auto",
                    display: "flex",
                    flexDirection: "column",
                    margin: "1.5rem",
                    border: `2px solid ${activeTheme.palette.primary.main}`,
                  }}
                >
                  <CardActionArea
                    onClick={() => {
                      navigate(`/${universeId}/${char.id}`);
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={char.avatar}
                      alt={char.name}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h6" component="div">
                        {char.name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Container>
  );
};

export default UniversePage;
