import { Box } from "@mui/material";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import FeatureCards from "../components/FeatureCard";
import SecondaryNavBar from "../components/SecondaryNavBar";

const HomeScreen = () => {
    return (
        <Box
            sx={{
                bgcolor: "background.paper",
                display: "flex",
                justifyContent: "center",
                width: "100%",
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    minHeight: "100vh",
                    backgroundImage: "url('/backgroundImage.svg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                    color: "white",
                }}
            >
                <NavBar />
                <SecondaryNavBar />
                <HeroSection />
                <FeatureCards />
            </Box>
        </Box>
    );
};

export default HomeScreen;
