import { supabase } from '../supabase'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
  const navigate = useNavigate()

  const signup = async (e) => {
    e.preventDefault()

    const email = e.target.email.value
    const password = e.target.password.value

    const { error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (!error) {
      navigate('/login')
    }
  }

  return (
    <div className="container auth-container col-md-4">
      <div className="card auth-card p-4">
        <h3>Create Account</h3>

        <form onSubmit={signup}>
          <input
            className="form-control mb-3"
            name="email"
            placeholder="Email"
            required
          />

          <input
            type="password"
            className="form-control mb-3"
            name="password"
            placeholder="Password"
            required
          />

          <button className="btn btn-primary w-100">
            Sign Up
          </button>
          <p className="text-center mt-3">
  Already have an account?{' '}
  <a href="/login">Login</a>
</p>

        </form>
      </div>
    </div>
  )
}
