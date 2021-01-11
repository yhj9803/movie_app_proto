import React from "react";
import PropTypes from "prop-types";
import MyTest from "./MyTest.js";
/*
function PersonalData({seq, name, job}){
  return (
    <h2>{seq} is {name}, {job}</h2>
  )
}

PersonalData.propTypes = {
  seq: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired
}

const inform = [
{
  seq: "First",
  name: "YoonHoJae",
  job: "Student",
},
{
  seq: "Second",
  name: "ParkHyoShin",
  job: "Singer",
},
{
  seq: "Third",
  name: "KimSueGeun",
  job: "Architect",
},
{
  seq: "Fourth",
  name: "LeeByungHeon",
  job: "actor",
},
{
  seq: "Fifth",
  name: "PeterChumThor",
  job: "Architect",
}
] 

function App() {
  return (
  <div>
  {inform.map((data, index) => (<PersonalData seq={data.seq} name={data.name} job={data.job} key={index}/>))}
  </div>
  )
}*/

class App extends React.Component{
  state = {
    timeOut: 5000,
    isLoading: true
  };
  componentDidMount(){
    setTimeout(this.finishLoad, 5000)
  }
  finishLoad = () => {
    this.setState(current => ({ isLoading: false}))
  }
  render(){
    const current = this.state;
    const isLoading = this.state.isLoading;
    return (
    <div>
      { isLoading ? "Loading..." : <MyTest />}
    </div>
    )
  };
}

export default App;
