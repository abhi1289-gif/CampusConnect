import React from 'react'
import "../Login.css";
import {useNavigate} from 'react-router-dom'

export default function YearMat() {

const navigate = useNavigate();

  const goToYear = (year) =>{
    if(year === 1){
      navigate('/submat/year1submat');
    }
    if(year === 2){
      navigate('/submat/year2submat');
    }
    if(year === 3){
      navigate('/submat/year3submat');
    }
    if(year === 4){
      navigate('/submat/year4submat');
    }
  }

  return (
    <div className="years-container">
      <h1>CampusConnect</h1>
      <h2 style={{ color: "#1f3c88", marginBottom: "10px" }}>
        Materials Engineering
      </h2>
      <p>Select Your Academic Year</p>

      <div className="years-grid">
        <div className="year-card" onClick={()=>goToYear(1)}>
          <h2>1st Year</h2>
          <p>Assignments & Discussions</p>
        </div>

        <div className="year-card" onClick={()=>goToYear(2)}>
          <h2>2nd Year</h2>
          <p>Assignments & Discussions</p>
        </div>

        <div className="year-card" onClick={()=>goToYear(3)}>
          <h2>3rd Year</h2>
          <p>Assignments & Discussions</p>
        </div>

        <div className="year-card" onClick={()=>goToYear(4)}>
          <h2>4th Year</h2>
          <p>Assignments & Discussions</p>
        </div>
      </div>
    </div>
  )
}
