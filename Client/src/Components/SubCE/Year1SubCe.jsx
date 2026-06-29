import React from "react";
import "../YearSub.css";
import { useNavigate } from "react-router-dom";

export default function Year1SubCe() {
  const navigate = useNavigate();
  
    const goToAssignmentPage = (sub) => {
      if(sub === 1){
        navigate('/firstyearphysics');
      }
      if(sub === 2){
        navigate('/firstyearchemistry');
      }
      if(sub === 3){
        navigate('/firstyearmaths1');
      }
      if(sub === 4){
        navigate('/firstyearem');
      }
      if(sub === 5){
        navigate('/firstyearmath2');
      }
      if(sub === 6){
        navigate('/firstyearics');
      }
      if(sub === 7){
        navigate('/firstyeariie');
      }
      if(sub === 8){
        navigate('/firstyearib');
      }
    }; 

  return (
    <div className="subject-container">
      <h1>CampusConnect</h1>
      <p>Select a Subject</p>

      <div className="subject-grid">

        <div className="subject-card" onClick={()=>goToAssignmentPage(1)}>
          <h3>Physics</h3>
          <p>Assignments & Discussions</p>
        </div>

        <div className="subject-card" onClick={()=>goToAssignmentPage(2)}>
          <h3>Chemistry</h3>
          <p>Assignments & Discussions</p>
        </div>

        <div className="subject-card" onClick={()=>goToAssignmentPage(3)}>
          <h3>Mathematics I</h3>
          <p>Assignments & Discussions</p>
        </div>

        <div className="subject-card" onClick={()=>goToAssignmentPage(4)}>
          <h3>Engineering Mechanics</h3>
          <p>Assignments & Discussions</p>
        </div>

        <div className="subject-card" onClick={()=>goToAssignmentPage(5)}>
          <h3>Mathematics II</h3>
          <p>Assignments & Discussions</p>
        </div>

        <div className="subject-card" onClick={()=>goToAssignmentPage(6)}>
          <h3>Introduction to Computer Science</h3>
          <p>Assignments & Discussions</p>
        </div>

        <div className="subject-card" onClick={()=>goToAssignmentPage(7)}>
          <h3>Introduction to Electrical Engineering</h3>
          <p>Assignments & Discussions</p>
        </div>

        <div className="subject-card" onClick={()=>goToAssignmentPage(8)}>
          <h3>Introduction to Bioengineering</h3>
          <p>Assignments & Discussions</p>
        </div>
      </div>
    </div>
  );
}