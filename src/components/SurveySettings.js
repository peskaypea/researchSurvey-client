import React, { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import "./SurveySettings.css";
const SurveySettings = ({ survey, deleteSurvey, subMenu, setSubMenu }) => {
  const dots = <FontAwesomeIcon icon={faEllipsisH} size={"lg"} />;

  const [linkCopied, setLinkCopied] = useState("Copy Link");
  const [collapse, setCollapse] = useState(subMenu);
  //if user click anywhere on page, close all survey settings buttons
  useEffect(() => {
    if (subMenu) {
      setCollapse(subMenu);
    }
  }, [subMenu]);
  const collapseMenu = (e) => {
    if (e.target.id === "copy") {
      return;
    }

    setCollapse((oldState) => {
      setSubMenu(!subMenu);
      return !oldState;
    });
  };
  const confirmLinkCopy = () => {
    setLinkCopied("Copied");
  };

  return (
    <div
      className="flex relative cursor-pointer"
      onClick={(e) => collapseMenu(e)}
    >
      {dots}
      {collapse ? (
        <div className="w-1/2 h-1/2"></div>
      ) : (
        <div className="absolute rounded-lg pt-3 w-24 h-32 text-black bg-green-600/[0.75] border-white border-2 dark:bg-slate-900 dark:border-slate-400 dark:border-2 dark:text-white">
          <div className="flex flex-col text-sm ">
            <CopyToClipboard
              text={`http://localhost:3000/survey/${survey._id}`}
              //change text to website url once lauched
            >
              <span
                className="pl-3 hover:text-white  dark:hover:text-sky-500 "
                id="copy"
                onClick={() => {
                  confirmLinkCopy();
                }}
              >
                {linkCopied}
              </span>
            </CopyToClipboard>

            <a
              className="pt-3 pl-3 hover:text-white  dark:hover:text-sky-500"
              href={`/surveyedit/${survey._id}`}
            >
              Edit
            </a>
            <span
              className="pt-3 pl-3 hover:text-white  dark:hover:text-sky-500"
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
