import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

export default function CurrencyExchangeTable() {
  return (
    <TableContainer
      sx={{ alignSelf: "center" }}
      elevation={0}
      component={Paper}
    >
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="left">COIN</TableCell>
            <TableCell align="left">CURRENCY</TableCell>
            <TableCell align="left">PRICE</TableCell>
            <TableCell align="left">CHANGE</TableCell>
            <TableCell align="left">TRADE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow
            key={"eth"}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              Eth
            </TableCell>
            <TableCell align="left">USD</TableCell>
            <TableCell align="left">$ 29046.680</TableCell>
            <TableCell align="left">+0.0015 %</TableCell>
            <TableCell align="left">
              <Button size={"small"}>Buy</Button>
            </TableCell>
          </TableRow>
          <TableRow
            key={"btc"}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              Bitcoin
            </TableCell>
            <TableCell align="left">USD</TableCell>
            <TableCell align="left">$ 29046.680</TableCell>
            <TableCell align="left">+0.0015 %</TableCell>
            <TableCell align="left">
              <Button size={"small"}>Buy</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
