import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
function Contacts({}) {
    return(
        <Box id="contact-background"
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          error
          id="outlined-error"
          label="Error"
          defaultValue="First Name"
        />
        <TextField
          error
          id="outlined-error-helper-text"
          label="Error"
          defaultValue="Last Name"
          helperText="Incorrect entry."
        />
      </div>
      <div>
        <TextField
          error
          id="standard-error-helper-text"
          label="Error"
          defaultValue="Email"
          helperText="Incorrect entry."
          variant="standard"
        />
      </div>
      <Button variant="contained">Submit</Button>
    </Box>
    )
}

export default Contacts;