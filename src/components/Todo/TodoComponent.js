import React from 'react';
import '../../App.css';


import Header from './TodoComponents/Header';
import Todo from './TodoComponents/Todo';


class TodoComponent extends React.Component {

    state = [];

    render () {
        return (
            <div className="container left">
                <Header/>
                <Todo/>

            </div>



        )
    }

}


export default TodoComponent;