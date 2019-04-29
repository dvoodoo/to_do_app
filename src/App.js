import React from 'react';


import TodoComponent from './components/Todo/TodoComponent';
import Timer from './components/Pomodoro/PomodoroComponents/Timer';

const App = (props) => {

    return (
        <div className="App">
            <TodoComponent />
            <Timer />
        </div>
    );

};


export default App;
