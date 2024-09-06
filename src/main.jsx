import './index.css';
import * as ReactDOM from "react-dom/client";
import App from './App';

// function Hello({name, age}) {
//   return (
//     <div>
//       <h1>Hello {name}, {age}!!</h1>
//     </div>
//   );
// }

const rootContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(rootContainer);
root.render(<App />);
