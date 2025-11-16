import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router";
import Dashboard from './pages/dashboard';
import Question from "./pages/question/question";
import Leaderboard from "./pages/leaderboard";
import FinalScore from "./pages/final-score";
import Template1 from "./components/template/template1";


// function Root() {
//   return (
//     <div>
//       this is root
//       <Outlet />
//     </div>
//   )
// }

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      Component: Template1,
      children: [
        { index: true, element: <Navigate to="/dashboard" /> },
        { path: '/dashboard', Component: Dashboard },
        { path: '/question', Component: Question },
        { path: '/leader-board', Component: Leaderboard },
        { path: '/final-score', Component: FinalScore }
      ]
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
