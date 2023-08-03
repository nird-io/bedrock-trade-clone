import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function BasicSelect({ label }: { label: string }) {
  const [currency, setCurrency] = React.useState(label);

  const handleChange = (event: SelectChangeEvent) => {
    setCurrency(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel className="text-slate-50" id="demo-simple-select-label">
          {label}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={currency}
          label={label}
          onChange={handleChange}
          size={"small"}
          sx={{ backgroundColor: "#4285F4", color: "#fff" }}
        >
          <MenuItem value={"eur"}>EUR</MenuItem>
          <MenuItem value={"usd"}>USD</MenuItem>
          <MenuItem value={"ghs"}>GHS</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
