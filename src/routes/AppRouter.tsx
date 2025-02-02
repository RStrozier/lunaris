import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Layout from "../components/Layout";
import TaskDisplay from "../components/user-tasks/TaskDisplay";

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/task-display" element={<TaskDisplay />} />
          {/* catch-all route */}
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default AppRouter