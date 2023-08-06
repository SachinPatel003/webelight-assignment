import React from "react";
import PropTypes from "prop-types";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  StyledAccordion,
  StyledAccordionDetails,
  StyledAccordionSummary,
} from "./style";

const CommonAccordion = ({
  accordionSummary,
  accordionDetails,
  expanded,
  handleChange,
  panel,
}) => {
  const handleAccordionChange = () => {
    handleChange();
  };

  return (
    <StyledAccordion
      expanded={expanded}
      key={panel}
      onChange={handleAccordionChange}
    >
      <StyledAccordionSummary
        expandIcon={<ExpandMoreIcon fontSize="large" />}
        aria-controls={`${panel}-content`}
        id={panel}
      >
        {accordionSummary}
      </StyledAccordionSummary>
      <StyledAccordionDetails>{accordionDetails}</StyledAccordionDetails>
    </StyledAccordion>
  );
};

CommonAccordion.propTypes = {
  expanded: PropTypes.bool,
  accordionTitle: PropTypes.string,
  handleChange: PropTypes.func,
  panel: PropTypes.string,
  children: PropTypes.node,
};

CommonAccordion.defaultProps = {
  expanded: false,
  accordionTitle: "",
  handleChange: () => {},
  panel: "",
  children: <div />,
};

export default CommonAccordion;
