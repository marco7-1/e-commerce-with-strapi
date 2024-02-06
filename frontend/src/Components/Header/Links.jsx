import { ExpandMore, KeyboardArrowRightOutlined } from "@mui/icons-material";
import { Box, Button, Paper, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const Links = ({title}) => {
  return (
    <Box
      // className="border"
      sx={{
        ":hover .show-when-hover": { display: "block" },
        ":hover": { cursor:"pointer"},
        position: "relative",
        display: "flex",
        alignItems: "center",
        zIndex: 2,
      }}
    >
      <Typography variant="body1">{title}</Typography>

      <ExpandMore sx={{ fontSize: "16px", ml: 1 }} />

      <Box
        className="show-when-hover "
        sx={{
          position: "absolute",
          top: "100%",
          minWidth: "170px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "none",
        }}
      >
        <Paper sx={{ mt: 2 }}>
          <nav aria-label="secondary mailbox folders">
            <List sx={{ py: 0 }}>
              <ListItem disablePadding>
                <ListItemButton sx={{ display: "flex", p: 0, px: 1.5 }}>
                  <ListItemText
                    sx={{ ".MuiTypography-root": { fontSize: "15px" } }}
                    primary="Dashboard"
                  />
                </ListItemButton>
              </ListItem>

              <ListItem
                disablePadding
                sx={{ ":hover .sub_link": { display: "block" } }}
              >
                <ListItemButton
                  sx={{ display: "flex", p: 0, px: 1.5, position: "relative" }}
                >
                  <ListItemText
                    sx={{ ".MuiTypography-root": { fontSize: "15px" } }}
                    primary="products"
                  />
                  <Box flexGrow={1} />
                  <KeyboardArrowRightOutlined sx={{ fontSize: "small" }} />
                </ListItemButton>
                <Box
                  className=" sub_link "
                  sx={{
                    display: "none",
                    position: "absolute",
                    top: 0,
                    left: "100%",
                  }}
                >
                  <Paper sx={{ ml: 1, minWidth: 120 }}>
                    <nav aria-label="secondary mailbox folders">
                      <List>
                        <ListItem disablePadding>
                          <ListItemButton
                            sx={{ display: "flex", p: 0, px: 1.5 }}
                          >
                            <ListItemText
                              sx={{
                                ".MuiTypography-root": { fontSize: "15px" },
                              }}
                              primary="Add Product"
                            />
                          </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                          <ListItemButton
                            sx={{ display: "flex", p: 0, px: 1.5 }}
                          >
                            <ListItemText
                              sx={{
                                ".MuiTypography-root": { fontSize: "15px" },
                              }}
                              primary="Edit Product"
                            />
                          </ListItemButton>
                        </ListItem>


                      </List>
                    </nav>
                  </Paper>
                </Box>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton sx={{ display: "flex", p: 0, px: 1.5 }}>
                  <ListItemText
                    sx={{ ".MuiTypography-root": { fontSize: "15px" } }}
                    primary="orders"
                  />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton sx={{ display: "flex", p: 0, px: 1.5 }}>
                  <ListItemText
                    sx={{ ".MuiTypography-root": { fontSize: "15px" } }}
                    primary="profile"
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Paper>
      </Box>
    </Box>
  );
};

export default Links;
