import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
  useThemeProps,
} from "@mui/material";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

const IconSection = () => {
  const theme = useTheme();
  return (
    <Container
      sx={{
        bgcolor:
          // @ts-ignore
          theme.palette.favColor.main,
        mt: 2,
      }}
    >
      {/*flexWrap:"wrap" >>>> لو مساحة الشاشة صغرت انقل للسطر اللي بعده  */}
      <Stack
        divider={
          useMediaQuery("(min-width:600px)") ? (
            <Divider orientation="vertical" flexItem />
          ) : null
        }
        sx={{ flexWrap: "wrap" }}
        direction={"row"}
        alignItems={"center"}
        py={"8px"}
      >
        <MyBox
          icon={<ElectricBoltIcon fontSize="large" />}
          title={"Fast Delivery"}
          subtitle={"Start From $10"}
        />
        <MyBox
          icon={<WorkspacePremiumIcon fontSize="large" />}
          title={"Money Guarantee"}
          subtitle={"7 Day Back"}
        />
        <MyBox
          icon={<AccessAlarmIcon fontSize="large" />}
          title={"365 Days"}
          subtitle={"From Free Return"}
        />
        <MyBox
          icon={<CreditScoreIcon fontSize="large" />}
          title={"Payment"}
          subtitle={"Secure System"}
        />
      </Stack>
    </Container>
  );
};

export default IconSection;

const MyBox = ({ icon, title, subtitle }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: 250,
        display: "flex",
        flexGrow: 1,
        alignItems: "center",
        gap: 3,
        justifyContent: useMediaQuery("(min-width:600px)") ? "center" : "left",
        py: "10px",
      }}
    >
      {icon}
      <Box>
        <Typography variant="body1">{title}</Typography>
        <Typography
          sx={{ fontWeight: 300, color: theme.palette.text.secondary }}
          variant="body1"
        >
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
};
