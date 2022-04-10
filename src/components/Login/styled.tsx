import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        minHeight: "256px",
        minWidth: "450px",
    },
    box: {
        borderBottom: "1px solid rgba(0, 0, 0, 0.15)",
        height: "50px",
    },

    loginText: {
        height: "100% !important",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
    },
    activeTab: {
        height: "100% !important",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        color: theme.palette.primary.main,
        "&::after": {
            content: "''",
            position: "absolute",
            top: 33,
            width: "100%",
            height: 3,
            borderRadius: 8,
            backgroundColor: theme.palette.primary.main,
        },
    },
    field: {
        "& .MuiOutlinedInput-input": {
            height: "8px",
            borderRadius: "8px",
        },
    },
    loginBtn: {
        marginTop: "10px !important",
        textTransform: "capitalize",
        borderRadius: "8px !important",
    },
}));
