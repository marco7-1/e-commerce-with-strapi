import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";

const ProductDetails = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2.5,
        flexDirection: { xs: "column", sm: "row" },
        my:1,
      }}
    >
      <Box>
        <img width={300} src="src\images\1.jpg" alt="" />
      </Box>

      <Box 
      sx={{ textAlign: { xs: "center", sm:"left" } }}
      >
        <Typography variant="h5">WOMENS FASHION</Typography>
        <Typography variant="h5" my={0.4} fontSize={"22px"} color={"crimson"}>
          $12.99
        </Typography>
        <Typography variant="body1">
          lizards dsgsdgf nodsoafjasd poasddfkjdjk;S ;LDSKJGKJSD;L KLDFJGLSDKJG
          L;KSDFJSD;LF ;PODSDFKJKJ;SDFJ SDKL;DJMS;D SD;LSDFKSD;FK ;LSDSDFKK;SDLF
          ;LSLDDFK;SLDKFK L;SSDKF;SLDKF
        </Typography>

        <Stack 
        sx={{ justifyContent: {xs: "center", sm: "left" }}}
        direction={"row"} gap={2} my={2}>
          {["src/images/1.jpg", "src/images/2.jpg"].map((item) => {
            return (
              <img
                width={90}
                height={100}
                style={{ borderRadius: 3 }}
                src={item}
                alt=""
              />
            );
          })}
        </Stack>

        <Button
          sx={{
            textTransform: "capitalize",
          }}
          variant="contained"
        >
          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          Buy Now
        </Button>
      </Box>
    </Box>
  );
};

export default ProductDetails;
