import { supabase } from '../supabase'
import { useNavigate } from 'react-router-dom'

export default function AddCustomer() {
  const navigate = useNavigate()

  const addCustomer = async (e) => {
    e.preventDefault()
    const { data: { user } } = await supabase.auth.getUser()

    const { error } = await supabase.from('customers').insert({
      user_id: user.id,
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      status: e.target.status.value,
      notes: e.target.notes.value
    })

    if (error) alert(error.message)
    else navigate('/customers')
  }

  return (
    <div className="card">
      <h2>Add Customer</h2>
      <form onSubmit={addCustomer}>
        <input name="name" placeholder="Name" />
        <input name="email" placeholder="Email" />
        <input name="phone" placeholder="Phone" />
        <select name="status">
          <option>Lead</option>
          <option>Active</option>
          <option>Closed</option>
        </select>
        <textarea name="notes" placeholder="Notes" />
        <button>Save</button>
      </form>
    </div>
  )
}
