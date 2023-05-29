import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  Container,
  Grid,
} from "@mui/material";
import { universeData } from "./universe-data";
import { useNavigate } from "react-router-dom";

const Landing: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="content-container">
      <Typography variant="h3" component="h3" style={{ marginTop: "2rem" }}>
        <span role="img">✨</span>Choose World
      </Typography>

      <Container sx={{ py: 8 }} maxWidth="lg">
        <Grid container>
          {universeData.map((universe) => {
            return (
              <Grid key={universe.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "auto",
                    display: "flex",
                    flexDirection: "column",
                    margin: "1.5rem",
                  }}
                >
                  <CardActionArea
                    onClick={() => {
                      navigate(`/universe/${universe.id}`);
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="400"
                      image={universe.data.featureImg}
                      alt="green iguana"
                    />
                    <CardContent sx={{ flexGrow: 1, height: "150px" }}>
                      <Typography gutterBottom variant="h5" component="div">
                        {universe.data.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {universe.data.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Share
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default Landing;
