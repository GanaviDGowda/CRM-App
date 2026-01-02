import { supabase } from '../supabase'
import { useEffect, useState } from 'react'
import AddInteraction from '../interactions/AddInteraction'

export default function CustomerList() {
  const [customers, setCustomers] = useState([])

  useEffect(() => {
    load()
  }, [])

  const load = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    const { data } = await supabase
      .from('customers')
      .select('*')
      .eq('user_id', user.id)

    setCustomers(data || [])
  }

  return (
    <>
      {customers.map(c => (
        <div key={c.id} className="card">
          <h3>{c.name}</h3>
          <p>Status: {c.status}</p>
          <AddInteraction customerId={c.id} />
        </div>
      ))}
    </>
  )
}
