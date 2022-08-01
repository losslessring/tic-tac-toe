import { styled } from "@mui/material/styles"
import Paper from "@mui/material/Paper"

const Cell = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    // padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    fontFamily: "Helvetica",
    fontWeight: "bold",
    fontSize: "4em",
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center"
}))

export default Cell