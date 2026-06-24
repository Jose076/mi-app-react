import Lab2 from "./laboratorios/laboratorio2/lab2.jsx";
import Lab3 from "./laboratorios/laboratorio3/Lab3.jsx";
import Lab4 from "./laboratorios/laboratorio4/Lab4.jsx";
import Lab5 from "./laboratorios/laboratorio5/lab5.jsx";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
      <div className="app">
        {/*<Lab2 />*/}
        {/*<Lab3 />*/}
        {/*<Lab4/>*/}
        <BrowserRouter>
          <Lab5/>
        </BrowserRouter>
        

      </div>
  );
}

export default App;
