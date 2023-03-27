import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
// import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import { Typography } from '@mui/material';
import { Navigate, useNavigate } from "react-router-dom";
import './ministry.css'

export default function Development() {
    const Navigate = useNavigate()

    const styles = {
        paperContainer: {
            height: 657,
            backgroundImage: `url(${"https://images.pexels.com/photos/2114014/pexels-photo-2114014.jpeg?auto=compress&cs=tinysrgb&w=600"})`
        }
    };

    return (

        <>
        <h4 id="note">Choir Ministry Leaders </h4>
            <div className="card1" style={{}}>
                {/* <h2 id="note">Welcome to Chapel - Development Leaders </h2> */}
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
                            Name: Sammy John
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
                            Position: AG. Chairman
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
                            Name: John Makanda
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
                            Position: Vice Chair
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
                            Name: Prince Robert
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
                            Position: Secretary
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
                            Name: Angela Kavuli
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
                            Position: Treasurer
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
                            Name: Josephine Julius
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
                            Position: Representative
                        </Typography>
                    </CardContent>
                    <CardActions>
                        {/* <Button size="small">Stay Safe.....</Button> */}
                    </CardActions>
                </Card>
            </div>
            <button id='but' onClick={() => Navigate('/departments')}>Go Back</button>

            <div className='bgimage' style={styles.paperContainer}></div>
        </>
    );
}