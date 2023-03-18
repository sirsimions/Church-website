import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
// import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import { Typography } from '@mui/material';
import { Navigate, useNavigate } from "react-router-dom";
import './ministry.css'
  
export default function Pulpit() {

  const Navigate = useNavigate()

  return (
    <>
    <div className="card1" style={{}}>
      <h2 id="note">Welcome to Chapel - Pulpit Ministry Leaders</h2>
      <Card
        style={{
          width: 400,
          backgroundColor: "grey",
        }}
      >
        <CardContent>
          <Typography
            style={{ fontSize: 14 }}
            color="textSecondary"
            gutterBottom
          >
            {/* Name: Joel Nyamai */}
            
          </Typography>
          <Typography variant="h5" component="h5">
          Name: Rev Joel Nyamai
          </Typography>
          <Typography
            style={{
              marginBottom: 12,
            }}
            color="textSecondary"
          >
            {/* Residence: Kitui */}
          </Typography>
          <Typography variant="h5" component="h5">
          Home County: Kitui
          </Typography>
          <Typography variant="h5" component="h5">
          Position: Reverend
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Button size="small">Stay Safe.....</Button> */}
        </CardActions>
      </Card>
    </div>

    <div className="card2" style={{}}>
      {/* <h2>Welcome to Chapel Pulpit Ministry</h2> */}
      <Card
        style={{
          width: 400,
          backgroundColor: "grey",
        }}
      >
        <CardContent>
          <Typography
            style={{ fontSize: 14 }}
            color="textSecondary"
            gutterBottom
          >
            {/* Name: Joel Nyamai */}
            
          </Typography>
          <Typography variant="h5" component="h5">
          Name: Pst. Daniel Kalama
          </Typography>
          <Typography
            style={{
              marginBottom: 12,
            }}
            color="textSecondary"
          >
            {/* Residence: Kitui */}
          </Typography>
          <Typography variant="h5" component="h5">
          Home County: Kilifi
          </Typography>
          <Typography variant="h5" component="h5">
          Position: Resident Pastor
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Button size="small">Stay Safe.....</Button> */}
        </CardActions>
      </Card>
    </div>

    <div className="card3" style={{}}>
      {/* <h2>Welcome to Chapel Pulpit Ministry</h2> */}
      <Card
        style={{
          width: 400,
          backgroundColor: "grey",
        }}
      >
        <CardContent>
          <Typography
            style={{ fontSize: 14 }}
            color="textSecondary"
            gutterBottom
          >
            {/* Name: Joel Nyamai */}
            
          </Typography>
          <Typography variant="h5" component="h5">
          Name: Pst. Dorice Makanda
          </Typography>
          <Typography
            style={{
              marginBottom: 12,
            }}
            color="textSecondary"
          >
            {/* Residence: Kitui */}
          </Typography>
          <Typography variant="h5" component="h5">
          Home County: Kakamega
          </Typography>
          <Typography variant="h5" component="h5">
          Position: Assistant Pastor
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Button size="small">Stay Safe.....</Button> */}
        </CardActions>
      </Card>
    </div>

    <div className="card4" style={{}}>
      {/* <h2>Welcome to Chapel Pulpit Ministry</h2> */}
      <Card
        style={{
          width: 400,
          backgroundColor: "grey",
        }}
      >
        <CardContent>
          <Typography
            style={{ fontSize: 14 }}
            color="textSecondary"
            gutterBottom
          >
            {/* Name: Joel Nyamai */}
            
          </Typography>
          <Typography variant="h5" component="h5">
          Name: Pst. Faith Mulwa
          </Typography>
          <Typography
            style={{
              marginBottom: 12,
            }}
            color="textSecondary"
          >
            {/* Residence: Kitui */}
          </Typography>
          <Typography variant="h5" component="h5">
          Home County: Kitu
          </Typography>
          <Typography variant="h5" component="h5">
          Position: Assistant Pastor
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Button size="small">Stay Safe.....</Button> */}
        </CardActions>
      </Card>
    </div>
    <button id='but' onClick={()=>Navigate('/departments')}>Go Back</button>
    </>
  );
}