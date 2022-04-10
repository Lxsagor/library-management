import { makeStyles } from "@mui/styles";
import loginBG from "../../assets/images/login/login_bg.png";
import { Theme } from "@mui/system";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: "100%",
        height: "100%",
        minHeight: "100vh",
        maxHeight: "100vh",
        backgroundImage: `url(${loginBG})`,
        backgroundPosition: "bottom",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
    },
    box: {
        marginTop: "80px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontFamily: "Rakkas",
        fontSize: "36px !important",
    },
    spanColor: {
        color: theme.palette.primary.main,
    },
    header: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
}));
