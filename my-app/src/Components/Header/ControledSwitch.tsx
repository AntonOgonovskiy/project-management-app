import { Switch } from "@mui/material";
import React from "react";

const ControledSwitch = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return <Switch checked={checked} onChange={handleChange} color="default" />;
};

export default ControledSwitch;
