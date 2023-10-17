import questions from "./data/questions.json"
import Header from "./components/Header"
import "./App.css"
export default function App() {
  return (
    <div>
      <Header/>
      <ol>
      {
        questions.map((item,index)=>{
          return(
            <>
            <li key={index}><h3>{item.question}</h3></li>
            <ul>
            {
              item.options.map((answer,ind)=>(
                <li key={ind} >{answer.ans}</li>

              ))
            }
           </ul>
            </>
          )
        })
      }
      </ol>

<button>Submit</button>
    </div>
  )
}
