import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

const SurveySettings = ({ survey, deleteSurvey }) => {
  const dots = <FontAwesomeIcon icon={faEllipsisH} size={"lg"} />;
  const [collapse, setCollapse] = useState(true);
  const [linkCopied, setLinkCopied] = useState("Copy Link");
  const collapseMenu = () => {
    setCollapse(!collapse);
  };
  const confirmLinkCopy = () => {
    setLinkCopied("Copied");
  };

  return (
    <div className="flex relative cursor-pointer" onClick={collapseMenu}>
      {dots}
      {collapse ? (
        <div className="w-1/2 h-1/2"></div>
      ) : (
        <div className="absolute rounded-lg pt-3 w-24 h-32 bg-slate-300 dark:bg-slate-900 dark:border-slate-400 dark:border-2 dark:text-white">
          <div className="flex flex-col text-sm">
            <CopyToClipboard
              text={`http://localhost:3000/survey/${survey._id}`}
              //change text to website url once lauched
            >
              <span
                className="pl-3 hover:text-green-500  dark:hover:text-sky-500"
                onClick={() => {
                  confirmLinkCopy();
                }}
              >
                {linkCopied}
              </span>
            </CopyToClipboard>

            <a
              className="pt-3 pl-3 hover:text-green-500  dark:hover:text-sky-500"
              href={`/surveyedit/${survey._id}`}
            >
              Edit
            </a>
            <span
              className="pt-3 pl-3 hover:text-green-500  dark:hover:text-sky-500"
              id={survey._id}
              onClick={(e) => {
                deleteSurvey(e);
              }}
            >
              Delete
            </span>
            <span className="hidden">Eye</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SurveySettings;
