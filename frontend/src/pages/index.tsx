import { useEffect, useState } from "react";

export default function Home() {

  const [message, setMessage] = useState("Loading")

  useEffect(() => {

    // In local machine, this is how it connects to backend. 
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/users");
        if (!response.ok){
          throw new Error('Local host error');
        }
      
        const data = await response.json();
        
        console.log(data);
        setMessage(data);
      
      } catch (error) {
        console.error("Local Host fetch fail", error);
        tryVercelFetch();
      }
    };

    // When deployed to Vercel, the frontend calls the backend website. 
    const tryVercelFetch = async () => {
      try {
        const altResponse = await fetch("https://dsd-cohort-nutrition-backend.vercel.app/api/users");
        if (!altResponse.ok){
          throw new Error('Alt host error');
        }
      
        const data = await altResponse.json();
        
        console.log(data);
        setMessage(data.message);
      } catch (error) {
        console.error("Vercel Host fetch fail", error);
      }
    };

    fetchData();

  }, []) 



  return (
    <div>
      {JSON.stringify(message)}
    </div>
    
  )
}
