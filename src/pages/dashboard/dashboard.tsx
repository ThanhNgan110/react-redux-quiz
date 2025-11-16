import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import { useNavigate } from "react-router"

function Dashboard() {
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    navigate('/question');
  }

  return (
    <>
      <Box>
        <Typography variant="h4" align="center">
          Quiz App
        </Typography>

        <form onSubmit={handleSubmit}>
          <Box sx={{ margin: '20px 0'}}>
            <FormControl fullWidth>
              <InputLabel id="select-category">Category</InputLabel>
              <Select
                labelId="select-category"
                id="select-category"
                // value={age}
                label="category"
                // onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <br /><br />

            <FormControl fullWidth>
              <InputLabel id="select-difficulty">Difficulty</InputLabel>
              <Select
                labelId="select-difficulty"
                id="select-difficulty"
                // value={age}
                label="difficulty"
                // onChange={handleChange}
              >
                <MenuItem value="easy">Easy</MenuItem>
                <MenuItem value="medium">Medium</MenuItem>
                <MenuItem value="hard">Hard</MenuItem>
              </Select>
            </FormControl>
            <br /><br />

            <FormControl fullWidth>
              <InputLabel id="select-type">Type</InputLabel>
              <Select
                labelId="select-type"
                id="select-type"
                // value={age}
                label="type"
                // onChange={handleChange}
              >
                <MenuItem value="multiple">Multiple Choice</MenuItem>
                <MenuItem value="boolean">True/False</MenuItem>
              </Select>
            </FormControl>
            <br /><br />

            <TextField fullWidth id="outlined-basic" label="Amount of Question" variant="outlined" />
          </Box>

          <Box sx={{ textAlign: 'center' }}>
            <Button variant="contained" type="submit">Submit</Button>
          </Box>
        </form>
      </Box>
    </>
  )
}

export default Dashboard