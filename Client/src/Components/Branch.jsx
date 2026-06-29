import React from "react";
import "./Branch.css";
import {useNavigate} from 'react-router-dom'

export default function Branch() {

  const navigate = useNavigate();
  
  const goToBranchWiseYears = (year) => {
    if(year === 1){
      navigate('/component/yearscs');
    }
    if(year === 2){
      navigate('/components/years');
    }
    if(year === 3){
      navigate('/component/yearsai');
    }
    if(year === 4){
      navigate('/component/yearsmat');
    }
    if(year === 5){
      navigate('/component/yearsci');
    }
    if(year === 6){
      navigate('/component/yearsmech');
    }
    if(year === 7){
      navigate('/component/yearsee');
    }
    if(year === 8){
      navigate('/component/yearsbb');
    }
    if(year === 9){
      navigate('/component/yearsce');
    }
  };

  return (
    <div className="subject-container">
      <h1>CampusConnect</h1>
      <p>Select Your Branch</p>

      <div className="subject-grid">

        <div className="subject-card" onClick={()=>goToBranchWiseYears(1)}>
          <h3>Computer Science</h3>
        </div>

        <div className="subject-card" onClick={()=>goToBranchWiseYears(2)}>
          <h3>Engineering Science</h3>
        </div>

        <div className="subject-card" onClick={()=>goToBranchWiseYears(3)}>
          <h3>Artificial Intelligence & Data Science</h3>
        </div>

        <div className="subject-card" onClick={()=>goToBranchWiseYears(4)}>
          <h3>Materials Engineering</h3>
        </div>

        <div className="subject-card" onClick={()=>goToBranchWiseYears(5)}>
          <h3>Civil Engineering</h3>
        </div>

        <div className="subject-card" onClick={()=>goToBranchWiseYears(6)}>
          <h3>Mechanical Engineering</h3>
        </div>

        <div className="subject-card" onClick={()=>goToBranchWiseYears(7)}>
          <h3>Electrical Engineering</h3>
        </div>

        <div className="subject-card" onClick={()=>goToBranchWiseYears(8)}>
          <h3>BioScience & BioEngineering</h3>
        </div>

        <div className="subject-card" onClick={()=>goToBranchWiseYears(9)}>
          <h3>Chemical Engineering</h3>
        </div>
      </div>
    </div>
  );
}