import { supabase } from '../supabase'

export default function AddInteraction({ customerId }) {
  const save = async (e) => {
    e.preventDefault()

    const { error } = await supabase.from('interactions').insert({
      customer_id: customerId,
      type: e.target.type.value,
      note: e.target.note.value,
      follow_up_date: e.target.follow.value
    })

    if (error) alert(error.message)
    else alert('Interaction logged')
  }

  return (
    <form onSubmit={save}>
      <select name="type">
        <option>Call</option>
        <option>Email</option>
        <option>Meeting</option>
      </select>
      <textarea name="note" placeholder="Notes" />
      <input type="date" name="follow" />
      <button>Save Interaction</button>
    </form>
  )
}
