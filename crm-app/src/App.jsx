import { Routes, Route } from 'react-router-dom'
import Login from './auth/Login'
import Signup from './auth/Signup'
import Dashboard from './dashboard/Dashboard'
import ProtectedRoute from './auth/ProtectedRoute'
import AddCustomer from './customers/AddCustomer'
import CustomerList from './customers/CustomerList'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
  path="/customers"
  element={
    <ProtectedRoute>
      <CustomerList />
    </ProtectedRoute>
  }
/>

<Route
  path="/customers/add"
  element={
    <ProtectedRoute>
      <AddCustomer />
    </ProtectedRoute>
  }
/>

    </Routes>
  )
}
