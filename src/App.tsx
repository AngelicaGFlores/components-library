import Button from "./components/Button";
import Section from "./components/Section";
import AlertBox from './components/AlertBox';


function App() {
	return (
		<main className="bg-stone-900 text-white">
			<h1 className="text-4xl">Components Library</h1>
			<Section title="Section 1">
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
					corporis iure quisquam fuga non modi, culpa aperiam accusamus
					architecto ducimus illum! Consequuntur dolorem magni voluptas sint,
					quaerat recusandae natus veniam!
				</p>
			</Section>
			<Section title="Section 2">
				<h3>Subheader</h3>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id illo
					porro rem ipsum. Voluptatibus inventore, architecto unde, incidunt
					voluptas illum consequatur ea qui laudantium, reiciendis vel quos
					nesciunt ab accusamus!
				</p>
			</Section>
			<Section title="Buttons">
				<div className="grid grid-cols-3">
					<Button text="Click me!" />
					<Button
						text="Submit"
						type="submit"
						onClick={() => console.log("Submit")}
					/>
					<Button
						text="Reset"
						type="reset"
						onClick={() => console.log("Reset")}
					/>
					<Button
						text="Disbaled"
						type="reset"
						disabled={true}
						onClick={() => console.log("Reset")}
					/>
				</div>
			</Section>
		</main>
	);
}
export default App;
