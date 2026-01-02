import { supabase } from '../supabase'
import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'

export default function Dashboard() {
  const [stats, setStats] = useState({
    customers: 0,
    interactions: 0,
  })

  useEffect(() => {
    load()
  }, [])

  const load = async () => {
    const { data: { user } } = await supabase.auth.getUser()

    // customers count
    const { count: customers } = await supabase
      .from('customers')
      .select('id', { count: 'exact', head: true })
      .eq('user_id', user.id)

    // interactions count (via customers)
    const { count: interactions } = await supabase
      .from('interactions')
      .select(
        'id, customers!inner(user_id)',
        { count: 'exact', head: true }
      )
      .eq('customers.user_id', user.id)

    setStats({ customers, interactions })
  }

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <h4 className="mb-4">Dashboard Overview</h4>

        <div className="row">
          <StatCard title="Customers" value={stats.customers} color="primary" />
          <StatCard title="Interactions" value={stats.interactions} color="success" />
        </div>
      </div>
    </>
  )
}

function StatCard({ title, value, color }) {
  return (
    <div className="col-md-6 mb-3">
      <div className={`card border-${color} shadow-sm`}>
        <div className="card-body text-center">
          <h6 className="text-muted">{title}</h6>
          <h2 className={`text-${color}`}>{value}</h2>
        </div>
      </div>
    </div>
  )
}
