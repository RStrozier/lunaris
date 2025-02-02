import { useLoading } from "../context/LoadingContext";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const LoadingIndicator = () => {
  const { loading } = useLoading();

  if (!loading) return null; // Don't render anything if not loading

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
        zIndex: 1300, // To appear above everything
      }}
    >
      <CircularProgress size={60} color="primary" />
    </Box>
  );
};

export default LoadingIndicator;