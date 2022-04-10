import {
    Button,
    Card,
    CardContent,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useStyles } from "./styled";

const LoginCard = () => {
    const classes = useStyles();
    const [field, setField] = useState<string>("librarian");
    const studentClick = () => {
        setField("student");
    };
    const librarianClick = () => {
        setField("librarian");
    };
    return (
        <Card variant="outlined" className={classes.root}>
            <Box className={classes.box}>
                <Grid
                    container
                    justifyContent="space-around"
                    alignItems="center"
                    height="100%"
                >
                    <Grid item lg={6}>
                        <Typography
                            variant="h4"
                            className={
                                field === "student"
                                    ? classes.activeTab
                                    : classes.loginText
                            }
                            onClick={studentClick}
                        >
                            Student Login
                        </Typography>
                    </Grid>
                    <Grid item lg={6}>
                        <Typography
                            variant="h4"
                            align="center"
                            className={
                                field === "librarian"
                                    ? classes.activeTab
                                    : classes.loginText
                            }
                            onClick={librarianClick}
                        >
                            Librarian Login
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <CardContent>
                <Typography variant="body1" mb={1}>
                    Username
                </Typography>
                <TextField
                    placeholder="User Name"
                    className={classes.field}
                    fullWidth
                />{" "}
                <Typography variant="body1" mb={1} mt={1}>
                    Password
                </Typography>
                <TextField
                    type="password"
                    className={classes.field}
                    fullWidth
                    placeholder="Password"
                />
                <Button
                    size="large"
                    variant="contained"
                    className={classes.loginBtn}
                >
                    Login
                </Button>
            </CardContent>
        </Card>
    );
};

export default LoginCard;
