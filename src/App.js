import logo from './logo.svg';
import './App.css';
import Cardd from './components/Card';
import data from './components/data';

function App() {
  const cards = data.map(item => {
    return (
        <Cardd
            key={item.id}
            item={item}
           />
    )
})        
  return (
    <section className="card-list">
    {cards}
</section>
  );
}

export default App;
