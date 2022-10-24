import { parseApiUrl, getToken  } from "./endPoints";

export const makeLogin = async (Email, Password) => {
    try {
        const data = {
            email: Email,
            password: Password
        }
        const config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }
        const response = await fetch(parseApiUrl('login'), config)
        const json = await response.json()
        if(response.status === 200){
            const { token, expiration, role} = json;
            return {
                token,
                expiration,
                role,
            };
        }
    } catch (error) {
        return console.log(error);
    }
};


/* const requestBody = {
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
*/