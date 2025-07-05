import { useEffect, useState } from "react";
import Select, { SingleValue, StylesConfig } from "react-select";
import { FlowsheetConfig } from "../../AltrixDataModels";
import { useAppData } from "../../hooks/useAppData";

type OptionType = {
  value: string;
  label: string;
};

const FlowsheetPageHeader = () => {
  const {
    supportedFlowsheetConfigs,
    selectedPatient,
    getSelectedFlowsheetConfig,
    setSelectedFlowsheetConfigId,
  } = useAppData();
  const [options, setOptions] = useState<OptionType[]>([]);
  const [selectedOption, setSelectedOption] =
    useState<SingleValue<OptionType>>();

  useEffect(() => {
    setOptions(
      supportedFlowsheetConfigs.map((fs: FlowsheetConfig) => {
        return { value: fs.id, label: fs.name };
      }),
    );

    const defaultSelectedOption = getSelectedFlowsheetConfig();
    setSelectedOption({value: defaultSelectedOption?.id || "", label: defaultSelectedOption?.name || ""});
  }, [supportedFlowsheetConfigs, getSelectedFlowsheetConfig]);

 

  const customStyles: StylesConfig<OptionType, false> = {
    control: (base: any) => ({
      ...base,
      backgroundColor: "#e3e7ee",
      borderRadius: "9999px",
      fontWeight: "500",
      boxShadow: "none",
      "&:hover": {
        borderColor: "#6a77d6",
      },
      display: "flex",
      paddingInline: "8px",
      height: "24px",
      fontSize: "16px",
      alignItems: "center",
      justifyContent: "center",
    }),
    option: (base: any, state: any) => ({
      ...base,
      backgroundColor: state.isSelected ? "#b8c0f5" : "#e3e7ee",
      color: "#1e293b",
      paddingInline: "8px",
      display: "flex",
      height: "28px",
      alignItems: "center",
      fontSize: "16px",
      borderRadius: "4px",
    }),
  };

  return (
    <div className="flex justify-between px-6 items-center w-full h-1/8 border-b border-separator px-4 py-2">
      <p className="text-[32px] text-dark-text font-semibold">
        {selectedPatient.last}, {selectedPatient.first}
      </p>
      <Select
        value={selectedOption}
        onChange={(value) => {
          setSelectedOption(value);
          if (value) {
            setSelectedFlowsheetConfigId(value.value);
          }
        }}
        styles={customStyles}
        options={options}
        className="w-64"
        placeholder="Select Sheet:"
      />
    </div>
  );
};

export default FlowsheetPageHeader;
