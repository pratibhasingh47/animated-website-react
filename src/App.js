import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Info from './Components/Info/Info';
import WhatWeDo from './Components/WhatWeDo/WhatWeDo';

function App() {
	return (
		<div className="App">
			<Header />
			<Hero />
			<WhatWeDo />
			<Info/>
		</div>
	);
}

export default App;
