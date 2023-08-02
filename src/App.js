import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import { SuperHeros } from './components/SuperHeros.page';
import { RQSuperHeros } from './components/RQSuperHeros.page';
import { Home } from './components/Home.page';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

// instance of query-client
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
   <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/super-heros">Super Heros</Link>
            <Link to="/rq-super-heros">RQ Super Heros</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/super-heros" element={<SuperHeros />} />
          <Route path="/rq-super-heros" element={<RQSuperHeros />} />
        </Routes>
      </div>
   </Router>
   </QueryClientProvider>
  );
}

export default App;
