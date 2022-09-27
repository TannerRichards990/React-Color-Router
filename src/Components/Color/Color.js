import './Color.css';
import { useParams } from 'react-router-dom';

export default function Color() {
  const { r, g, b } = useParams();

  return (
    <div className='Color' style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}>
      <h1 className='Color-h1'>
        rgb({r}, {g}, {b})
      </h1>
    </div>
  );
}