import { supabase } from '../supabase'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
  const navigate = useNavigate()

  const signup = async (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value

    const { error } = await supabase.auth.signUp({ email, password })

    if (error) alert(error.message)
    else navigate('/dashboard')
  }

  return (
    <div className="card">
      <h2>Signup</h2>
      <form onSubmit={signup}>
        <input name="email" />
        <input name="password" type="password" />
        <button>Signup</button>
      </form>
    </div>
  )
}
