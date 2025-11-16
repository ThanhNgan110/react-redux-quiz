import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router'

function Header() {
  const navigate = useNavigate();

  function gotoLeaderboard() {
    navigate('/leader-board')
  }

  function gotoHome() {
    navigate('/')
  }

  return (
    <Box sx={{ flexGrow: 1, marginBottom: 5}}>
      <AppBar position='static'>
        <Toolbar>
          <Typography
            variant='h6'
            component="div"
            sx={{ flexGrow: 1, cursor: 'pointer' }}
            onClick={gotoHome}
          >
            Quiz App
          </Typography>
          <Button color="inherit" onClick={gotoLeaderboard}>LEADER BOARD</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header