import React from 'react';

export class Todolist extends React.Component {
    
    constructor(){
        super();
      //object this.state then element is todos followed by an array of objects (title) there are two states todos and taskinput  
        this.state = { 
          todos: [
            { title: 'Make the bed', id: (Math.random()*10)},
            { title: 'Wash my hands', id: (Math.random()*10)},
            { title: 'Eat', id: (Math.random()*10)},
            { title: 'Walk the dog', id: (Math.random()*10)}
          ],
          taskInput: ''
        };
    }
    
    handleFormSubmit(event){
        event.preventDefault();
        //console.log(e);
        let tempState = this.state;
        tempState.todos.push({ title: event.target[0].value , id: (Math.random()*10) });
        //responsible for setting new state has access to passing the new state
        this.setState(tempState)
        document.getElementById("emptyInput").value = "";
        return false;
    }
    
    taskDelete(trash){
       // alert("button deleted");
  
        let tempTodos = this.state.todos.filter( (task) => task.id != trash);
        let tempState = this.state;
        tempState.todos = tempTodos;
        //responsible for setting new state has access to passing the new state
        this.setState(tempState);
    }
    
    render() {
        let theList = this.state.todos.map((currentElement, index) =>{
            return(
         <li key={currentElement.id} className="list-group-item d-flex justify-content-between align-items-center">
            {currentElement.title}
                <label onClick= {() => this.taskDelete(currentElement.id)}   className="btn btn-outline-secondary"><i className="fas fa-trash-alt"></i></label>
            </li>
        )
       });
        //everything goes inside a big div
        return (
            
            <div className="container">
                <div className="row">
                    <div className= "col-sm-12 col-md-6">
                        <div className="card">
                            <div className="card-header text-center listTitle">Sunday Shopping List</div>
                                <div className="card-block">
                                {/* onsubmit is allowing us to intercept the type=submit below to give it instruction this.handle is for anytime we want to interact with the state*/}
                                    <form onSubmit= {this.handleFormSubmit.bind(this)}>
                                        <div className="input-group">
                                            <input id="emptyInput" type="text" className="form-control" placeholder="add tasks" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                                <div className="input-group-append">
                                                    <input className="btn btn-outline-secondary" type="submit" value="+"/>
                                                </div>
                                         </div>
                                    </form>
                                    < div className="row">
                                        <div className="col-md-12">
                                           <ul className="list-group">
                                           {theList}
                                            </ul>
                                        </div>
                                    </div>
                                </div>        
                            </div> 
                        </div>
                    </div>
                </div>
            
        );
    }
}
