import React from 'react';
import {Button, ButtonProps} from "@mui/material";


const AppButton = ({ children,...rest} : ButtonProps) => {
  return <Button style={{backgroundColor: "#222328", fontSize: 12, fontWeight: 300, padding: 10, paddingLeft:40, paddingRight: 40}} color="secondary" variant="contained" {...rest}>{children}</Button>
};

export default AppButton;
