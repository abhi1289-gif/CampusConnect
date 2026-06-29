import { Route, Routes } from 'react-router-dom'
import './App.css'
import ProtectedRoute from "./Components/ProtectedRoute";

import Login from './Components/Login'
import Registration from './Components/Registration'
import Years from './Components/Year_Component/Years'
import Branch from './Components/Branch'

import Year1Sub from './Components/Year_Component/Year1Sub'
import Year2Sub from './Components/Year_Component/Year2Sub'
import Year3Sub from './Components/Year_Component/Year3Sub'
import Year4Sub from './Components/Year_Component/Year4Sub'

// Computer Science
import Year1SubCs from './Components/SubCS/Year1SubCs'
import Year2SubCs from './Components/SubCS/Year2SubCs'
import Year3SubCs from './Components/SubCS/Year3SubCs'
import Year4SubCs from './Components/SubCS/Year4SubCs'

// Artificial Intelligence & Data Science
import Year1SubAi from './Components/SubAI/Year1SubAi'
import Year2SubAi from './Components/SubAI/Year2SubAi'
import Year3SubAi from './Components/SubAI/Year3SubAi'
import Year4SubAi from './Components/SubAI/Year4SubAi'

// BioScience & BioEngineering
import Year1SubBb from './Components/SubBB/Year1SubBb'
import Year2SubBb from './Components/SubBB/Year2SubBb'
import Year3SubBb from './Components/SubBB/Year3SubBb'
import Year4SubBb from './Components/SubBB/Year4SubBb'

// Civil Engineering
import Year1SubCe from './Components/SubCE/Year1SubCe'
import Year2SubCe from './Components/SubCE/Year2SubCe'
import Year3SubCe from './Components/SubCE/Year3SubCe'
import Year4SubCe from './Components/SubCE/Year4SubCe'

// Chemical Engineering
import Year1SubCi from './Components/SubCI/Year1SubCi'
import Year2SubCi from './Components/SubCI/Year2SubCi'
import Year3SubCi from './Components/SubCI/Year3SubCi'
import Year4SubCi from './Components/SubCI/Year4SubCi'

// Electrical Engineering
import Year1SubEe from './Components/SubEE/Year1SubEe'
import Year2SubEe from './Components/SubEE/Year2SubEe'
import Year3SubEe from './Components/SubEE/Year3SubEe'
import Year4SubEe from './Components/SubEE/Year4SubEe'

// Materials Engineering
import Year1SubMat from './Components/SubMat/Year1SubMat'
import Year2SubMat from './Components/SubMat/Year2SubMat'
import Year3SubMat from './Components/SubMat/Year3SubMat'
import Year4SubMat from './Components/SubMat/Year4SubMat'

// Mechanical Engineering
import Year1SubMech from './Components/SubMech/Year1SubMech'
import Year2SubMech from './Components/SubMech/Year2SubMech'
import Year3SubMech from './Components/SubMech/Year3SubMech'
import Year4SubMech from './Components/SubMech/Year4SubMech'

import YearAi from './Components/SubAI/YearAi'
import YearBb from './Components/SubBB/YearBb'
import YearCe from './Components/SubCE/YearCe'
import YearCi from './Components/SubCI/YearCi'
import YearCs from './Components/SubCS/YearCs'
import YearEe from './Components/SubEE/YearEe'
import YearMat from './Components/SubMat/YearMat'
import YearMech from './Components/SubMech/YearMech'

import Physics from './Components/Year_Component/AssignmentYear1/Physics'
import Chemistry from './Components/Year_Component/AssignmentYear1/Chemistry'
import EnginMech from './Components/Year_Component/AssignmentYear1/EnginMech'
import Ib from './Components/Year_Component/AssignmentYear1/Ib'
import Ics from './Components/Year_Component/AssignmentYear1/Ics'
import Iie from './Components/Year_Component/AssignmentYear1/Iie'
import Maths1 from './Components/Year_Component/AssignmentYear1/Maths1'
import Maths2 from './Components/Year_Component/AssignmentYear1/Maths2'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/register' element={<Registration/>}></Route>
        <Route path='/components/years' element={<ProtectedRoute><Years/></ProtectedRoute>}></Route>
        <Route path='/branch' element={<ProtectedRoute><Branch/></ProtectedRoute>}></Route>

        <Route path='/component/year1sub' element={<ProtectedRoute><Year1Sub/></ProtectedRoute>}></Route>
        <Route path='/component/year2sub' element={<ProtectedRoute><Year2Sub/></ProtectedRoute>}></Route>
        <Route path='/component/year3sub' element={<ProtectedRoute><Year3Sub/></ProtectedRoute>}></Route>
        <Route path='/component/year4sub' element={<ProtectedRoute><Year4Sub/></ProtectedRoute>}></Route>

        <Route path='/subcs/year1subcs' element={<ProtectedRoute><Year1SubCs/></ProtectedRoute>}></Route>
        <Route path='/subcs/year2subcs' element={<ProtectedRoute><Year2SubCs/></ProtectedRoute>}></Route>
        <Route path='/subcs/year3subcs' element={<ProtectedRoute><Year3SubCs/></ProtectedRoute>}></Route>
        <Route path='/subcs/year4subcs' element={<ProtectedRoute><Year4SubCs/></ProtectedRoute>}></Route>

        <Route path='/subai/year1subai' element={<ProtectedRoute><Year1SubAi/></ProtectedRoute>}></Route>
        <Route path='/subai/year2subai' element={<ProtectedRoute><Year2SubAi/></ProtectedRoute>}></Route>
        <Route path='/subai/year3subai' element={<ProtectedRoute><Year3SubAi/></ProtectedRoute>}></Route>
        <Route path='/subai/year4subai' element={<ProtectedRoute><Year4SubAi/></ProtectedRoute>}></Route>

        {/* BioScience & BioEngineering */}
        <Route path="/subbb/year1subbb" element={<ProtectedRoute><Year1SubBb /></ProtectedRoute>} />
        <Route path="/subbb/year2subbb" element={<ProtectedRoute><Year2SubBb /></ProtectedRoute>} />
        <Route path="/subbb/year3subbb" element={<ProtectedRoute><Year3SubBb /></ProtectedRoute>} />
        <Route path="/subbb/year4subbb" element={<ProtectedRoute><Year4SubBb /></ProtectedRoute>} />

        {/* Civil Engineering */}
        <Route path="/subce/year1subce" element={<ProtectedRoute><Year1SubCe /></ProtectedRoute>} />
        <Route path="/subce/year2subce" element={<ProtectedRoute><Year2SubCe /></ProtectedRoute>} />
        <Route path="/subce/year3subce" element={<ProtectedRoute><Year3SubCe /></ProtectedRoute>} />
        <Route path="/subce/year4subce" element={<ProtectedRoute><Year4SubCe /></ProtectedRoute>} />

        {/* Chemical Engineering */}
        <Route path="/subci/year1subci" element={<ProtectedRoute><Year1SubCi /></ProtectedRoute>} />
        <Route path="/subci/year2subci" element={<ProtectedRoute><Year2SubCi /></ProtectedRoute>} />
        <Route path="/subci/year3subci" element={<ProtectedRoute><Year3SubCi /></ProtectedRoute>} />
        <Route path="/subci/year4subci" element={<ProtectedRoute><Year4SubCi /></ProtectedRoute>} />

        {/* Electrical Engineering */}
        <Route path="/subee/year1subee" element={<ProtectedRoute><Year1SubEe /></ProtectedRoute>} />
        <Route path="/subee/year2subee" element={<ProtectedRoute><Year2SubEe /></ProtectedRoute>} />
        <Route path="/subee/year3subee" element={<ProtectedRoute><Year3SubEe /></ProtectedRoute>} />
        <Route path="/subee/year4subee" element={<ProtectedRoute><Year4SubEe /></ProtectedRoute>} />

        {/* Materials Engineering */}
        <Route path="/submat/year1submat" element={<ProtectedRoute><Year1SubMat /></ProtectedRoute>} />
        <Route path="/submat/year2submat" element={<ProtectedRoute><Year2SubMat /></ProtectedRoute>} />
        <Route path="/submat/year3submat" element={<ProtectedRoute><Year3SubMat /></ProtectedRoute>} />
        <Route path="/submat/year4submat" element={<ProtectedRoute><Year4SubMat /></ProtectedRoute>} />

        {/* Mechanical Engineering */}
        <Route path="/submech/year1submech" element={<ProtectedRoute><Year1SubMech /></ProtectedRoute>} />
        <Route path="/submech/year2submech" element={<ProtectedRoute><Year2SubMech /></ProtectedRoute>} />
        <Route path="/submech/year3submech" element={<ProtectedRoute><Year3SubMech /></ProtectedRoute>} />
        <Route path="/submech/year4submech" element={<ProtectedRoute><Year4SubMech /></ProtectedRoute>} />

        <Route path="/component/yearsee" element={<ProtectedRoute><YearEe/></ProtectedRoute>}></Route>
        <Route path="/component/yearsai" element={<ProtectedRoute><YearAi/></ProtectedRoute>}></Route>
        <Route path="/component/yearsbb" element={<ProtectedRoute><YearBb/></ProtectedRoute>}></Route>
        <Route path="/component/yearsce" element={<ProtectedRoute><YearCe/></ProtectedRoute>}></Route>
        <Route path="/component/yearscs" element={<ProtectedRoute><YearCs/></ProtectedRoute>}></Route>
        <Route path="/component/yearsci" element={<ProtectedRoute><YearCi/></ProtectedRoute>}></Route>
        <Route path="/component/yearsmat" element={<ProtectedRoute><YearMat/></ProtectedRoute>}></Route>
        <Route path="/component/yearsmech" element={<ProtectedRoute><YearMech/></ProtectedRoute>}></Route>

        <Route path='/firstyearphysics' element={<ProtectedRoute><Physics/></ProtectedRoute>}></Route>
        <Route path='/firstyearem' element={<ProtectedRoute><EnginMech/></ProtectedRoute>}></Route>
        <Route path='/firstyearib' element={<ProtectedRoute><Ib/></ProtectedRoute>}></Route>
        <Route path='/firstyearics' element={<ProtectedRoute><Ics/></ProtectedRoute>}></Route>
        <Route path='/firstyeariie' element={<ProtectedRoute><Iie/></ProtectedRoute>}></Route>
        <Route path='/firstyearmaths1' element={<ProtectedRoute><Maths1/></ProtectedRoute>}></Route>
        <Route path='/firstyearmath2' element={<ProtectedRoute><Maths2/></ProtectedRoute>}></Route>
        <Route path='/firstyearchemistry' element={<ProtectedRoute><Chemistry/></ProtectedRoute>}></Route>


      </Routes>
    </>
  )
}

export default App