"use client";
import {
  ClassDataType,
  RespDataType,
  RespType,
} from "@/components/ProblemList/ProblemListTypes";
import { useState } from "react";
import { OptionType } from "@/components/UI/Select/SelectSearch";
import BasicSelect from "@/components/UI/Select/BasicSelect";
import DatePicker from "@/components/UI/CalendarPicker/DatePicker";

type ActionsSelectProps = {
  currentActionData: RespDataType;
  classData: ClassDataType[];
  loadedRespData: RespType[];
};

type StateType = {
  classOptions: OptionType[];
  selectedClassOption: OptionType;
  filteredActionData: RespType[];
  selectedActionOption: OptionType | null;
  selectedStatusOption: OptionType | null;
  selectedDate: Date | null;
  dateEnabled: boolean;
};

const ActionsSelects = ({
  currentActionData,
  classData,
  loadedRespData,
}: ActionsSelectProps) => {
  const [data, setData] = useState<StateType>(() => {
    const classOptions: OptionType[] = classData.map((single) => {
      return { label: single.classListName, value: single.classId };
    });
    const filterActionData = loadedRespData.filter((record) => {
      return record.classItemId === currentActionData.classItemId;
    });
    return {
      classOptions: classOptions,
      selectedClassOption: {
        label: currentActionData.classItemName,
        value: currentActionData.classItemId,
      },
      filteredActionData: filterActionData,
      selectedActionOption: {
        label: currentActionData.actionName,
        value: currentActionData.actionId,
      },
      selectedStatusOption: {
        label: currentActionData.statusName,
        value: currentActionData.statusId,
      },
      selectedDate: currentActionData.date,
      dateEnabled: !!currentActionData.date,
    };
  });

  const handleClassOptionChange = (value: string) => {
    console.log("class changed");
    const findClass = data.classOptions.find((record) => {
      return record.label === value;
    });
    const filterActionData = loadedRespData.filter((option) => {
      return option.classItemId === findClass?.value;
    });

    setData((prevState) => {
      return {
        ...prevState,
        selectedClassOption: findClass!,
        filteredActionData: filterActionData,
        selectedActionOption: null,
        selectedStatusOption: null,
        selectedDate: null,
        dateEnabled: false,
      };
    });
  };

  const handleActionChange = (value: string) => {
    const findRecord = data.filteredActionData.find((record) => {
      return (
        record.classItemId === data.selectedClassOption.value &&
        record.actionName === value
      );
    });
    if (!findRecord) {
      alert("Selected Options is not existing criteria to select!");
    } else {
      setData((prevState) => {
        return {
          ...prevState,
          selectedActionOption: {
            label: findRecord.actionName,
            value: findRecord.actionId,
          },
          selectedStatusOption: {
            label: findRecord.statusName,
            value: findRecord.statusName,
          },
          dateEnabled: findRecord.dateRequired,
          selectedDate: findRecord.dateRequired
            ? prevState.selectedDate ?? null
            : null,
        };
      });
    }
  };

  const classArray: string[] = data.classOptions.map((value) => value.label);

  const actionArray: string[] = data.filteredActionData.map((record) => {
    return record.actionName;
  });

  const handleDateChange = (value: any) => {
    console.log(value);
  };

  return (
    <>
      <BasicSelect
        id={"classItem"}
        label={"Select Class:"}
        defaultValue={data.selectedClassOption.value as string}
        onChange={handleClassOptionChange}
        valuesArray={classArray}
        emptyOption={false}
      />
      <BasicSelect
        key={data.selectedClassOption.label}
        id={"actionItem"}
        label={"Select Action:"}
        defaultValue={
          data.selectedActionOption ? data.selectedActionOption.label : "---"
        }
        onChange={handleActionChange}
        valuesArray={actionArray}
      />
      <DatePicker
        id={"date"}
        label={"Select Date:"}
        date={data.selectedDate ? data.selectedDate : undefined}
        disabled={!data.dateEnabled}
        onDateChange={handleDateChange}
      />
      <h3 className={"px-2 text-left"}>
        Status of Problem:{" "}
        {data.selectedStatusOption
          ? data.selectedStatusOption.label
          : "None: Need to select Action"}
      </h3>
      <input
        name={"classItemId"}
        type={"number"}
        value={
          data.selectedClassOption ? data.selectedClassOption.value : undefined
        }
        readOnly
        className={"hidden"}
      />
      <input
        name={"actionItemId"}
        type={"number"}
        value={
          data.selectedActionOption
            ? data.selectedActionOption.value
            : undefined
        }
        readOnly
        className={"hidden"}
      />
      <input
        name={"statusItemId"}
        type={"number"}
        value={
          data.selectedStatusOption
            ? data.selectedStatusOption.value
            : undefined
        }
        readOnly
        className={"hidden"}
      />
      <input
        name={"classItemId"}
        type={"date"}
        value={
          data.selectedDate
            ? data.selectedDate.toISOString().slice(0, 10)
            : undefined
        }
        readOnly
        className={"hidden"}
      />
    </>
  );
};

export default ActionsSelects;
