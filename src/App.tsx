import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.scss";

function App() {
	const [count, setCount] = useState<number>(0);

	return (
		<div className="App">
			<div>
				<img src={reactLogo} className="react" alt="React logo" />
			</div>
			<h1>
				<span>[ ✨ ]</span> A Vite template App! <span>[ ✨ ]</span>
			</h1>
			<ul>
				<li>🚀 | React with Vite!</li>
				<li>🎉 | Typescript support!</li>
				<li>🧪 | Vitest for testing!</li>
				<li>🥽 | Modular SCSS setup!</li>
				<li>🦋 | ESLint-Prettier with husky and lint-staged!</li>
				<li>🗺 | React-router-dom@v6 and React Icons!</li>
			</ul>
			<div className="card">
				<button type="button" onClick={() => setCount(c => c + 1)}>
					⌚ | Click to brr- {count}
				</button>
				<div>
					<p>
						Edit <code>src/App.tsx</code> and save to test HMR.
					</p>
					<p>
						Style components with <code>.scss</code> component
						files.
					</p>
				</div>
			</div>
			<p className="read-the-docs">
				<a href="https://reactjs.org">React Docs</a> |{" "}
				<a href="https://vitejs.dev/guide/">Vite Guide</a>
			</p>
		</div>
	);
}

export default App;
