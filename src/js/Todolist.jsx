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
    render() {
        let theList = this.state.todos.map((currentElement, index) =>{
            return(
         <li className="list-group-item d-flex justify-content-between align-items-center">
            XXXXX
                <label className="btn btn-outline-secondary"><i className="fas fa-trash-alt"></i></label>
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
                                    <form>
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="add tasks" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                                <div className="input-group-append">
                                                    <button className="btn btn-outline-secondary" type="button">ADD</button>
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
