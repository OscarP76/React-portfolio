import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import {useState} from 'react'

function Contacts({}) {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    EmailInput: '',
    message: ""
  })
  const handleSubmit = () => {
    window.location.href = "mailto:webdevop@gmail.com?subject=Contact from " + state.firstName + " " + state.lastName + "&body=" + state.message
  //  document.querySelector('#first-name').setAttribute('error','error')
  }
    return(
        <Box id="contact-background"
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
 
      autoComplete="off"
    >
      <div>
        {console.log(state)}
        <TextField
         value = {state.firstName}
          error={ state.firstName ===""}
          helperText = {state.firstName ==="" ? "first name is required": ""}
          id="first-name"
          label="First Name"
         onChange = {(event) => setState({...state, firstName: event.target.value})} 
        />
        <TextField
         value = {state.lastName}
         error = {state.lastName === ""}
         helperText = {state.lastName === "" ? "last name is required" : ""} 
          id="outlined-error-helper-text"
          label="Last Name"
          onChange = {(event) => setState({...state, lastName: event.target.value})}
        />
      </div>
      <div>
        <TextField
         value = {state.EmailInput}
         error = {state.EmailInput === ""}
         helperText = {state.EmailInput === "" ? "email required" : ""}
          id="outlined-error-helper-text"
          label="Email"
          onChange={(event) => setState({...state, EmailInput: event.target.value})}
         
        />
      </div>
      <TextField
      value = {state.message}
      error = {state.message === ""}
      helperText = {state.message === "" ? "Message required" : ""}
          id="standard-textarea"
          label="Message"
          placeholder="Message"
          multiline
          onChange={(event) => setState({...state, message: event.target.value})}

        />

      <Button variant="contained"  onClick={handleSubmit}>Submit</Button>
    </Box>
    )
}

export default Contacts;