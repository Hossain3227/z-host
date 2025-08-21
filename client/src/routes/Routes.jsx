import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import RoomDetails from '../pages/RoomDetails/RoomDetails'
import PrivateRoute from './PrivateRoute'
import DashboardLayout from '../layouts/DashboardLayout'
import Statistics from '../pages/Dashboard/Common/Statistics'

import AddRoom from '../pages/Dashboard/Host/AddRoom'
import HostRoute from './HostRoute'
import MyListings from '../pages/Dashboard/Host/Mylistings'
import AdminRoute from './AdminRoute'
import ManageUsers from '../pages/Dashboard/Admin/ManageUsers'
import MyBookings from '../pages/Dashboard/Guest/MyBookings'
import ManageBookings from '../pages/Dashboard/Host/ManageBookings'
import Profile from '../pages/Dashboard/Common/Profile'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/room/:id',
        element: (
          <PrivateRoute>
            <RoomDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  {
    path:'/dashboard',
    element: <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>,
    children:[
      {
        index:true,
        element:<PrivateRoute>
            <Statistics />
          </PrivateRoute>,
      },
      {
        path:'add-room',
        element:<PrivateRoute>
            <HostRoute>
              <AddRoom />
            </HostRoute>
          </PrivateRoute>,
      },
      {
        path:'my-listings',
        element:<PrivateRoute>
            <HostRoute>
              <MyListings />
            </HostRoute>
          </PrivateRoute>,
      },
      {
        path: 'manage-users',
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageUsers />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: 'my-bookings',
        element: (
          <PrivateRoute>
            <MyBookings />
          </PrivateRoute>
        ),
      },
      {
        path: 'manage-bookings',
        element: (
          <PrivateRoute>
            <HostRoute>
              <ManageBookings />
            </HostRoute>
          </PrivateRoute>
        ),
      },
      {
        path: 'profile',
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
])
