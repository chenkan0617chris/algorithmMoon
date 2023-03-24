import ReactDOM from 'react-dom/client';
import routers from './router';

const containier = document.getElementById('root');
const root = ReactDOM.createRoot(containier as HTMLElement);
root.render(routers);
