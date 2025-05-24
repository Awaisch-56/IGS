import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const featureCards = [
  {
    title: "Expertly crafted solutions with global reach",
    description:
      "Our procurement and supply chain processes enhance operations for your organization's success.",
    cta: "Let's Co-Create",
  },
  {
    title: "Strategic, collaborative, and driven",
    description:
      "We leverage innovative strategies and cutting-edge technology to streamline our processes.",
    cta: "Business Process Outsourcing",
  },
  {
    title: "Fresh perspective for continuous transformation",
    description:
      "Expert teams to develop groundbreaking solutions Yes, we can do it even better",
    cta: "Direct Procurement",
  },
];

const FeatureCards = () => {
  return (
    <Box sx = {{width: "90%", margin : "auto"}}>
      <Typography
        variant="subtitle1"
        sx={{
          mt: 4,
          mb: 4,
          fontStyle: "italic",
          fontSize: { xs: "0.75rem", sm: "0.8rem", md: "0.875rem" },
        }}
      >
        Seamless Solutions, Endless Possibilities
      </Typography>

        <Box
          sx={{
          mb: 4,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
            justifyContent: "space-between",
          }}
        >
          {featureCards.map((card, index) => (
            <Box
              key={index}
              sx={{
                borderRadius: 2,
                width: "100%",
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                height: "auto", 
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  my: 1,
                  mx: 2,
                  fontWeight: "bold",
                  fontSize: { xs: "0.8rem", sm: "0.85rem", md: "0.9rem" },
                  mb: 1,
                }}
              >
                {card.title}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  mx: 2,
                  fontSize: { xs: "0.7rem", sm: "0.75rem" },
                  mb: 2,
                }}
              >
                {card.description}
              </Typography>

              <Button
                endIcon={<ArrowForwardIcon />}
                sx={{
                  mx: 2,
                  mb:1,
                  color: "#ff5722",
                  p: 0,
                  textTransform: "none",
                  fontSize: { xs: "0.7rem", sm: "0.75rem" },
                }}
              >
                {card.cta}
              </Button>
            </Box>
          ))}
        </Box>
    </Box>
  );
};

export default FeatureCards;
