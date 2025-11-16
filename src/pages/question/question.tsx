import { Box, Button, Typography } from "@mui/material"
import { useNavigate } from "react-router";

function Question() {
  const navigate = useNavigate();

  function handleAnswer() {
    navigate('/final-score')
  }

  return (
    <>
      <Box>
        <Typography variant="h4" align="center">
          Question
        </Typography>
      </Box>

      <Box sx={{ mt: 5 }}>
        <Typography variant="body1">
          What was the first James Bond film?
        </Typography>
      </Box>

      <Box sx={{ mt: 2 }}>
        <Button
          fullWidth
          variant="contained"
          sx={{ mb: 2 }}
          onClick={handleAnswer}
        >
          Morning
        </Button>
       <Button
          fullWidth
          variant="contained"
          sx={{ mb: 2 }}
          onClick={handleAnswer}
        >
          Tomorrow
        </Button>
        <Button
          fullWidth
          variant="contained"
          sx={{ mb: 2 }}
          onClick={handleAnswer}
        >
          Evening
        </Button>
        <Button
          fullWidth
          variant="contained"
          onClick={handleAnswer}
        >
          Afternoon
        </Button>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
        <Typography variant="body1" align="center">
          Score: 1/5
        </Typography>

        <Typography variant="body1" align="center">
          Timer: 0:30
        </Typography>
      </Box>
    </>
  )
}

export default Question