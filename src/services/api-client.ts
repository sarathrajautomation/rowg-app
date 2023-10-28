import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:'878aae21e3444878aec62b4587c3b6e4'
    }


})