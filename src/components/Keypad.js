// Code Keypad Component Here
import React from 'react'
class Keypad extends React.Component {
    render(){
        return(
            <input onKeyUp={(e) => {console.log('Entering password...')}} type='password' />
        )
    }
}
export default Keypad