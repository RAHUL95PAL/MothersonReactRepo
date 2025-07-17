import axios from "axios";

import { useEffect,useState } from "react";

export default function EmployeeListAxios(){
    const [data,setData]=useState([])
    const[loading,setLoading]=useState(true);
    const[error,setError]=useState(null);

    useEffect(()=>{
        axios.get("http://localhost:5033/api/Curd")
        .then((response)=>{
         setData(response.data);
         setLoading(false);

        })
        .catch((err)=>{
          setError(err.message);
          setLoading(false);
        });
    },[]);

    if(loading) return <div>Loading Data...</div>
    if(error) return <div>Error...{error}</div>

    return(
        <div>
            <h1>Employee List</h1>
            <table border="1" cellPadding="5" cellSpacing="0">
                <thead>
                    <tr>
                         <th>SSN</th>
                          <th>Name</th>
                         <th>Last Name</th>
                         <th>Department</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(({ ssn, name, lastName, department })=>
                    (
                        <tr key={ssn}>
                              <td>{ssn}</td>
                               <td>{name}</td>
                               <td>{lastName}</td>
                              <td>{department}</td>

                        </tr>
                    )
                )}
                </tbody>

            </table>
        </div>
    )

}