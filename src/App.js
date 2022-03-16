import './Styles/Root/Global.css';

import Header from './Components/Header';
import Main from './Components/Main';
import Home from './Components/Sections/Home';
import AboutMe from './Components/Sections/AboutMe';
import Projects from './Components/Sections/Projects';
import Footer from './Components/Footer';
import Background from './Components/Background';

function App() {
	return (
		<>
			<Background />
			<Header />
			<Main>
				<Home />
				<AboutMe />
				<Projects />
			</Main>
			<Footer />
		</>
	);
}

export default App;
