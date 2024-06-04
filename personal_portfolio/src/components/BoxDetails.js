import { Box, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
const BoxDetails = ({ id, title, children }) => {
  const { t } = useTranslation();

  return (
    <Box className="section-offset" id={id} sx={{ display: "flex", flexDirection: "column", mt: 2 }}>
      
      <Box className="title-box"sx={{py:1}}>
        <Typography variant="h5" className="title">
          {" "}
          {t(title)}
        </Typography>
      </Box>

      <Box
        className="bg-slate-900 bg-opacity-70 title-box section-box"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 2,borderRadius:'10px',
          mx: "12px",
          gap: 2,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default BoxDetails;
