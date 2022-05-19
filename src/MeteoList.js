import React, { Component } from "react";
import "./Deppartments.css";
class MeteoList extends React.Component{
    constructor(props){
    super(props);
    this.state={
        city_info:[],
        current_condition:[],
        inputSearchValue:"",
        lien:"",
        clickB1:false,
        clickB2:false,
        clickB3:false,
        clickB4:false,
        actual:false,
        hour:false,
        fcst_day_0:[],
        fcst_day_1:[],
        fcst_day_2:[],
        fcst_day_3:[],
        value:""

    };
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTodayButton = this.handleTodayButton.bind(this);
    this.handleActualButton = this.handleActualButton.bind(this);
    this.handleTomorrowButton = this.handleTomorrowButton.bind(this);
    this.handleDay2Button = this.handleDay2Button.bind(this);
    this.handleDay3Button = this.handleDay3Button.bind(this);
    this.handleHourData = this.handleHourData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    }


      handleChangeInput(e) {
        const { value } = e.target;
        this.setState({
          lien:"https://www.prevision-meteo.ch/services/json/"+value
        });
      }


      handleSubmit(){
        this.setState({
          actual: true
        });

        fetch(this.state.lien)
        .then((data) => data.json())
        .then((data) => {
          this.setState({
            city_info: data.city_info,
            current_condition: data.current_condition,
            fcst_day_0:data.fcst_day_0,
            fcst_day_1:data.fcst_day_1,
            fcst_day_2:data.fcst_day_2,
            fcst_day_3:data.fcst_day_3
          });
        });
      }
  
      handleActualButton(){
        this.setState({
         actual:true,
         clickB1:false,
         clickB2:false
        });
      }

      handleTodayButton(){
      this.setState({
        clickB1:true,
        actual:false,
        clickB2:false
      });
    }
    handleTomorrowButton(){
      this.setState({
        clickB1:false,
        clickB2:true,
        actual:false
      });
    }
    
    handleDay2Button(){
      this.setState({
        clickB1:false,
        clickB2:false,
        actual:false,
        clickB3:true
      });
    }
    handleDay3Button(){
      this.setState({
        clickB1:false,
        clickB2:false,
        actual:false,
        clickB3:false,
        clickB4:true
      });
    }

    handleHourData(e) {
      this.setState({
          clickB1:false,
          clickB2:false,
          actual:false,
          clickB3:false,
          clickB4:false,
          hour:true
        });
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }
    
      render(){

          const selected=document.getElementById("houry_data");
          if(selected!=null){

            selected.value=this.state.value;
            
            if(selected.value=='0H00'){
              this.handleHourData();
            }
            else if(selected.value=='1H00'){
              this.handleHourData();
            }
 
        }
        console.log("hour="+this.state.hour);
        const {city_info,current_condition,clickB1,clickB2,clickB3,clickB4,fcst_day_0,fcst_day_1,fcst_day_2,fcst_day_3,actual,hour}=this.state;
          return(
    <div>
            <input
            id="city"
            type="text"
            name="nom"
            placeholder="City"
            onChange={this.handleChangeInput}            
            />
          <button onClick={() =>this.handleSubmit()}>Submit</button>
          
        
         {actual &&(
         <>
         <div width="400px">
         <h1>{city_info.name}, {city_info.country}</h1>
         <button className="today" onClick={()=>this.handleActualButton()}>Actuel</button>
         <button className="today" onClick={()=>this.handleTodayButton()}>{fcst_day_0.day_long}</button>
         <button className="today" onClick={()=>this.handleTomorrowButton()}>{fcst_day_1.day_long}</button>
         <button className="today" onClick={()=>this.handleDay2Button()}>{fcst_day_2.day_long}</button>
         <button className="today" onClick={()=>this.handleDay3Button()}>{fcst_day_3.day_long}</button>

         <select name="houry_data" id="houry_data" onChange={this.handleChange} className="today">
              <option id="1H00" value="1H00">1H00</option>  
              <option id="0H00" value="0H00">0H00</option>
              
        </select><br></br>


        
         <div  className="float-container"> 
          <div className="float-child">
          <img src={current_condition.icon_big} className="image"></img></div>
          <div className="float-child">
          <br></br>
             <p>T°C: <strong  id="temperature">{current_condition.tmp}</strong></p>
             <p>Humidité: <strong  id="temperature">{current_condition.humidity}</strong></p>
             <p>Condition: <strong  id="temperature">{current_condition.condition}</strong></p>
             <p>V.Vent: <strong  id="temperature">{current_condition.wnd_spd}</strong></p>
            </div>
          </div>
         </div>
         </>)}
          <br></br>
        
         {clickB1 && !actual && (
          <>
          <div width="400px">
          <h1>{city_info.name}, {city_info.country}</h1>
          <button className="today" onClick={()=>this.handleActualButton()}>Actuel</button>
          <button className="today" onClick={()=>this.handleTodayButton()}>{fcst_day_0.day_long}</button>
          <button className="today" onClick={()=>this.handleTomorrowButton()}>{fcst_day_1.day_long}</button>
          <button className="today" onClick={()=>this.handleDay2Button()}>{fcst_day_2.day_long}</button>
          <button className="today" onClick={()=>this.handleDay3Button()}>{fcst_day_3.day_long}</button><br></br>
          <div  className="float-container">
          <div className="float-child">
          <img src={fcst_day_0.icon} className="image"></img></div> 
           <div className="float-child">
             <br></br>
             <p>Tmax °C: <strong  id="temperature">{fcst_day_0.tmax}</strong></p>
             <p>Tmin °C: <strong  id="temperature">{fcst_day_0.tmin}</strong></p>
             <p>Condition: <strong  id="temperature">{fcst_day_0.condition}</strong></p>
             <p>Condition 0H00: <strong  id="temperature">{fcst_day_0.hourly_data["12H00"].CONDITION}</strong></p>

            </div>
          </div>
          </div>
          </>
          )}
     

     {clickB2 && !clickB1 && !actual && (
          <>
          <div width="400px">
          <h1>{city_info.name}, {city_info.country}</h1>
          <button className="today" onClick={()=>this.handleActualButton()}>Actuel</button>
          <button className="today" onClick={()=>this.handleTodayButton()}>{fcst_day_0.day_long}</button>
          <button className="today" onClick={()=>this.handleTomorrowButton()}>{fcst_day_1.day_long}</button>
          <button className="today" onClick={()=>this.handleDay2Button()}>{fcst_day_2.day_long}</button>
          <button className="today" onClick={()=>this.handleDay3Button()}>{fcst_day_3.day_long}</button><br></br>
          <div  className="float-container">
          <div className="float-child">
          <img src={fcst_day_1.icon} className="image"></img></div> 
           <div className="float-child">
           <br></br>
            
           <p>Tmax °C: <strong  id="temperature">{fcst_day_1.tmax}</strong></p>
             <p>Tmin °C: <strong  id="temperature">{fcst_day_1.tmin}</strong></p>
             <p>Condition: <strong  id="temperature">{fcst_day_1.condition}</strong></p>
             <p>Condition 12H00: <strong  id="temperature">{fcst_day_1.hourly_data["12H00"].CONDITION}</strong></p>
            </div>
          </div>
          </div>
          </>
          )}

{clickB3 && !clickB2 && !clickB1 && !actual && (
          <>
          <div width="400px">
          <h1>{city_info.name}, {city_info.country}</h1>
          <button className="today" onClick={()=>this.handleActualButton()}>Actuel</button>
          <button className="today" onClick={()=>this.handleTodayButton()}>{fcst_day_0.day_long}</button>
          <button className="today" onClick={()=>this.handleTomorrowButton()}>{fcst_day_1.day_long}</button>
          <button className="today" onClick={()=>this.handleDay2Button()}>{fcst_day_2.day_long}</button>
          <button className="today" onClick={()=>this.handleDay3Button()}>{fcst_day_3.day_long}</button><br></br>
          <div  className="float-container">
          <div className="float-child">
          <img src={fcst_day_2.icon} className="image"></img></div> 
           <div className="float-child">
           <br></br>
            
           <p>Tmax °C: <strong  id="temperature">{fcst_day_2.tmax}</strong></p>
             <p>Tmin °C: <strong  id="temperature">{fcst_day_2.tmin}</strong></p>
             <p>Condition: <strong  id="temperature">{fcst_day_2.condition}</strong></p>
             <p>Condition 12H00: <strong  id="temperature">{fcst_day_2.hourly_data["12H00"].CONDITION}</strong></p>
            </div>
          </div>
          </div>
          </>
          )}

{clickB4 &&!clickB3 && !clickB2 && !clickB1 && !actual && (
          <>
          <div width="400px">
          <h1>{city_info.name}, {city_info.country}</h1>
          <button className="today" onClick={()=>this.handleActualButton()}>Actuel</button>
          <button className="today" onClick={()=>this.handleTodayButton()}>{fcst_day_0.day_long}</button>
          <button className="today" onClick={()=>this.handleTomorrowButton()}>{fcst_day_1.day_long}</button>
          <button className="today" onClick={()=>this.handleDay2Button()}>{fcst_day_2.day_long}</button>
          <button className="today" onClick={()=>this.handleDay3Button()}>{fcst_day_3.day_long}</button><br></br>
          <div  className="float-container">
          <div className="float-child">
          <img src={fcst_day_3.icon} className="image"></img></div> 
           <div className="float-child">
           <br></br>
            
           <p>Tmax °C: <strong  id="temperature">{fcst_day_3.tmax}</strong></p>
             <p>Tmin °C: <strong  id="temperature">{fcst_day_3.tmin}</strong></p>
             <p>Condition: <strong  id="temperature">{fcst_day_3.condition}</strong></p>
             <p>Condition 12H00: <strong  id="temperature">{fcst_day_3.hourly_data["12H00"].CONDITION}</strong></p>
            </div>
          </div>
          </div>
          </>
          )}

{hour && !clickB4 &&!clickB3 && !clickB2 && !clickB1 && !actual && (
          <>
          <div id="hour" width="400px">
          <h1>{city_info.name}, {city_info.country}</h1>
          <div  className="float-container">
          <div className="float-child">
          <img src={fcst_day_3.icon} className="image"></img></div> 
           <div className="float-child">
           <br></br>
             <p>Condition {this.state.value}: <strong  id="temperature">{fcst_day_3.hourly_data[this.state.value].CONDITION}</strong></p>
            </div>
          </div>
          </div>
          </>
          )}
   </div>


    )    
}
}
export default MeteoList;