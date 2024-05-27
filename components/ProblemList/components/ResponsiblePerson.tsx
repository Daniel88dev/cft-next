"use client";

import { RespUsers } from "@/components/ProblemList/ProblemListTypes";
import { useState } from "react";
import SelectSearch, { OptionType } from "@/components/UI/Select/SelectSearch";

type ResponsiblePersonProps = {
  users: RespUsers[];
  userId: number;
  userName: string;
};

type StateType = {
  users: OptionType[];
  selectedUser: OptionType;
};

const ResponsiblePerson = ({
  users,
  userId,
  userName,
}: ResponsiblePersonProps) => {
  const [userData, setUserData] = useState<StateType>(() => {
    const userArray: OptionType[] = users.map((user) => {
      return { value: user.userId, label: user.userName };
    });
    return {
      users: userArray,
      selectedUser: { value: userId, label: userName },
    };
  });

  const handleUserSelect = (value: OptionType | null) => {
    if (value) {
      setUserData((prevState) => {
        return {
          ...prevState,
          selectedUser: value,
        };
      });
    }
  };

  return (
    <>
      <SelectSearch
        options={userData.users}
        onSelect={handleUserSelect}
        label={"Select Responsible person:"}
        defaultValue={userData.selectedUser}
        clearable={false}
      />
      <input
        name={"selectedUser"}
        value={userData.selectedUser.value}
        className={"hidden"}
        readOnly
      />
    </>
  );
};

export default ResponsiblePerson;
