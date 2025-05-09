import { useEffect, useState } from "react";
// MUI Components
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

//External Librarys
import axios from "axios";
import { useTranslation } from "react-i18next";

//Components
import Header from "./components/Header";
import Body from "./components/Body";

const theme = createTheme({
  typography: {
    fontFamily: ["NOTO"],
  },
});

const App = () => {
  const [temp, setTemp] = useState({
    tempDegree: null,
    min: null,
    max: null,
    description: null,
    icon: null,
  });
  const [locale, setLocale] = useState("ar");
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?lat=27.180134&lon=31.189283&appid=1d164c90950f1e01575b26e4e5a925aa",
        {
          signal: controller.signal,
        }
      )
      .then(function (response) {
        const responseTemp = Math.round(response.data.main.temp - 272.15);
        const min = Math.round(response.data.main.temp_min - 272.15);
        const max = Math.round(response.data.main.temp_max - 272.15);
        const description = response.data.weather[0].description;
        const icon = response.data.weather[0].icon;

        setTemp({ tempDegree: responseTemp, min, max, description, icon });
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});

    return () => {
      console.log("Cancling");
      controller.abort();
    };
  }, []);

  const handleLanguageClick = () => {
    if (locale === "ar") {
      setLocale("en");
      i18n.changeLanguage("en");
    } else {
      setLocale("ar");
      i18n.changeLanguage("ar");
    }
  };

  useEffect(() => {
    i18n.changeLanguage("ar");
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          background: "#2A7B9B",
          background:
            "linear-gradient(90deg,rgba(42, 123, 155, 1) 47%, rgba(87, 199, 133, 1) 100%, rgba(237, 221, 83, 1) 100%)",
        }}
      >
        <Container
          maxWidth="sm"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Box
            sx={{
              background: "rgba(255, 255, 255, 0.6)",
              width: "90%",
              minHeight: "200px",
              borderRadius: "10px",
              padding: "15px 25px",
              boxShadow: 4,
            }}
            dir={locale === "ar" ? "rtl" : "ltr"}
          >
            {/* Card Header */}
            <Header t={t} locale={locale} />
            <Divider />
            {/* Card Body */}
            <Body t={t} temp={temp} />
          </Box>
          {/* Card Footer */}
          <Button
            variant="text"
            sx={{
              color: "black",
              width: "80%",
              display: "flex",
              justifyContent: "flex-start",
              marginTop: "10px",
            }}
            onClick={handleLanguageClick}
          >
            {locale == "ar" ? "إنجليزي" : "Arabic"}
          </Button>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default App;
