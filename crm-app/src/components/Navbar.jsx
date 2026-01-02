import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../supabase'

export default function Navbar() {
  const navigate = useNavigate()

  const logout = async () => {
    await supabase.auth.signOut()
    navigate('/login')
  }

  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand">
      <div className="container">
        <Link className="navbar-brand" to="/dashboard">
          CRM
        </Link>

        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">Dashboard</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/customers">Customers</Link>
          </li>

          {/* ✅ ADD CUSTOMER */}
          <li className="nav-item">
            <Link className="nav-link" to="/customers/add">Add Customer</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/followups">Follow-Ups</Link>
          </li>
        </ul>

        <button onClick={logout} className="btn btn-outline-light btn-sm">
          Logout
        </button>
      </div>
    </nav>
  )
}
