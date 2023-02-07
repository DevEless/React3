import Imc from './components/imc/imc';

function App() {
  const people = [
    {
      nom: 'Bernie',
      poids: 80,
      taille: 1.98
    },
    {
      nom: 'Sanders',
      poids: 65,
      taille: 1.74
    },
    
  ]
  return (
    <div>
      {people.map(person => (
        <Imc _nom={person.nom} 
        _poids={person.poids}
        _taille={person.taille}/>
      ))
      }
    </div>
  );
}

export default App;d