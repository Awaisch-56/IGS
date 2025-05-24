import { Grid, Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const HeroSection = () => {
  return (
    <Grid
      container
      spacing={4}
      alignItems="center"
      direction={{ xs: "column", md: "row" }}
      sx={{ mt: { xs: 5, md: 10 }, width: "100%", px: 2, justifyContent: { xs: "center", sm: "center", md: "space-between" } }}
    >
      <Grid item xs={12} md={6} sx={{ display: "flex", gap: 4 }}>
        <Grid
          item
          xs={12}
          md={1}
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "flex",
            },
            flexDirection: "column",
            gap: 2,
            width: "10px",
            alignItems: "flex-start",
            justifyContent: "center",
            mx: 2,
          }}
        >
          <Box sx={{ width: "100%", height: "91px", bgcolor: "#2d53a4" }} />
          <Box sx={{ width: "100%", height: "91px", bgcolor: "#393939" }} />
        </Grid>
        <Grid sx={{ maxWidth: 600, textAlign: { xs: "center", sm: "center", md: "left" } }}>
          <Typography
            component="h1"
            gutterBottom
            sx={{
              fontWeight: "bold",
              mb: 3,
              fontSize: { xs: "16px", sm: "26px", md: "32px" },
            }}
          >
            IIGS exemplifies its dedication to sustainability through
            innovative procurement and supply chain practices that boost
            operational efficiency and drive industry-leading innovation
          </Typography>
          <Typography
            sx={{
              mb: 4,
              fontSize: { xs: "0.85rem", sm: "1rem" },
            }}
          >
            IIGS is committed to delivering high-quality products on time,
            every time.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            endIcon={<ArrowForwardIcon />}
            sx={{
              bgcolor: "white",
              color: "#2d53a4",
              "&:hover": { bgcolor: "#f5f5f5" },
              textTransform: "uppercase",
              fontWeight: "bold",
              px: 3,
              py: 1,
              fontSize: { xs: "0.7rem", sm: "0.85rem", md: "0.9rem" },
            }}
          >
            Book a Meeting
          </Button>
        </Grid>
      </Grid>

      {/* Image section */}
      <Grid item xs={12} md={5}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: { xs: 3, md: 0 },
          }}
        >
          <img
            src="/heroSection.svg"
            alt="hero section"
            style={{ width: "100%", maxWidth: "600px" }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default HeroSection;
