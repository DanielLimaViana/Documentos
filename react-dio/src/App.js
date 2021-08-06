import Item from './Componentes/Item';
import Card from './Componentes/Card';

const App = () => {
  return(
   <>
      <h1>Minha primeira aplicação com React</h1>
      <ul>
        <Item>
          Item 1
        </Item>
        <Item>
          Item 2
        </Item>
        <Item>
          Item 3
        </Item>      
      </ul>
      <Card/>
   </>
  )
}

export default App;
