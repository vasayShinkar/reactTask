import React from 'react';


 class User extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            userAnswer: ["", ""],
        }

    }
    users = [
        {
            id: 1,
            question: "2 + 2",
            answer1: 4,
            answer2: 5,
            answer3: 6,
            current: 4,
        },
        {
            id: 2,
            question: "Висит груша, но нельзя скушать",
            answer1: "лампочка",
            answer2: "боксерская груша",
            answer3: "Кабачок",
            current: "лампочка",
        },
     ]

    render() {
   

    return (<div>
     {this.users.map((el) => (
      <div className="task" id={this.state.userAnswer[el.id] == el.current ? "true" : "false"}>
        {el.question}
        <br />
        ваш ответ: 
        <select onChange={(event) => this.setState(copy => {
        const updatedUserAnswer = [...copy.userAnswer]; 
        updatedUserAnswer[el.id] = event.target.value;
        return { userAnswer: updatedUserAnswer };
        })}>
        <option value="" disabled selected>Выберите</option>
        <option value={el.answer1}>{el.answer1}</option>
        <option value={el.answer2}>{el.answer2}</option>
        <option value={el.answer3}>{el.answer3}</option>
        </select>
        <h6>Статус решения: {this.state.userAnswer[el.id] == el.current ? "Поздравляем" : "ответ не указан, или указан неверный"}</h6>

      </div>
     ))}


    </div>)
    }
 }


 export default User