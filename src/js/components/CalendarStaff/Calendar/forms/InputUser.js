import React, { useState } from "react";
import Profile from "../../UI/Profile/Profile";
const SelectUser = (props) => {
  const [selectedUser, setSelectedUser] = useState(props.users[0]);
  console.log(props.users);
  const handleProvider = (e) => {
    let user = props.users.find((user) => user.id == e.target.value);
    setSelectedUser(user);
    props.onHandleUser(user.id);
  };
  return (
    <div>
      <label>{props.label}</label>
      <div className="flex gap-2 items-center">
        <Profile
          alt={selectedUser.name[0]}
          imageURL={selectedUser.imageURL}
        ></Profile>
        <select
          onChange={handleProvider}
          className="border col-span-2 border-slate-2 p-2"
        >
          {props.users.map((user) => {
            return (
              <option value={user.id} key={user.id}>
                {user.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default SelectUser;
