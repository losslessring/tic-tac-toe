import * as React from "react"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}))

export default function CSSGrid() {
    return (
        <Box
            sx={{
                backgroundColor: "primary.dark",
                display: "grid",
                justifyContent: "center",
                padding: "50px",
            }}
        >
            <Box
                display="grid"
                gridTemplateColumns="repeat(3, 100px)"
                gap={1}
                gridTemplateRows="repeat(3, 100px)"
            >
                {Array.from(Array(9)).map((_, index) => (
                    <Item>{index}</Item>
                ))}
            </Box>
        </Box>
    )
}
