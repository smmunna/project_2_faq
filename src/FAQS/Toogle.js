import React from 'react'

function Toogle(props) {
    const {id,ques,ans} = props;
  return (
    <div>
        <div className="card">
            <h4>{id}. {ques}</h4>
            <p>{ans}</p>
        </div>
    </div>
  )
}

export default Toogle