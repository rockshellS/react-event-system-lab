
import React, { Component } from 'react'




class EyesOnMe extends Component {
    constructor() {
        super()
    }

 
render() {
     return(
        <div>
            <button onFocus={() => console.log('Good!')} onBlur={() => console.log('Hey! Eyes on me!')}>BUTTON </button>
        </div>         
     )
 }
}
 export default EyesOnMe