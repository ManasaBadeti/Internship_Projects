import { alpha, Box, Card, styled, Typography, useTheme } from "@mui/material";
const StyledCard = styled(Card)(({ theme }) => ({
  padding: "2rem 1.5rem",
  display: "flex",
  alignItems: "center",
  height: "100%",
  [theme.breakpoints.down("sm")]: {
    padding: "1.5rem",
    flexDirection: "column",
    justifyContent: "center",
    "& .MuiBox-root": {
      marginRight: 0,
      textAlign: "center",
    },
  },
}));

const SummaryCard = ({ data  }) => {
  const theme = useTheme();
  console.log(data)
  return (
    <StyledCard>
      <Box
        sx={{
          width: 60,
          height: 60,
          marginRight: 2,
          display: "flex",
          borderRadius: "50%",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: alpha(data.color, 0.2),
        }}
      >
        <data.Icon sx={{ color:data.color }} />
      </Box>
      <Box mt={{ xs: "1rem", sm: 0 }}>
        <Typography
            variant="h4"
            fontSize={18}
            fontWeight="500"
            color="text.disabled"
        >
            {data.title}
        </Typography>
        <Typography
            variant="h4"
            fontWeight="600"
            fontSize={22}
        >
            {data.price}
        </Typography>
      </Box>
    </StyledCard>
  );
};

export default SummaryCard;