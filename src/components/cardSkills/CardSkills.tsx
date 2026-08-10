import Box from "@mui/material/Box";

interface CardSkillsProps {
  skillName: string;
  skillImage: string;
}

function CardSkills({ skillName, skillImage }: CardSkillsProps) {
  return (
    <Box
      sx={{
        width: "100%",
        aspectRatio: "1",
        minWidth: 100,
        borderRadius: 1,
        bgcolor: "#3e4f52b7",
        "&:hover": {
          bgcolor: "#2e4a66",
        },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        p: 1,
      }}
    >
      <img
        src={skillImage}
        alt={skillName}
        style={{ width: 40, height: 40, marginBottom: 8 }}
      />
      <span
        style={{
          color: "#fff",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "center",
        }}
      >
        {skillName}
      </span>
    </Box>
  );
}

export default CardSkills;
