import { Box, Button, Typography } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import React from "react";
import { useTranslation } from "react-i18next";
const ProjectDescriptionSpeech = ({
  title,
  vercelLink,
  vercelLinkdisplayed,
  githubLink,
  githubLinkdisplayed,
  descriptions,
  tags,
}) => {
  const { t } = useTranslation();
  const flexWrapValue = tags?.length > 2 ? "wrap" : "nowrap";

  const handleVercelClick = () => {
    window.open(vercelLink, "_blank");
  };
  const handleGithubClick = () => {
    window.open(githubLink, "_blank");
  };
  return (
    <Box
      className=" projectDescription bg-slate-900"
      sx={{ display: "flex", flexDirection: "column" }}
    >
      <Box sx={{ mb: 1 }}>
        <Typography
          variant="h4"
          style={{
            color: "white",
            fontWeight: "bold",
          }}
        >
          {t(title)}
        </Typography>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1, p: 1 }}>
        {descriptions?.map((description, index) => (
          <Typography variant="h6" key={index} style={{ color: "white" }}>
            {t(description.label)}
          </Typography>
        ))}
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", gap: 1, my: 1 }}>
        {vercelLinkdisplayed ? (
          <Button
            variant="contained"
            onClick={handleVercelClick}
            size="small"
            sx={{
              backgroundColor: "#416DD1",
              gap: 1,
              width: "auto",
              height: "auto",
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
                width: "auto",
                height: "auto",
              }}
            >
              {t("not-deployed")}
              <LaunchIcon />
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
              width: "auto",
              height: "auto",
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
                width: "auto",
                height: "auto",
              }}
            >
              {t("github-view-here")}
              <LaunchIcon />
            </Button>
          </>
        )}
      </Box>
      <Typography variant="h6" style={{ color: "white", fontWeight: "bold" }}>
        {t("technology")}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 1,
          mt: 1,
          flexWrap: flexWrapValue,
        }}
      >
        {tags &&
          tags?.map((tag, index) => (
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
  );
};

export default ProjectDescriptionSpeech;
