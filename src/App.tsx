import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./routes/ErrorPage";
import Tasks from "./routes/Tasks";
import Dashboard from "./routes/Dashboard";
import Root from "./routes/Root";

const App = () => {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<Dashboard />} />
            <Route path="tasks" element={<Tasks />} />
            <Route path="*" element={<ErrorPage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;