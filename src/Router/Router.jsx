import { createBrowserRouter } from 'react-router'
import Root from '../Pages/Root/Root'
import Home from '../Pages/Home/Home'
import Bookings from '../Pages/Bookings/Bookings'
import Blogs from '../pages/Blogs/Blogs'
import Contacts from '../pages/Contacts/Contacts'
import Emergency from '../pages/Emergency/Emergency'


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <p>Error 404</p>,
    children:[
        {index: true, 
        Component: Home,
        hydrateFallbackElement: <p>Loading...</p>,
        loader: ()=> fetch('doctors.json')
        },
        {
            path: "/bookings",
            hydrateFallbackElement: <p>Loading...</p>,
            loader: ()=> fetch('doctors.json'),
            Component: Bookings
        },
        {
            path: "/blogs",
            Component:Blogs
        },
        {
            path: "/contacts",
            Component: Contacts
        },
        {
            path: "/emergency",
            Component: Emergency
        },
        
    ]
  }
])