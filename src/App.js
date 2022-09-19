
import './App.css';


function App() {

  const requestBody = {
    "username":"xime",
    "password": "asdf" 
  }

  fetch("api/auth/login",{
  headers:{
       "Content-Type": "application/json"
    }, 
    method: "post", 
    body: JSON.stringify(requestBody),
  }).then((response)=> Promise.all([response.json(),response.headers]))
  .then(([body,headers])=>{
    const jwt = headers.get("authorization");
      console.log(jwt);
  });
  
  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
}

export default App;
