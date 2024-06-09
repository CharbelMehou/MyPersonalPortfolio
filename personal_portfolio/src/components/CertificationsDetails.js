import { Box, Typography, Button } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import React from "react";
import { useTranslation } from "react-i18next";
import Csharp from "../assets/images/CsharpCertif.png";
import AWSCertif from "../assets/images/AWSCertif.png";
import ReactCertif from "../assets/images/ReactCertif.png";
import BoxDetails from "./BoxDetails";
import MicrosoftCsharpCertif from '../assets/images/MicrosoftCharpCertif.png';

const certifstab = [
  { logo: AWSCertif, label: "AWS Cloud Computing", link: 'https://www.credly.com/badges/916ba122-806f-423e-a245-df3edcfc65de/public_url' },
  { logo: MicrosoftCsharpCertif, label: "C#", link: 'https://urlz.fr/pUEw' },
  { logo: ReactCertif, label: "React.js", link: 'https://urlz.fr/nC41' },
  // { logo: Csharp, label: "C#", link: 'https://urlz.fr/nC3v' },
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
        {certifstab?.map((certif, index) => {
          if (certif.type === "credly") {
            return (
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
                <div
                  data-iframe-width="150"
                  data-iframe-height="270"
                  data-share-badge-id={certif.id}
                  data-share-badge-host="https://www.credly.com"
                  dangerouslySetInnerHTML={{
                    __html: '<script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>',
                  }}
                />
              </Box>
            );
          } else {
            return (
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
                  style={{ width: {xs:"auto",lg:"300px"}, height:"200px"}}
                />
                <Typography variant="h5" color="white">
                  {" "}
                  {t("certif-complete")} <span className="certif-label">{t(certif.label)}</span>
                </Typography>
                <Button
                  variant="contained"
                  onClick={() => window.open(certif.link, "_blank")}
                  size="small"
                  sx={{
                    backgroundColor: "#416DD1",
                    gap: 1,
                    width: { xs: "auto", lg: "200px" },
                    height: { xs: "auto", lg: "40px" },
                  }}
                >
                  {t("view-here")}
                  <LaunchIcon />
                </Button>
              </Box>
            );
          }
        })}
      </Box>
    </BoxDetails>
  );
};

export default CertificationsDetails;
