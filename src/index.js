import React from 'react';
import ReactDOM from 'react-dom';


const App= (props) => {
        
    return(
        <div className="ui container comments">
            <div className="comment">
               <a href="/" className="avatar"><img src={props.image} alt={props.imgname} height="100px" width="200px"/></a>
               <div className="content">
                   <a href="/" className="author">{props.authname}</a>
               
               <div className="metadata">
                    <span  className="date">Today at {props.time}</span>
               </div>
               <div className="text">{props.comment}</div>
               </div>
            </div>
        </div>


    );
}

const Approvecard=(props)=>{
    console.log(props.children)
    return(
        <div className="ui card">
            <div className="content">{props.children}</div>
            <div className="extra Content">
                <div>
                   <div className="ui basic green button">Accept</div>
                   <div className="ui basic red button">Button</div>
                </div>
            </div>
        </div>
    )
}

const Blog=()=>{
    return(
        <div>
             <Approvecard><App authname="Surajith "time="6:00PM" comment="No Comments"  image="https://www.w3schools.com/css/img_5terre.jpg" imgname="House"/></Approvecard>
             <Approvecard><App authname="Vijay" time="7:00PM" comment="I liked it very much" image="https://www.w3schools.com/css/img_forest.jpg" imgname="Forest"/></Approvecard>
             <Approvecard><App authname="Viswa" time="12:00PM" comment="Pretty Impressive" image="https://www.w3schools.com/css/img_mountains.jpg" imgname="Mountains"/></Approvecard>
        </div>
       
    );
}
ReactDOM.render(<Blog/>,document.getElementById("root"))
