import { useEffect,useState } from "react";
import"../style/employee.css"

export const EmployeeList = () => {
  const [employee,setEmployee] = useState([]);
    
  useEffect(() => {
      async function getdata(){
          const data = await fetch("http://localhost:8080/employee").then((d)=>{
              d.json().then((res)=>{
                 setEmployee(res)

              })
          });
         //  console.log(alldata)
      }
     getdata();
    //  console.log(getdata())
  })
 
    return (
      <div className="list_container">
        {employee.map(d=>
        /* On clicking this card anywhere, user goes to user details */

        <div className="employee_card">
          <img className="employee_image" src={d.image} alt="employee"/><br></br>
          <span className="employee_name">{d.employee_name}</span><br></br>
          <span className="employee_title">{d.title}</span>
        </div>
        
        )}
      </div>
        
    );
  };
