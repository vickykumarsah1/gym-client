import axios from "axios";

const getMonthlyJoined = async () => {
    try{
        const response = await axios.get('/members/monthly-member',{withCredentials:true});
        console.log(response);
        return response.data;
    } catch(error){
        console.error('Error fetching data:', error);
        throw error;
    }
}

const threeDayExpire = async () => {
      try{
        console.log("3 days")
        const response = await axios.get('/members/within-3-days-expiring',{withCredentials:true});
        console.log(response)
        return response.data;
    } catch(error){
        console.error('Error fetching data:', error);
        throw error;
    }
   
}


const fourToSevenDaysExpire = async () => {
     try{
        const response = await axios.get('/members/within-4-7-expiring',{withCredentials:true});
        return response.data;
    } catch(error){
        console.error('Error fetching data:', error);
        throw error;
    }
    
}

const expired = async () => {
   try{
        const response = await axios.get('/members/expired-member',{withCredentials:true});
        return response.data;
    } catch(error){
        console.error('Error fetching data:', error);
        throw error;
    }
}
const inActiveMembers = async () => {
    try{
        const response = await axios.get('/members/inactive-member',{withCredentials:true});
        return response.data;
    } catch(error){
        console.error('Error fetching data:', error);
        throw error;
    }
}



export {getMonthlyJoined, threeDayExpire, fourToSevenDaysExpire,expired,inActiveMembers};
