
import './App.css';
import Counter from './components/Counter';
import DynamicButon from './components/DynamicButon';
import Incrementor from './components/Incrementor';

function App() {

  let Template = ({title,children}) => {
    return (
      <section className="sections">
        <h2 className='question'>{title}</h2>
        <div className='solution'>
          {children}
        </div>
        <div className='section-border'></div>
      </section>
    )
  }
  return (
    <main className="App">
      <Template title={"Solution 1"}>
        <Counter />
      </Template>
      <Template title={"Solution 2"}>
        <Incrementor />
      </Template>
      <Template title={"Solution 3"}>
        <DynamicButon />
      </Template>
      <Template title={"Solution 4"}>
        <div>
          A: output is a 0 added inside the parent div with className App
          <br />
          B: The parent Div will be rendered with text "0"
        </div>
      </Template>
    </main>
  );
}

export default App;
