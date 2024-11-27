
import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

const Tracking = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
  return(
    <div>
    <FormControl sx={{ m: 8, minWidth: 200 }}>
      <InputLabel id="demo-simple-select-helper-label">Week</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
    <FormControl sx={{ m: 8, minWidth: 200 }}>
      <InputLabel id="demo-simple-select-helper-label">Month</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
    <FormControl sx={{ m: 8, minWidth: 200 }}>
      <InputLabel id="demo-simple-select-helper-label">Year</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
    <FormControl sx={{ m: 8, minWidth: 200}}>
      <TextField id="outlined-basic" label="Specific Date" variant="outlined" />
    </FormControl>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
   <h1 style={{ textAlign: 'center', color: 'blue',fontFamily: 'Cooper Black',fontSize:'150px' }}>Tracking</h1>
  </div>
  )


}
export default Tracking;


