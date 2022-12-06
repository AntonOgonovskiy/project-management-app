import { Switch } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const ControledSwitch = () => {
  const defValue =
    localStorage.getItem("lang") === "EN" ||
    localStorage.getItem("lang") === null
      ? false
      : true;
  const [checked, setChecked] = React.useState(defValue);
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  const setLang = () => {
    if (checked) {
      dispatch({ type: "LANG", payload: "RU" });
      localStorage.setItem("lang", "RU");
    } else {
      dispatch({ type: "LANG", payload: "EN" });
      localStorage.setItem("lang", "EN");
    }
  };
  useEffect(() => {
    setLang();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);

  return <Switch checked={checked} onChange={handleChange} color="default" />;
};

export default ControledSwitch;
