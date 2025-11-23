import { Box, Button, TextField, Typography } from "@mui/material"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import type { RootState } from "../../store";

function FinalScore() {
  const navigate = useNavigate();
  const score = useSelector((state: RootState) => state.question.score)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    navigate('/leader-board')
  }

  return (
    <>
      <Box>
        <Typography variant="h4" align="center">
          Final Score: {score}
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