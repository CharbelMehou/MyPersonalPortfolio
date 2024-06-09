import React from "react";
import { useTranslation } from "react-i18next";
import Me from "../assets/images/me-removebg-preview.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TitleHeader from "./TitleHeader";
const AboutMe = () => {
  const { t } = useTranslation();
  const handleLInkedLnClick = () => {
    window.open("https://www.linkedin.com/in/charbel-mehou/", "_blank");
  };

  const handleGithubClic = () => {
    window.open("https://github.com/CharbelMehou?tab=repositories", "_blank");
  };
  const handleEmailClick = () => {
    window.open(
      "mailto:mehoucharbel@gmail.com?subject=Contact depuis le site Web",
      "_blank"
    );
  };
  return (
    <Box  id="aboutMe">
      <Box className="title-box section-offset" sx={{py:1}}>
        <Typography variant="h5" className="title">
          {" "}
          {t("about")}
        </Typography>
      </Box>

      <Box
        className="bg-slate-900 bg-opacity-70 about-me-box title-box section-box"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,mx: "12px",
          width: "auto" ,overflow:'hidden',
          flexWrap: { xs: "wrap-reverse", lg: "nowrap" },
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Box className=".about-me-description"  style={{ color: "white"}}>
           <TitleHeader/>
           <Typography variant="h5">{t("welcome")} </Typography>
            <Typography variant="h5">{t("me-1")} </Typography>
            <Typography variant="h5">{t("me-1-1")} <span style={{ color: "#416DD1" }}> {t("programming")}</span>
            {t("eager")}<span style={{ color: "#416DD1" }}> {t("digital-innovation")}</span>. </Typography>
            
            <Typography variant="h5">
              {" "}
              {t("me-2")}
              <span style={{ color: "#416DD1" }}> {t("me-2-1")}</span>,
              {t("me-3")}
            </Typography>
            <Typography variant="h5">
            {t("me-3-1")}
            {/* <span style={{ color: "#416DD1" }}> Java </span>, */}
              <span style={{ color: "#416DD1" }}> React </span> {t('and')}
              <span style={{ color: "#416DD1" }}> C# .Net </span>
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              gap: 1,
              mt: 1,
            }}
          >
            <Typography variant="h5" color="white">
              {t("contact-me")}
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                gap: 1,
                flexWrap: { xs: "wrap", lg: "nowrap" },
                mt: 1,
              }}
            >
              <Button
                variant="contained"
                onClick={handleLInkedLnClick}
                sx={{ width:'164px',backgroundColor: "#416DD1", gap: 1 }}
              >
                <LinkedInIcon /> {t("linkedIn")}
              </Button>

              <Button
                variant="contained"
                sx={{ width:'164px',backgroundColor: "#416DD1", gap: 1 }}
                onClick={handleGithubClic}
              >
                <GitHubIcon /> {t("github")}
              </Button>
              <Button
                variant="contained"
                sx={{width:'164px', backgroundColor: "#416DD1", gap: 1 }}
                onClick={handleEmailClick}
              >
                <MailOutlineIcon /> {t("gmail")}
              </Button>
              <Button
                variant="contained"
                sx={{width:'164px', backgroundColor: "#416DD1", gap: 1 }}
              >
                <PhoneIcon />
                07 58 65 94 51
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          className="about-me-image"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: { xs: "center", lg: "flex-end" },
            borderRadius: "25% 10%",
            width: { xs: "200px", lg: "400px" },
            height: { xs: "200px", lg: "400px" },
            border: "3px solid #416DD1",
          }}
        >
          <img src={Me} alt="Me" />
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMe;
