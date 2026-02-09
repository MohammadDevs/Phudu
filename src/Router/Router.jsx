import { createBrowserRouter, Link } from 'react-router'
import Root from '../Pages/Root/Root'
import Home from '../Pages/Home/Home'
import Bookings from '../Pages/Bookings/Bookings'
import Blogs from '../pages/Blogs/Blogs'
import Contacts from '../pages/Contacts/Contacts'
import Emergency from '../pages/Emergency/Emergency'
import DoctorsDetails from '../Doctors Details/DoctorsDetails'
import Loader from '../Components/Loader/Loader'


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <div className='text-center mt-48 md:mt-96'>
        <h4 className='text-3xl font-semibold'>No Doctor Found!!</h4>
        <p className='mb-12 font-thin'>No doctor Found with this Address</p>
        <Link to={'/'}><button className='btn bg-blue-600 hover:bg-blue-500 text-gray-100 rounded-xl text-2xl p-8 hover:text-white '>View All Doctors</button></Link>
    </div>,
    children:[
        {index: true, 
        Component: Home,
        hydrateFallbackElement: <Loader></Loader>,
        loader: ()=> fetch('../doctors.json')
        },
        {
            path: "/doctorsDetails/:id",
            Component: DoctorsDetails,
            hydrateFallbackElement: <p>Loading...</p>,
            loader: ()=> fetch('../doctors.json')
        },
        {
            path: "/bookings",
            Component: Bookings
        },
        {
            path: "/blogs",
            Component:Blogs,
            hydrateFallbackElement: <p>Loading...</p>,
            loader: ()=> fetch('/public/question.json')
        },
        {
            path: "/contacts",
            Component: Contacts
        },
        {
            path: "/emergency",
            Component: <Emergency></Emergency>
        },
        
    ]
  }
])