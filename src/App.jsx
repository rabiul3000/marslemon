import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/home/Home';
import Auth from './components/auth/Auth';
import About from './components/about/About';
import NotFound from './components/notfound/NotFound';

import './App.css';
import Magazinew from './components/projects/magazinew/Magazinew';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Auth />} />
				<Route path='/home' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='*' element={<NotFound />} />

				<Route path='/preview/magazinew' element={<Magazinew />} />
			</Routes>
		</Router>
	);
};

export default App;

