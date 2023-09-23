import { Box, Button, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Swal from 'sweetalert2'

const NewChocolate = () => {
    const handleNewChocolate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const country = form.country.value;
        const photo = form.photo.value;
        const category = form.category.value;
        const available = form.available.value;
        const info = { name, country, category, photo, available };
        fetch('http://localhost:5000/chocolates', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire(
                        'Deleted!',
                        'Data Inserted Successfully',
                        'success'
                    )
                }

            })
    }
    return (
        <Box paddingX={14}>
            <Link to={`/`}><Button sx={{ marginBottom: '32px' }} variant="outlined">All Chocolates</Button></Link>
            <hr />
            <Box marginTop={4} marginBottom={8} paddingX={14} paddingY={6} bgcolor={"rgba(20, 20, 20, 0.05)"} borderRadius={2}>
                <Typography variant="h6" textAlign={"center"} fontWeight={600}>
                    New Chocolate
                </Typography>
                <Typography variant="subtitle1" textAlign={"center"} marginBottom={5}>
                    Use the below form to create a new product
                </Typography>
                <form onSubmit={handleNewChocolate}>
                    <Box marginBottom={4} bgcolor={"white"}>
                        <TextField
                            id=""
                            label="Name"
                            type="text"
                            name="name"
                            fullWidth
                        />
                    </Box>
                    <Box marginBottom={4} bgcolor={"white"}>
                        <TextField
                            id=""
                            label="Country"
                            type="text"
                            name="country"
                            fullWidth
                        />
                    </Box>

                    <Box marginBottom={4} bgcolor={"white"}>
                        <TextField
                            id=""
                            label="Photo URL"
                            type="text"
                            name="photo"
                            fullWidth
                        />
                    </Box>
                    <Box marginBottom={4} bgcolor={"white"}>
                        <FormControl fullWidth>
                            <InputLabel id="">Category</InputLabel>
                            <Select
                                labelId=""
                                id=""
                                name="category"
                                label="Category"
                            >
                                <MenuItem value='Premium'>Premium</MenuItem>
                                <MenuItem value='Average'>Average</MenuItem>
                                <MenuItem value='Below'>Below</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    <Box marginBottom={4}>
                        <FormControl>
                            <FormLabel id="">Available</FormLabel>
                            <RadioGroup
                                row aria-labelledby=""
                                name="available">
                                <FormControlLabel value={'Yes'} control={<Radio />} label="Yes" />
                                <FormControlLabel value={'No'} control={<Radio />} label="No" />
                            </RadioGroup>
                        </FormControl>
                    </Box>

                    <Box bgcolor={"#91572B"} borderRadius={2} color={"white"}>
                        <Button type="submit" variant="" sx={{ paddingY: '17px' }} fullWidth>Save</Button>
                    </Box>

                </form>
            </Box>
        </Box>
    );
};

export default NewChocolate;