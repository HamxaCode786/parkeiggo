import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../src/layout";
import Homepage from "../src/pages/homepage";
import Formpage from '../src/pages/formpage'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/style.css";
import "./styles/footer.css";
import "./styles/header.css";
import "./styles/homepage.css";
import "./styles/form.css";
import "./styles/responsive.css";

function App() {
  return (
    <Router>
      
        <Routes>
          <Route path="/" element={<Layout><Homepage /></Layout>} />
          <Route path="/form" element={<Layout><Formpage /></Layout>} />
        </Routes>
    </Router>
  );
}

export default App;
