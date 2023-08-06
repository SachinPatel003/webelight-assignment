import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CommonAccordion from "./Accordion";
import { gitApi } from "../../store/appApi";
import { useGetAdditionsDeletionsQuery } from "../../store/api/gitApi";

const AccordionContainer = ({
  accordionSummary,
  accordionDetails,
  panel,
  owner,
  repoName,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = () => {
    setExpanded(!expanded);
  };

  const additionsDeletionsEndPoint = gitApi.endpoints.getAdditionsDeletions;
  const [getAddDel, { data: addDelData }] =
    additionsDeletionsEndPoint.useLazyQuery();

  useEffect(() => {
    if (expanded) {
      getAddDel({ owner, repoName });
    }
  }, [expanded]);

  console.log("addDelData", addDelData);

  return (
    <CommonAccordion
      accordionSummary={accordionSummary}
      accordionDetails={accordionDetails}
      expanded={expanded}
      handleChange={handleChange}
      panel={panel}
    />
  );
};

AccordionContainer.propTypes = {
  accordionTitle: PropTypes.string,
  panel: PropTypes.string,
  children: PropTypes.node,
};

AccordionContainer.defaultProps = {
  accordionTitle: "",
  panel: "",
  children: <div />,
};

export default AccordionContainer;
