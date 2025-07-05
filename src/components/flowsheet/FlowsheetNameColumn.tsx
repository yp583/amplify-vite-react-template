import React from "react";
import {
  CollapsedRows,
  CollapsibleConfig,
  FlowsheetInstance,
} from "../../AltrixDataModels";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
interface FlowsheetNameColumnProps {
  flowsheetInstance: FlowsheetInstance;
  collapsibleConfig: CollapsibleConfig;
  collapsedRows: CollapsedRows;
  setCollapsedRows: (rows: CollapsedRows) => void;
}

const FlowsheetNameColumn = ({
  flowsheetInstance,
  collapsibleConfig,
  collapsedRows,
  setCollapsedRows,
}: FlowsheetNameColumnProps) => {
  return (
    <div className="w-3/9 h-fit flex flex-col justify-start items-center">
      {Object.entries(flowsheetInstance.groups).map(([groupId, group]) => (
        <React.Fragment key={groupId}>
          <div className="h-14 px-6 w-full border-t-4 border-primary flex items-center justify-start">
            <span className="font-primary text-nowrap text-flowsheet-group-header text-lg font-semibold">
              {group.name}
            </span>
          </div>
          <div key={groupId} className="w-full h-fit">
            {Object.entries(group.observations).map(
              ([observationId, observation]) => {
                if (collapsedRows.collapsed[observation.code]) {
                  return null;
                }

                // let indentationLevel = 0;
                // Object.entries(collapsibleConfig.config).forEach(([parentCode, config]) => {
                //   if (config.includes(observation.code)) {
                //     indentationLevel++;
                //   }
                // });

                return (
                  <div
                    key={observationId}
                    className={`font-primary w-full h-8 px-6 text-center border-1 border-separator flex items-center justify-between`}
                    onClick={() => {
                      const updatedCollapsedRows = collapsedRows;
                      const connectedIds =
                        collapsibleConfig?.config[observation.code] || [];

                      let collapsedChildren = true;

                      for (const observationId of connectedIds) {
                        if (!collapsedRows.collapsed[observationId]) {
                          collapsedChildren = false;
                        }
                      }

                      for (const observationId of connectedIds) {
                        updatedCollapsedRows.collapsed[observationId] =
                          !collapsedChildren;
                      }

                      setCollapsedRows({ ...updatedCollapsedRows });
                    }}
                  >
                    <span className="text-ellipsis overflow-hidden text-nowrap">
                      {observation.displayName}
                    </span>
                    {collapsibleConfig.config[observation.code]?.length > 0 && (
                      <ChevronUpIcon
                        className={`transition-primary duration-100 w-4 h-4 ${collapsedRows.collapsed[collapsibleConfig.config[observation.code][0]] ? "rotate-180" : ""}`}
                      />
                    )}
                  </div>
                );
              },
            )}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};
export default FlowsheetNameColumn;
