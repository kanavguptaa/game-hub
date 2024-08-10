import axios from "axios";


export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params:{
        key: "27c061153e1746ddb7ed74ec7758ca03"
    }
}) 