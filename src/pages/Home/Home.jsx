import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';

const Home = () => {
    return (
        <div>
            <Link to={`/new-chocolate`}><Button variant="outlined">New Chocolate</Button></Link>
        </div>
    );
};

export default Home;