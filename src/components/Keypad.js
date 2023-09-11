// Code Keypad Component Here
function Keypad (){
    function handleChange(event){
        console.log('Entering password...')
    }
    return (
        <input
            type = "password"
            name = "password"
            onChange = {handleChange}
            placeholder = "Enter password..."
        />
    )
}

export default Keypad;