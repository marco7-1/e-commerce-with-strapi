import {
  Box,
  Container,
  Dialog,
  IconButton,
  Rating,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { Close } from "@mui/icons-material";
import ProductDetails from "./ProductDetails";
import { useGetProductByNameQuery } from "../../redux/Product";

const Main = () => {
  const handleAlignment = (event, newValue) => {
    setMyData(newValue);
  };
  const theme = useTheme();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const AllProductsAPI = "products?populate=*";
  const MenCateogryAPI =
    "products?populate=*&filters[ProductCateogry][$eq]=men";
  const WomenCateogryAPI =
    "products?populate=*&filters[ProductCateogry][$eq]=women";

  const [myData, setMyData] = useState(AllProductsAPI);

  const { data, error, isLoading } = useGetProductByNameQuery(myData);

  if (isLoading) {
    return <Typography variant="h6">LOADING.........</Typography>;
  }

  if (error) {
    // @ts-ignore
    return <Typography variant="h6">{error.message}</Typography>;
  }

  // if i have data ....to go directly to data in card and take it
  if (data) {
    return (
      <Container sx={{ py: 9 }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexWrap={"wrap"} // العناصر لما الشاشه تصغير لو مفيش مكان تكون تحت بعض
          gap={3}
          ml={2}
        >
          <Box>
            <Typography fontWeight={"bold"} variant="h6">
              Selected Products
            </Typography>
            <Typography fontWeight={300} variant="body1">
              All our new arrivals in a exclusive brand selection
            </Typography>
          </Box>
          {/* toogle >>> ببدل بين الازرار لما اضغط عليه
                                                                والنتيجة تظهر في نفس الشاشة */}
          <ToggleButtonGroup
            color="error"
            value={myData}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            sx={{
              ".Mui-selected": {
                border: "1px solid rgba(233, 69, 96, 0.5) !important",
                color: "#e94560",
                backgroundColor: "initial",
                // ميكونش ليه backgroundcolor
              },
            }}
          >
            <ToggleButton
              sx={{ color: theme.palette.text.primary }}
              className="my_button"
              value={AllProductsAPI}
              aria-label="left aligned"
            >
              All Products
            </ToggleButton>
            <ToggleButton
              sx={{ mx: "15px !important", color: theme.palette.text.primary }}
              className="my_button"
              value={MenCateogryAPI}
              aria-label="centered"
            >
              MEN Cateogry
            </ToggleButton>
            <ToggleButton
              sx={{ mr: "15px", color: theme.palette.text.primary }}
              className="my_button"
              value={WomenCateogryAPI}
              aria-label="right aligned"
            >
              WOMEN Cateogry
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>

        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
        >
          {data.data.map((item) => {
            return (
              <Card
                key={item}
                sx={{
                  maxWidth: 333,
                  mt: 6,
                  mb: 15,
                  mx: 2,
                  ":hover .MuiCardMedia-root": {
                    rotate: "0.5deg",
                    scale: "1.1",
                    transition: "0.3s",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="277"
                  image={`${item.attributes.productimg.data[0].attributes.url}`}
                />
                <CardContent>
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Typography gutterBottom variant="h6" component="div">
                      {item.attributes.ProductTitle}
                    </Typography>

                    <Typography variant="subtitle1" component="p">
                      {item.attributes.ProductPrice}
                    </Typography>
                  </Stack>
                  <Typography variant="body2" color="text.secondary">
                    {item.attributes.ProductDescription}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "space-between" }}>
                  <Button
                    onClick={handleClickOpen}
                    sx={{ textTransform: "capitalize" }}
                    size="large"
                  >
                    <AddShoppingCartOutlinedIcon
                      sx={{ mr: "2px" }}
                      fontSize="small"
                    />
                    Add to cart
                  </Button>
                  <Rating
                    precision={0.1}
                    name="read-only"
                    value={item.attributes.ProductRating}
                    readOnly
                  />
                </CardActions>
              </Card>
            );
          })}
        </Stack>

        <Dialog
          sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <IconButton
            sx={{
              ":hover": { color: "red", rotate: "180deg", transition: "0.3s" },
              position: "absolute",
              top: 0,
              right: 10,
            }}
            onClick={handleClose}
          >
            <Close />
          </IconButton>
          <ProductDetails />
        </Dialog>
      </Container>
    );
  }
};

export default Main;
