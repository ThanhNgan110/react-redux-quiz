import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"

function Leaderboard() {
  return (
    <>
      <Box>
        <Typography variant="h4" align="center">
          Leaderboard
        </Typography>
      </Box>

      <Box sx={{ textAlign: 'end', mt: 3, mb: 3 }}>
        <Button variant="contained" type="submit" size="small">Export CSV</Button>
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
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  Tony
                </TableCell>
                <TableCell>Nguyen</TableCell>
                <TableCell>tony@gmail.com</TableCell>
                <TableCell>3</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

    </>
  )
}

export default Leaderboard