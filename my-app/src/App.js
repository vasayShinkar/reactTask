import React from 'react';
import ReactDOM from 'react-dom/client';
import User from "./сomponents/user"
import AddTask from './сomponents/addTask';

class App extends React.Component {

 
 render () { 
    return <div> 
        <h1>Загадки</h1>
        <h3>Инфо: Ответы показываютя автоматически</h3>
        <User />
        <hr />
        Добавление:
        <AddTask />
      </div>
      
  }

}
export default App