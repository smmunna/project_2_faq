import './App.css';
import {data} from './FAQS/FAQS'
import Toogle from './FAQS/Toogle';
function App() {
  return (
    <div className="App">
       <h1 style={{textAlign:'center'}}>--Toggle App--</h1>
        {
          data.map((item)=>(<Toogle key={item.id} id={item.id} ques={item.desc} ans={item.ans}/>))
        }
    </div>
  );
}

export default App;
