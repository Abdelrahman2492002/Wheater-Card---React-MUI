import Grid from "@mui/material/Grid";
import WbCloudyIcon from "@mui/icons-material/WbCloudy";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

const Body = ({ t, temp }) => {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
      <Grid container size={{ xs: 8, sm: 6 }} columnSpacing={1}>
        <Grid
          item
          size={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: "60px", sm: "80px" } }}
          >
            {temp.tempDegree}
            <Typography
              component="span"
              sx={{ fontSize: "16px", fontWeight: 600 }}
            >
              °C
            </Typography>
          </Typography>
        </Grid>
        <Grid
          item
          size={4}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: { xs: "0px", sm: "20px" },
          }}
        >
          <img
            src={`https://openweathermap.org/img/wn/${temp.icon}@2x.png`}
            alt="weather status icon"
            style={{ width: { xs: "40px", sm: "70px" } }}
          />
        </Grid>
        <Grid item size={12}>
          <Typography
            variant="subtitle1"
            sx={{ fontSize: { xs: "16px", sm: "25px" }, fontWeight: 300 }}
          >
            {t(temp.description)}
          </Typography>
        </Grid>
        <Grid item size={5}>
          <Typography variant="subtitle2">
            {t("min")} : {temp.min}
          </Typography>
        </Grid>
        <Grid item size={1}>
          <Box>|</Box>
        </Grid>
        <Grid item size={5}>
          <Typography variant="subtitle2">
            {t("max")} : {temp.max}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        size={{ xs: 4, sm: 6 }}
        sx={{
          display: "flex",
          justifyContent: { xs: "center", sm: "flex-end" },
          alignItems: { xs: "center", sm: "flex-end" },
        }}
      >
        <WbCloudyIcon
          sx={{
            width: { xs: "100px", sm: "192px" },
            height: { xs: "100px", sm: "192px" },
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Body;
