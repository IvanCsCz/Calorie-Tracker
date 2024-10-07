import { ChangeEvent, FormEvent, useState } from "react"
import { categories } from "../data/categories"
import type { Activity } from "../types"

function Form() {
  const [activity, setActivity] = useState<Activity>({
    category: 1,
    name: '',
    calories: 0
  })

  const handleChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
    const isNumberField = ['category', 'calories'].includes(e.target.id)

    if(isNumberField) Number(e.target.value)
    
    setActivity({
      ...activity,
      [e.target.id]: isNumberField ? Number(e.target.value) : e.target.value
    })
  }

  const isValidActivity = () => {
    const {name, calories} = activity
    return name.trim() !== '' && calories > 0
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('submit')
    // setActivity({
    //   ...activity,

    // })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 bg-white shadow p-10 rounded-lg">

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="category" className="font-bold">Categoria:</label>
        <select 
          id="category" 
          value={activity.category} 
          onChange={handleChange}
          className="border border-slate-300 p-2 rounded-lg w-full bg-white"
        >
          {categories.map(category => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="name" className="font-bold">Actividad:</label>
        <input 
          id="name" 
          value={activity.name} 
          onChange={handleChange}
          type="text" 
          className="border border-slate-300 p-2 rounded-lg" 
          placeholder="Ej. Comida, Jugo de Naranja, Ensalada, Ejercicio, Pesas, Bicicleta"
        />
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="calories" className="font-bold">Calorias:</label>
        <input 
          id="calories" 
          value={activity.calories}
          onChange={handleChange}
          type="number" 
          className="border border-slate-300 p-2 rounded-lg" 
          placeholder="Calorias. ej. 300 o 500"
        />
      </div>

      <input 
        type="submit" 
        className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold text-white uppercase rounded-lg cursor-pointer disabled:opacity-10"
        disabled={!isValidActivity()}
        value={activity.category === 1 ? 'Guardar comida' : 'Guardar ejercicio'}
      />
      
    </form>
  )
}

export default Form