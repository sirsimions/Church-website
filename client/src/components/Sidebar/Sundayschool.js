import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
// import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import { Typography } from '@mui/material';
import { Navigate, useNavigate } from "react-router-dom";
import './ministry.css'

export default function SundaysSchool() {
    const Navigate = useNavigate()

    return (

        <>
            <div className="card1" style={{}}>
                <h2 id="note">Welcome to Chapel - Sunday School Leaders </h2>
                <Card
                    style={{
                        width: 360,
                        backgroundColor: "",
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
                            Name: Susan Wayua
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
                            {/* Home County: Kitui */}
                        </Typography>
                        <Typography variant="h5" component="h5">
                            Position: Coordinator
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
                        width: 360,
                        backgroundColor: "",
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
                            Name: Mrs. Katumba
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
                            {/* Home County: Homa Bay */}
                        </Typography>
                        <Typography variant="h5" component="h5">
                            Position: Teacher
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
                        width: 360,
                        backgroundColor: "",
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
                            Name: Mumba Julius
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
                            {/* Home County: Kilifi */}
                        </Typography>
                        <Typography variant="h5" component="h5">
                            Position: Teacher
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
                        width: 360,
                        backgroundColor: "",
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
                            Name: Jackson Kalume
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
                            {/* Home County: Kilifi */}
                        </Typography>
                        <Typography variant="h5" component="h5">
                            Position: Teacher
                        </Typography>
                    </CardContent>
                    <CardActions>
                        {/* <Button size="small">Stay Safe.....</Button> */}
                    </CardActions>
                </Card>
            </div>

            <div className="card5" style={{}}>
                {/* <h2 id="note">Welcome to Chapel Sunday School</h2> */}
                <Card
                    style={{
                        width: 360,
                        backgroundColor: "",
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
                            Name: Janet Sidi
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
                            {/* Home County: Kitui */}
                        </Typography>
                        <Typography variant="h5" component="h5">
                            Position: Teacher
                        </Typography>
                    </CardContent>
                    <CardActions>
                        {/* <Button size="small">Stay Safe.....</Button> */}
                    </CardActions>
                </Card>
            </div>
            <button id='but' onClick={() => Navigate('/departments')}>Go Back</button>
        </>
    );
}