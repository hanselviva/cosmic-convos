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

const Landing = () => {
  return (
    <div className="content-container">
      Caaaaaards
      <Container sx={{ py: 8 }} maxWidth="lg">
        <Grid container>
          {universeData.map((universe) => {
            return (
              <Grid key={universe.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    margin: "0 1.5rem",
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="400"
                      image={universe.data.featureImg}
                      alt="green iguana"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
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
