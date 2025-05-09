import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import moment from "moment";
import "moment/dist/locale/ar";
import { useEffect, useState } from "react";

moment.locale("ar");

const Header = ({ t, locale }) => {
  const [date, setDate] = useState(moment().format("Do MMMM YYYY"));

  useEffect(() => {
    if (locale === "en") {
      moment.locale("en");
    } else {
      moment.locale("ar");
    }

    setDate(moment().format("Do MMMM YYYY"));
  }, [locale]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        gap: "10px",
        paddingY: "5px",
      }}
    >
      <Typography
        variant="h2"
        sx={{ fontSize: { xs: "30px", sm: "50px" }, fontWeight: "600" }}
      >
        {t("Assuit")}
      </Typography>
      <Typography variant="h5" sx={{ fontSize: { xs: "15px", sm: "20px" } }}>
        {date}
      </Typography>
    </Box>
  );
};

export default Header;
