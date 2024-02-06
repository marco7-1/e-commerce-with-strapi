import { Box, Button, Typography } from "@mui/material"




const Footer = () => {
  return (
    <Box 
    sx={{
        bgcolor:"#2B3445",
        py:0.5,
        BorderTopLeftRadius:8,
        BorderTopRightRadius:8,
    }}
    >

        <Typography
        justifyContent={"center"}
        display={"flex"}
        alignItems={"center"}
        color={"HighlightText"}
        variant="h6"
        sx={{fontSize: 18}}
        >
            Designed and developed by 
            <Button
            sx={{
                fontSize:"18px",
                textTransform:"capitalize",
                color:"#ff7790",
                mx:0.5,
            }}
            variant="text"
            color="primary"
            >
                marco ezzat
            </Button>
            2023
        </Typography>
    </Box>
  )
}

export default Footer
