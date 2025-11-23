import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router"
import { setAmount, setCategory, setDifficulty, setType } from "../../slices/question.slice";
import React from "react";
import type { ICategory } from "../../types";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [categories, setCategries] = React.useState<ICategory[]>([])

  React.useEffect(() => {
    async function fetchCategory() {
      try {
        const res = await fetch('https://opentdb.com/api_category.php');
        const data = await res.json();
        setCategries(data.trivia_categories || [])
      } catch(err) {}
    }
    fetchCategory();
  }, [])

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
                label="category"
                onChange={(e) => {
                  dispatch(setCategory(e.target.value as number))
                }}
              >
                {categories.map(cate => (
                  <MenuItem key={cate.id} value={cate.id}>{cate.name}</MenuItem>
                ))}
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
                onChange={(e) => {
                  dispatch(setDifficulty(e.target.value as string))
                }}
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
                onChange={(e) => {
                  dispatch(setType(e.target.value as string))
                }}
              >
                <MenuItem value="multiple">Multiple Choice</MenuItem>
                <MenuItem value="boolean">True/False</MenuItem>
              </Select>
            </FormControl>
            <br /><br />

            <TextField 
              fullWidth 
              id="outlined-basic" 
              label="Amount of Question" 
              variant="outlined" 
              onChange={(e) => {
                dispatch(setAmount(Number(e.target.value)))
              }}
            />
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