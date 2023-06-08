import Clock from './components/Clock';
import Gallery from './components/Gallery';

function App() {
    return (
        <div>
            <Clock locale="bn-BD" />
            <Clock locale="en-US" />
            <Gallery></Gallery>
        </div>
    );
}

export default App;