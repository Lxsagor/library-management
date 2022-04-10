import { Box, Typography } from "@mui/material";
import React from "react";
import LoginCard from "../../components/Login/LoginCard";
import { useStyles } from "./styled";

const Login = () => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box className={classes.box}>
                <Box className={classes.header}>
                    <Typography className={classes.title}>
                        E-<span className={classes.spanColor}>Library</span>
                    </Typography>
                    <Typography variant="h4" mb={4}>
                        Smart Library Management System
                    </Typography>
                </Box>
                <Box mb={4}>
                    <LoginCard />
                </Box>
                <Box>
                    <Typography variant="h4" color="white">
                        © Project x ltd
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Login;
