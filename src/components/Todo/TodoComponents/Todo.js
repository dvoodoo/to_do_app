import React, {useState, useEffect} from 'react';
// import axios from 'axios';

const todo = (props) => {

    const [todoName, setTodoName] = useState(0);
    const [todoList, setTodoList] = useState([]);


    // const dbURL = 'https://test-a416d.firebaseio.com/todos.json';
 // change for git




    const handleSubmit = e => {
        e.preventDefault();
        const todo = {name: todoName, done: false};
        if (!todoName) return;
        setTodoList([...todoList, todo]);
        //     axios
        //         .post(dbURL, { name: todoName, done: false })
        //         .then(res => {
        //             console.log(res);
        //         })
        //         .catch(err => {
        //             console.log(err);
        //         });
        document.getElementById('todoName').value='';

        };

        //getting todos from the server
        // useEffect(() => {
        //     axios.get(dbURL).then(res => {
        //             const todoData = res.data;
        //             const todos = [];
        //             for (const key in todoData) {
        //                 todos.push({id: key, name: todoData[key].name, done: todoData[key].done})
        //             }
        //             setTodoList(todos);
        //         });
        // });


        const handleChange = e => {
            setTodoName(e.target.value);
        };


        const handleDelete = id => {
            todoList.splice(id, 1);
            setTodoList([...todoList]);
            // axios.delete(`https://test-a416d.firebaseio.com/todos/${id}`)
            //
            //     .catch(err => {
            //         console.log(err)
            //     })
        };


        const handleDone = e => {
            const {id} = e.target.parentElement;
            todoList[id].done = !todoList[id].done;
            setTodoList([...todoList]);
            // axios.post(`https://test-a416d.firebaseio.com/todos/${id}.json/edit`, id)
        };




        return (
            <React.Fragment>


                <div >
                    {
                        // todoList &&
                        todoList.map((todoItem, i) => ( //////_!

                            <div
                                className="todo-list"
                                id={i}
                                key={todoItem}



                            >
                                <button
                                    className={todoItem.done ? "todo-item done" : "todo-item not-done"}
                                    onClick={handleDone}
                                >
                                    {todoItem.name}
                                </button>
                                <button
                                    className="delete-todo"
                                    onClick={handleDelete}

                                    id="deleteButton"

                                >
                                    x
                                </button>
                            </div>
                        ))
                    }
                </div>


                <div>
                    <form  className="todo-add-block" onSubmit={handleSubmit} autoComplete="off">
                        <input
                            placeholder=" ..."
                            onFocus={(e) => e.target.placeholder=""}
                            onBlur={(e) => e.target.placeholder="..."}
                            className="todo-input-form"
                            type="text"
                            id="todoName"
                            onChange={handleChange}/>

                    </form>
                </div>
            </React.Fragment>

        )

    };

export default todo;
