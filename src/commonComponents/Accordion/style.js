import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledAccordion = styled(Accordion)(({ theme }) => ({
  overflow: "hidden",
  borderRadius: "0.6rem",
  boxShadow: "none",
  border: `1px solid lightGrey`,
}));

export const StyledAccordionSummary = styled(AccordionSummary)(
  ({ theme }) => ({})
);

export const StyledAccordionDetails = styled(AccordionDetails)(
  ({ theme }) => ({})
);
