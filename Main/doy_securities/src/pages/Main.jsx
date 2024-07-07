import { useState } from 'react'
import Input from '../Component/Input'
import '../App.css'

function Main() {
    const offset = new Date().getTimezoneOffset() * 60000;
    const [today, setToday] = useState(new Date(Date.now() - offset).toISOString().split('T')[0]);
    return (
    <>
        <div className="main">
            <div className="inputs">
                <Input type="text" name="item_cod"/> 

                <Input type="date" name="start_date"/> 
                <span> ~ </span>
                <Input type="date" name="end_date" value={today} onChange={(e) => setToday(e.target.value)}  />
                
            </div>
            <div className="chart">
                chart
            </div>
        </div>
    </>
  )
}

export default Main
