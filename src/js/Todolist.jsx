import React from 'react';

export class Todolist extends React.Component {
    
    render() {
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
                                <div className="row">
                                    <div className="col-md-12">
                                       <ul className="list-group">
                                          <li className="list-group-item d-flex justify-content-between align-items-center">
                                            Onions
                                           <button className="btn btn-outline-secondary" type="button">X</button>
                                          </li>
                                          <li className="list-group-item d-flex justify-content-between align-items-center">
                                           mushrooms
                                            <button className="btn btn-outline-secondary" type="button">X</button>
                                          </li>
                                          <li className="list-group-item d-flex justify-content-between align-items-center">
                                            almond milk
                                            <button className="btn btn-outline-secondary" type="button">X</button>
                                          </li>
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
