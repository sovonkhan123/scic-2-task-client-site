
import { Link } from 'react-router-dom';

const Errorpage = () => {
    return (
        <div className="text-center">
            <img src="https://i.ibb.co/10PG7zR/20602743-6333685.jpg" alt="" />
            <span className="btn btn-link mt-4"><Link to='/'>Go Home</Link></span>
        </div>
    );
};

export default Errorpage;