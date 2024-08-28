import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/welcome'
 import Message from './components/Message' 
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './components/appStyle.css'
import styles from './components/appStyle.module.css'
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import Portal from './components/Portal';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import WithCounterTwo from './components/WithCounterTwo';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';

function App() {
  return (
    <div className="App">
      react function components
     <Greet name ="Bruce" heroName="Batman"></Greet>
     <Greet name ="Lee" heroName="superman">
          <p> This is childern props </p>
     </Greet>
     <Greet name ="Diana" heroName="wonderwoman">
      <button>Action Button</button>
     </Greet>
     <hr></hr>
     REACT CLASS Component
     <Welcome name ="classBruce" heroName="classBatman"></Welcome>
     <button>ClassButton</button> 
     <p>on click handler for setting state</p>
     <Message />
     <Counter/>
     <br></br>
     <hr></hr>  
     <br></br>
     state and props destructuring
     <Welcome name ="Bruce" heroName="Batman"></Welcome>
     <br/>
     <br/>
     <hr/>
     event handling in functional components
     <FunctionClick></FunctionClick>
     <br></br>
     <hr></hr>
     event handling in CLASS components
     <ClassClick></ClassClick>

     <br></br>
     <hr></hr>
     <p>Event Binding</p>
     <EventBind></EventBind>

     <br></br>
     <hr></hr>
     <p>Methods as Props</p>
     <ParentComponent/>

     <br/>
     <hr/>
     <p>Conditional Rendering</p>
     <UserGreeting/>

     <br/>
     <hr/>
     <p>List method Rendering</p>
     <NameList/>

     <br>
     </br>
     <hr>
     </hr>
     <p>Css and styling </p>
     <Stylesheet primary = {true}/>
     <Inline/>
     <h1 className='error'>Error</h1>
     <h1 className={styles.success}>Success</h1>
     <br>
     </br>
     <hr>
     </hr>
     <p>Form Handling</p>
     <Form/>
     <br/>
     <hr/>
     <p>Life cycle Methods Demo</p>
    < LifecycleA/>
    <br/>
     <hr/>
     <p>Framgments Methods Demo</p>
     <FragmentDemo/>
     <Table/>

     <br/>
     <hr/>
     <p>Pure Component</p>
     <p>REgular component returns true bu\y default for shouldComponentUpdate method while pure comp updates...shallow prop & state comparision</p>
     <p>pure component won't re-render if there is no different -i.e it gives performance boost </p>
     <ParentComp/>
    <br></br>
    <hr/>
    <p>Refs Demo</p>
    <RefsDemo/>
    <br/>
    <p>calling ref method from child to parent</p>
    <FocusInput/>
    <br></br>
    <p>Forwarding Refs</p>
    {/* #30 for reference  */}
    <FRParentInput/> 
    <br/>
    <hr/>
    <p>Portal in React</p>
    <p>Portal is used when you don't want to render component in root id or want to create separate div for particular component</p>
    <Portal/>
    <br/>
    <hr/>
    <p>Error Boundary</p>
    <ErrorBoundary>
    <Hero heroname='superman'/>
    </ErrorBoundary>
    <ErrorBoundary>
    <Hero heroname='batman'/>
    </ErrorBoundary>
    <ErrorBoundary>
    {/* <Hero heroname='joker'/> add joker here to see error */}
    </ErrorBoundary>

    <br/>
    <hr/>
    <p>Higher Order Component</p>
    <ClickCounter name='saifali'/>
    <HoverCounter name='dhuka'/>
    <br/>
    <hr/>
    <p>Render Props</p>
    <p>Render Props refer to technique for sharing code between React Component using a prop whose value is a function</p>
    <ClickCounterTwo/>
    <HoverCounterTwo/>
    <User render={(isLoggedin) => isLoggedin ? 'saifali' : 'Guest'} />
      <p>counter implementation of render props</p>

    <WithCounterTwo
       render = {(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
    />

    <WithCounterTwo 
        render={(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
    />

  <br></br>
  <hr/>
  <p>Context provide a way to pass data through the component tree
     without having to pass props down manually at every level</p>

<p>For eg. if we have A, B, C component </p>
<br/> 
<h4>  {"App --> A-B-C <br/> B->D  <br/> C->E->F"}  </h4>    
<UserProvider value="saifali">     
  <ComponentC/>   
</UserProvider>
    </div>
  );
}

export default App;
