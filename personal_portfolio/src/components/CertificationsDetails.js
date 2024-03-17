import { Box, Typography,Button } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import React from "react";
import { useTranslation } from "react-i18next";
import Csharp from "../assets/images/CsharpCertif.png";
import JavaScript from "../assets/images/JavascriptCertif.png";
import ReactCertif from "../assets/images/ReactCertif.png";
import BoxDetails from "./BoxDetails";
import Node from '../assets/images/NodeJs.png'
import MicrosoftCsharpCertif from '../assets/images/MicrosoftCharpCertif.png'

const certifstab = [
  { logo: MicrosoftCsharpCertif, label: "C#",link:'https://urlz.fr/pUEw'},
  { logo: ReactCertif, label: "React.js" ,link:'https://urlz.fr/nC41'},
  { logo: JavaScript, label: "Javascript",link:'https://urlz.fr/nC3C' },
  { logo: Csharp, label: "C#",link:'https://urlz.fr/nC3v'},
  //{ logo: Node, label: "Node.js",link:'https://cutt.ly/GwbUeUAQ'},
];
const CertificationsDetails = () => {
  const { t } = useTranslation();
  return (
    <BoxDetails
      className="section-offset"
      id="certifications"
      title="certifications"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: { xs: "wrap", lg: "nowrap" },
          flexGrow: 1,
          gap: 2,
          width: { xs: "100%", lg: "auto" },
        }}
      >
        {certifstab?.map((certif, index) => (
          <Box
            className="certifCard"
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <img
              className="certifCard-img"
              src={certif.logo}
              alt="certif"
            ></img>
            <Typography variant="h5" color="white">
              {" "}
              {t("certif-complete")} {t(certif.label)}
            </Typography>
            <Button
              variant="contained"
              onClick={() => window.open(certif.link, "_blank")}
              size="small"
              sx={{
                backgroundColor: "#416DD1",
                gap: 1,
                width: { xs: "auto", lg: "100%" },
                height: { xs: "auto", lg: "100%" },
              }}
            >
              {t("view-here")}
              <LaunchIcon />
            </Button>
          </Box>
        ))}
      </Box>
    </BoxDetails>
  );
};

export default CertificationsDetails;
