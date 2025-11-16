import { Box, Button, TextField, Typography } from "@mui/material"
import { useNavigate } from "react-router";

function FinalScore() {
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    navigate('/leader-board')
  }

  return (
    <>
      <Box>
        <Typography variant="h4" align="center">
          Final Score
        </Typography>
      </Box>

      <Box sx={{ mt: 5 }}>
        <form onSubmit={handleSubmit}>
          <TextField fullWidth id="firstName" label="First Name" variant="standard" />
          <br /><br/>
          <TextField fullWidth id="lastName" label="Last Name" variant="standard" />
          <br /><br/>
          <TextField fullWidth id="email" label="Email" variant="standard" />

          <Box sx={{ textAlign: 'end', mt: 3 }}>
            <Button variant="contained" type="submit" size="small">Submit</Button>
          </Box>
        </form>
      </Box>
    </>
  )
}

export default FinalScore