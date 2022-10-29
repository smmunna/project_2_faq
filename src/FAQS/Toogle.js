import React,{useState} from 'react'

function Toogle(props) {
    const {id,ques,ans} = props;
    const [show,setShow] = useState(false);
  return (
    <div>
        <div className="card">
            <h4>{id}. {ques}</h4>
            {
                show ? <p>{ans}</p> : null
            }
            <div className="btn">
                <button onClick={()=>{setShow(!show)}}>
                    {
                        show ? "-" : "+"
                    }
                </button>
            </div>
        </div>
    </div>
  )
}

export default Toogle