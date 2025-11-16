import { Container } from '@mui/material'
import Header from '../header'
import { Outlet } from 'react-router'

function Template1() {
  return (
    <>
      <Header />

      <Container maxWidth="md">
        <Outlet />
      </Container>
    </>
  )
}

export default Template1