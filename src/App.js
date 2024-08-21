import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Info from './Components/Info/Info';
import Info2 from './Components/Info2/Info2';
import LearnAbout from './Components/LearnAbout/LearnAbout';
import WhatWeDo from './Components/WhatWeDo/WhatWeDo';

function App() {
	return (
		<div className="App">
			<Header />
			<Hero />
			<WhatWeDo />
			<Info/>
			<Info2/>
			<LearnAbout/>
		</div>
	);
}

export default App;
