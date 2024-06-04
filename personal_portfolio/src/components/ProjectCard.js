import { Box, Button, Typography } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";

const ProjectCard = ({
  id,
  title,
  screen,
  vercelLink,
  vercelLinkdisplayed,
  githubLink,
  githubLinkdisplayed,
  descriptions,
  tags,
}) => {
  const flexWrapValue = tags?.length > 2 ? "wrap" : "nowrap";
  const { t } = useTranslation();
  const handleVercelClick = () => {
    window.open(vercelLink, "_blank");
  };
  const handleGithubClick = () => {
    window.open(githubLink, "_blank");
  };
  return (
    <Box
      className="projectCard"
      sx={{ display: "flex", flexDirection: "column" ,width:{xs:"300px",lg:"470px"}}}
    >
      <Box sx={{ mb: 1 }}>
        <Typography style={{ color: "white", fontWeight: "bold" }}>
          {t(title)}
        </Typography>
      </Box>

      <Box sx={{ display: "flex" }}>
        <img className="screen-project-image" src={screen} alt="image" />
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1, p: 1 }}>
        {descriptions?.map((description, index) => (
          <Typography key={index} style={{ color: "white" }}>
            {t(description.label)}
          </Typography>
        ))}
        <RouterLink to={`/project/${id}`} className="white-link">
          {t("details-here")}
          <LaunchIcon />
        </RouterLink>

        {vercelLinkdisplayed ? (
          <Button
            variant="contained"
            onClick={handleVercelClick}
            size="small"
            sx={{
              backgroundColor: "#416DD1",
              gap: 1,
              width: { xs: "auto", lg: "100%" },
              height: { xs: "auto", lg: "100%" },
            }}
          >
            {t("visit-here")}
            <LaunchIcon />
          </Button>
        ) : (
          <>
            <Button
              variant="disabled"
              onClick={handleVercelClick}
              size="small"
              sx={{
                backgroundColor: "#416DD1",
                gap: 1,
                width: { xs: "auto", lg: "100%" },
                height: { xs: "auto", lg: "100%" },
              }}
            >
              {t("not-deployed")}            
            </Button>
          </>
        )}
        {githubLinkdisplayed ? (
          <Button
            variant="contained"
            size="small"
            onClick={handleGithubClick}
            sx={{
              backgroundColor: "#416DD1",
              gap: 1,
              width: { xs: "auto", lg: "100%" },
              height: { xs: "auto", lg: "100%" },
            }}
          >
            {t("github-view-here")}
            <LaunchIcon />
          </Button>
        ) : (
          <>
            <Button
              variant="disabled"
              size="small"
              onClick={handleGithubClick}
              sx={{
                backgroundColor: "#416DD1",
                gap: 1,
                width: { xs: "auto", lg: "100%" },
                height: { xs: "auto", lg: "100%" },
              }}
            >
              {t("github-view-here")}
              <LaunchIcon />
            </Button>
          </>
        )}

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 1,
            flexWrap: flexWrapValue,
            width: { xs: "auto", lg: "100%" },
            height: { xs: "auto", lg: "100%" },
          }}
        >
          {tags?.map((tag, index) => (
            <Button
              className="button-tag"
              key={index}
              variant="contained"
              size="small"
            >
              {t(tag.label)}
            </Button>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectCard;
