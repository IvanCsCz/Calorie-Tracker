import { categories } from "../data/categories"

function Form() {
  return (
    <form className="space-y5 bg-white shadow p-10 rounded-lg">

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="category" className="font-bold">Categoria:</label>
        <select name="category" id="category" className="border border-slate-300 p-2 rounded-lg w-full bg-white">
          {categories.map(category => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="category" className="font-bold">Categoria:</label>
        <input 
          type="text" 
          id="activity" 
          className="border border-slate-300 p-2 rounded-lg" 
          placeholder="Ej. Comida, Jugo de Naranja, Ensalada, Ejercicio, Pesas, Bicicleta"
        />
      </div>
      
    </form>
  )
}

export default Form