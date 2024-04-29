import React from 'react';


 class User extends React.Component {
    
    

    render() {
   
    return (<div>
     {this.props.users.users.map((el) => (
      <div className="task" id={this.props.users.userAnswer[el.id-1] == el.current ? "true" : "false"}>
        {el.question}
        <br />
        ваш ответ: 
        <select onChange={(event) => {
            this.props.add(el.id-1, event.target.value)

        }}> 
        <option value="" disabled selected>Выберите</option>
        <option value={el.answer1}>{el.answer1}</option>
        <option value={el.answer2}>{el.answer2}</option>
        <option value={el.answer3}>{el.answer3}</option>
        </select>
        <h6>Статус решения: {this.props.users.userAnswer[el.id-1] == el.current ? "Поздравляем" : "ответ не указан, или указан неверный"}</h6>

      </div>
     ))}


    </div>)
    }
 }


 export default User

 /*
this.setState(copy => {
        const updatedUserAnswer = [...copy.userAnswer]; 
        updatedUserAnswer[el.id] = event.target.value;
        return { userAnswer: updatedUserAnswer };

 */