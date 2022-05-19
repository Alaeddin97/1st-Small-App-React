
import React from "react";
import "./Deppartments.css";
class CoursSpring extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     data:[]
    };

  }
  
  componentDidMount() {
  fetch("http://localhost:8080/API/AnimalsTop2ByAgeGreaterThanByEspece/10/chat")
      .then((data) => data.json())
      .then((data) => {
        this.setState({
          items: data,

        });
      });
  }



  render() {

 
    
    return (
      <div>
       {this.state.data.nom}

      </div>
    );
  }
}
export default CoursSpring;
