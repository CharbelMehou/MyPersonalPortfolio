import React from "react";
import { Box, IconButton } from "@mui/material";
import ProjectCarousel from "../components/ProjectCarousel";
import ProjectDescriptionSpeech from "../components/ProjectDescriptionSpeech";
import { useParams, useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import project1Screen from "../assets/images/project1Screen.png";
import project1Screen2 from "../assets/images/project1Screen2.png";
import project1Screen3 from "../assets/images/proejct1screen3.png";
import project1Screen4 from "../assets/images/proejct1screen4.png";

import project2Screen from "../assets/images/project2Screen.png";
import project2Screen2 from "../assets/images/project2Screen2.png";
import project2Screen3 from "../assets/images/project2Screen3.png";
import project2Screen4 from "../assets/images/project2Screen4.png";

import projetJava1Screen1 from "../assets/images/projetJava1Screen1.png";
import projetJava1Screen2 from "../assets/images/projetJava1Screen2.png";
import projetJava1Screen3 from "../assets/images/projetJava1Screen3.png";

import projetS8Repartition from "../assets/images/projetS8Repartition.png";
import projetS8Acceuil from "../assets/images/projetS8Acceuil.png";
import projetS8Classement from "../assets/images/projetS8Classement.png";

import { useTranslation } from "react-i18next";

const ProjectDescription = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { t } = useTranslation();

  const handleBackClick = () => {
    navigate("/");
  };

  const Projet1ScreenTab = [
    { src: project1Screen, alt: "Project1Screen1" },
    { src: project1Screen2, alt: "Project1Screen2" },
    { src: project1Screen3, alt: "Project1Screen3" },
    { src: project1Screen4, alt: "Project1Screen4" },
  ];

  const Projet2ScreenTab = [
    { src: project2Screen, alt: "Project2Screen1" },
    { src: project2Screen2, alt: "Project2Screen2" },
    { src: project2Screen3, alt: "Project2Screen3" },
    { src: project2Screen4, alt: "Project2Screen4" },
  ];

  const ProjetJava1ScreenTab = [
    { src: projetJava1Screen1, alt: "ProjectJava1Screen1" },
    { src: projetJava1Screen2, alt: "ProjectJava1Screen2" },
    { src: projetJava1Screen3, alt: "ProjectJava1Screen3" },
  ];
  const ProjetS8Tab = [
    { src: projetS8Acceuil, alt: "projetS8Acceuil" },
    { src: projetS8Repartition, alt: "projetS8Repartition" },
    { src: projetS8Classement, alt: "projetS8Classement" },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexWrap: { xs: "wrap", lg: "nowrap" },
      }}
    >
      <Box sx={{ display: "flex", flexWrap: { xs: "wrap", lg: "nowrap" } }}>
        <IconButton
          onClick={handleBackClick}
          size="small"
          sx={{ color: "white" }}
        >
          <ArrowBackIosIcon />
          {t("back")}
        </IconButton>
      </Box>

      <Box>
        {id === "1" && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              flexWrap: { xs: "wrap", lg: "nowrap" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignContent: "center",
              }}
            >
              <ProjectCarousel projectScreenTab={Projet1ScreenTab} />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <ProjectDescriptionSpeech
                title="myftjourney"
                vercelLink={"https://myfitjourney-app.vercel.app/"}
                vercelLinkdisplayed={true}
                githubLink={"https://github.com/CharbelMehou/FitnessApp"}
                githubLinkdisplayed={true}
                descriptions={[{ label: "myftjourney-speech" }]}
                tags={[
                  { label: "React.js" },
                  { label: "#Node.js" },
                  { label: "HTML" },
                  { label: "CSS" },
                  { label: "JavaScript" },
                  { label: "API REST" },
                ]}
              />
            </Box>
          </Box>
        )}
        {id === "2" && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              flexWrap: { xs: "wrap", lg: "nowrap" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
              }}
            >
              <ProjectCarousel projectScreenTab={ProjetS8Tab} />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <ProjectDescriptionSpeech
                title={"club-sport"}
                vercelLink={""}
                vercelLinkdisplayed={false}
                githubLink={
                  "https://github.com/CharbelMehou/ClubSportLeger"
                }
                githubLinkdisplayed={true}
                descriptions={[{ label: "club-sport-speech" }]}
                tags={[
                  { label: "#JAVA JEE" },
                  { label: "#Javascript" },
                  { label: "#HTML" },
                  { label: "#CSS" },
                ]}
              />
            </Box>
          </Box>
        )}
        {id === "3" && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              flexWrap: { xs: "wrap", lg: "nowrap" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
              }}
            >
              <ProjectCarousel projectScreenTab={Projet2ScreenTab} />
            </Box>
            <Box
              className="box-projet-speech"
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <ProjectDescriptionSpeech
                title="web-portfolio"
                vercelLink={"https://charbel-portfolio.vercel.app/"}
                vercelLinkdisplayed={true}
                githubLink={
                  "https://github.com/CharbelMehou/MyPersonalPortfolio"
                }
                githubLinkdisplayed={true}
                descriptions={[{ label: "portfolio-d1" }]}
                tags={[
                  { label: "#React" },
                  { label: "#Node.js" },
                  { label: "#JavaScript" },
                  { label: "#CSS" },
                ]}
              />
            </Box>
          </Box>
        )}
        {id === "4" && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              flexWrap: { xs: "wrap", lg: "nowrap" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
              }}
            >
              <ProjectCarousel projectScreenTab={ProjetJava1ScreenTab} />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <ProjectDescriptionSpeech
                title={"infrastructur-sportive"}
                vercelLink={""}
                vercelLinkdisplayed={false}
                githubLink={
                  "https://github.com/CharbelMehou/Recensement-des-Infrastructures-Sportives"
                }
                githubLinkdisplayed={true}
                descriptions={[{ label: "infrastructures-sportives-speech" }]}
                tags={[
                  { label: "#JAVA JEE" },
                  { label: "#HTML" },
                  { label: "#CSS" },
                ]}
              />
            </Box>
          </Box>
        )}
        
      </Box>
    </Box>
  );
};

export default ProjectDescription;
