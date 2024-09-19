import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Login from "./Login"
import TaskManager from "./Task"

const browserRouter = createBrowserRouter(createRoutesFromElements(
    <Route path='/'>
        <Route index element={<TaskManager />} />
        <Route path='/login' element={<Login />}/>
    </Route>
))

function App() {
    return (
        <>
        <RouterProvider router= {browserRouter} />
        </>
    )
}

export default App
