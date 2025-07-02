import { styled } from "@mui/material";
import { ReactNode } from "react";

interface StyledButtonProps {
    children: ReactNode;  
    onClick: () => void;
}

function StyledButton({ children, onClick }: StyledButtonProps) {

    const StyledButton = styled("button")(({theme}) => ({
        backgroundColor: "transparent",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "0.3rem",
        padding: "0.4rem 0.8rem",
        width: "100%",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        color: theme.palette.primary.contrastText,
        '&:hover': {
            backgroundColor: theme.palette.secondary.dark,
        },
        cursor: "pointer",
    }))

    return (
       <StyledButton onClick={onClick}>
              {children}
       </StyledButton>
    );
}

export default StyledButton;