import './App.css';
import ComponentExample from './features/classSliceExample/ClassExample';
import FunctionExample from './features/functionSliceExample/FunctionExample';

function App() {
	return (
		<div>
			<h2 className="meathodLabel">Redux Toolkit</h2>
			<ComponentExample />
			<FunctionExample />
		</div>
	);
}

export default App;
