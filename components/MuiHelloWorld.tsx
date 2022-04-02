import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function MuiHelloWorld() {
  const [state, setState] = useState("world")
  const [input,setInput]=useState("")
  return (
    <Box
      component="section"
      sx={{
        padding: "1rem 0rem"
      }}
    >
      <Typography
        variant="h3"
      >
        Hello { state ?? 'world' }
      </Typography>
      <Box
        component="div"
        sx={{
          display:"flex"
        }}
      >
        <TextField
          id="outlined-name"
          variant="standard"
          label="Name"
          value={input}
          onChange={({target})=>setInput(target.value)}
        />
        <Button
          onClick={()=>setState(input)}
        >
          Say hello
        </Button>
      </Box>
    </Box>
  )
}