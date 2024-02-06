import Fab from "@mui/material/Fab";
import { KeyboardArrowUp } from "@mui/icons-material";
import { Box, Zoom, useScrollTrigger } from "@mui/material";
import { useCallback } from "react";

const ScrollToTopp = () => {
  // threshold: 150 >>>> show icon when scroll down by distance 150 from top
  const trigger = useScrollTrigger({ threshold: 150 });

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <Zoom in={trigger}>
      <Box
        role="presentation"
        // Place the button in the bottom right corner.
        sx={{
          // moving according to diminsion of screen >>> fixed
          position: "fixed",
          bottom: 55,
          right: 32,
          zIndex: 1,
        }}
      >
        <Fab
          onClick={scrollToTop}
          color="primary"
          size="small"
          aria-label="Scroll back to top"
        >
          <KeyboardArrowUp fontSize="medium" />
        </Fab>
      </Box>
    </Zoom>
  );
};

export default ScrollToTopp;
