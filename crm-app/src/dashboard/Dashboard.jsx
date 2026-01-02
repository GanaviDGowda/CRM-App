import { supabase } from '../supabase'
import { useEffect, useState } from 'react'

export default function Dashboard() {
  const [items, setItems] = useState([])

  useEffect(() => {
    supabase.from('interactions')
      .select('*')
      .gte('follow_up_date', new Date().toISOString())
      .then(({ data }) => setItems(data || []))
  }, [])

  return (
    <div className="card">
      <h2>Upcoming Follow-ups</h2>
      {items.length === 0 && <p>No follow-ups</p>}
      {items.map(i => (
        <p key={i.id}>{i.type} on {i.follow_up_date}</p>
      ))}
    </div>
  )
}
