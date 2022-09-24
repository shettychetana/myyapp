import React from 'react'
function welcome(props){
  return(
    <div>
      <h1>welcome:-<br>
      </br>{props.name}<br>
      </br>{props.usn}<br>
      </br>{props.email}<br>
      </br>{props.sem}<br>
      </br>{props.branch}
      </h1>
    </div>
  )
}
function Props() {
  return (
    <div> <welcome name="Name:CHETANA"
    usn="USN:4MK19CS010"
    email="EMAIL: chetanashetty22@gmail.com"
    sem="Sem:seventh"
    branch="Branch:CSE"/>
    </div>
  )
}

export default Props