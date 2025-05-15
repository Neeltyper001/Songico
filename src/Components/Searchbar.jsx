import { Box, Button, Container, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React, { useContext } from 'react'
import { TracksContext } from '../contexts/context.tracks';
import { fetchTracksController } from '../controller/controller.tracks';

const Searchbar = () => {
      const [search , setSearch] = React.useState(undefined);
      const {setTracks,setApiStatus} = useContext(TracksContext);

      const handleChange = (e)=>{
         setSearch(e.target.value)
      }
      
      const handleClick = async ()=>{
          try {
            setApiStatus(prev => ({...prev, isLoading: true , isSuccess: false , isError: false}))
            const response = await fetchTracksController(search)
            setApiStatus(prev=> ({...prev, isLoading:false , isSuccess: true , isError: false}))
            
            setTracks(response)
        } catch (error) {
            setApiStatus(prev => ({...prev , isLoading: false , isSuccess: false , isError: true}))
            console.log(error.message)
        }
          
      }

  return (
    <Box>
      <Container sx={{display: 'flex', justifyContent: "center", alignItems: "center"}}>
        <TextField
          value={search || ''}
          variant='standard'
          onChange={handleChange}
          label="Search"
        />
        <Button onClick={handleClick} variant="contained" ><SearchIcon /></Button>
      </Container>
    </Box>
  )
}

export default Searchbar