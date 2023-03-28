import React, { useEffect } from "react";
import { selectStation, useAppStore } from "../../store/slices/appStoreSlice";

function DropDown({ name, options, onChange, defaultValue }) {
  return (
    <select
      name={name}
      onChange={onChange}
      {...(defaultValue && { defaultValue })}
    >
      {options?.map((option) => (
        <option key={option} label={option} value={option} />
      ))}
    </select>
  );
}

export default DropDown;
