import './Style/style.scss'
import { Link, BrowserRouter } from 'react-router-dom';

export default function Root(props) {
  return (
    <BrowserRouter>
      <nav>
        <div className='custom-container'>
          <ul>
            <li>
              <Link to="/planets">Employee</Link>
            </li>
            <li>
              <Link to="/stars">Poetry</Link>
            </li>
          </ul>
        </div>
      </nav>
    </BrowserRouter>
  );
}
