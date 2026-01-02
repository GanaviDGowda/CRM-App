import { supabase } from '../supabase'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate() // ✅ inside component

  const login = async (e) => {
    e.preventDefault()

    const email = e.target.email.value
    const password = e.target.password.value

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      alert(error.message)
    } else {
      alert('Login successful')
      navigate('/dashboard')
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={login}>
        <input name="email" placeholder="Email" />
        <input name="password" type="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
