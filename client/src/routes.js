import Form from "./Components/Form";
import Home from "./Components/Home";
import RequireAuth from "./Components/RequireAuth";
import Signup from "./Components/Signup";

export let routes = [
    {
        path: '/',
        element: <RequireAuth><Home/></RequireAuth>
    },
    {
        path: '/resume/new',
        element: <RequireAuth><Form/></RequireAuth>
    },
    {
        path: '/signup',
        element: <Signup/>
    },
    {
        path: '/resume/show'
    }
]
