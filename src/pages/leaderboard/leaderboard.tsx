import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import { CSVLink } from "react-csv";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";

function Leaderboard() {
  const members = useSelector((state: RootState) => state.leaderboard.members);

  return (
    <>
      <Box>
        <Typography variant="h4" align="center">
          Leaderboard
        </Typography>
      </Box>

      <Box sx={{ textAlign: 'end', mt: 3, mb: 3 }}>
        <CSVLink data={members}>
          <Button variant="contained" type="submit" size="small">
            Export CSV
          </Button>
        </CSVLink>
      </Box>
      
      <Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Score</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {members.map(member => (
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {member.firstName}
                  </TableCell>
                  <TableCell>{member.lastName}</TableCell>
                  <TableCell>{member.email}</TableCell>
                  <TableCell>{member.score}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

    </>
  )
}

export default Leaderboard