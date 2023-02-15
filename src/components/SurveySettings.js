import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

const SurveySettings = ({ survey }) => {
  const dots = <FontAwesomeIcon icon={faEllipsisH} size={"lg"} />;
  const [collapse, setCollapse] = useState(true);
  const collapseMenu = () => {
    setCollapse(!collapse);
  };

  return (
    <div className="flex relative" onClick={collapseMenu}>
      {dots}
      {collapse ? (
        <div className="w-1/2 h-1/2"></div>
      ) : (
        <div className="absolute w-20 h-40 bg-red-500">
          <div className="flex flex-col">
            <a href="">Copy Link</a>
            <a href={`/surveyedit/${survey._id}`}>Edit</a>
            <a
              id={survey._id}
              onClick={(e) => {
                deleteSurvey(e);
              }}
            >
              Delete
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default SurveySettings;
