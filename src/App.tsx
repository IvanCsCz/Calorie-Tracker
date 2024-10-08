import { useReducer } from "react"
import ActivityList from "./components/ActivityList"
import Form from "./components/Form"
import { activityReducer, initialState } from "./reducers/activityReducer"

function App() {

  const [state, dispatch] = useReducer(activityReducer, initialState)
  
  return(
    <>
      <header className="bg-purple-500 py-3">
        <div className="max-w-4xl mx-auto flex justify-between">
          <h1 className="text-center text-lg font-bold text-white uppercase">
            Contador de calorias
          </h1>
        </div>  
      </header>

      <section className="bg-purple-400 py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <Form dispatch={dispatch} state={state} />
        </div>  
      </section>

      <section className="p-10 mx-auto max-w-4xl">
        <ActivityList activities={state.activities} dispatch={dispatch} />
      </section>
    </>
  )
}

export default App
