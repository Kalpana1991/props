import React from 'react'
import Child from './Child'

const App = () => {
  return (
    <> 
    <div className="class">
      <h2>Users</h2>
      <Child fname='kota' lname='Santhosh'/><br/><br/>
      <Child fname='Yaeshwan' lname='Paul'/><br/><br/>
      <Child fname='Paisy' lname='Karunya'/><br/><br/>
      </div>
    </>
  )
}

export default App
