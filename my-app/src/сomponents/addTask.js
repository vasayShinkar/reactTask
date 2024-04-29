import React from 'react';


 class AddTask extends React.Component {
   render() { 
     return (
        <form>
            <input placeholder='Сама загадка'/>
            <input placeholder='первый  ответ'/>
            <input placeholder='второй ответ'/>
            <input placeholder='третий ответ'/>
            <input placeholder="Верный ответ"/>
            <button type="button">Добавить</button>
        </form>
     )
   }
 }


 export default AddTask