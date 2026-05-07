import React, { useEffect, useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import MemberCard from '../../Components/MemberCard/memberCard';
import { getMonthlyJoined,  threeDayExpire, fourToSevenDaysExpire, expired, inActiveMembers } from './data';

const GeneralUser = () => {
  const [header, setHeader] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const func = sessionStorage.getItem('func');
    functionCall(func);
  }, []);

  const functionCall = async (func) => {
    try {
      let datas;

      switch (func) {
        case "monthlyJoined":
          setHeader("Monthly Joined Members");
          datas = await getMonthlyJoined();
          break;
        
        case "allMembers":
          setHeader("All members");
          datas = await getMonthlyJoined();
          break;

        case "threeDayExpire":
          setHeader("Expiring In 3 Days Members");
          datas = await threeDayExpire();
          break;

        case "fourToSevenDaysExpire":
          setHeader("Expiring In 4-7 Days Members");
          datas = await fourToSevenDaysExpire();
          break;

        case "expired":
          setHeader("Expired Members");
          datas = await expired();
          break;

        case "inActiveMembers":
          setHeader("Inactive Members");
          datas = await inActiveMembers();
          break;

        default:
          return;
      }

      console.log(datas.members)
      setData(datas?.members || []);

    } catch (err) {
      console.log(err);
      alert("Unauthorized / Session Expired ❌");
    }
  };

  console.log(data)

  return (
    <div className='text-black p-5 w-3/4 flex-col'>
      <div className='border-2 bg-slate-900 flex justify-between w-full text-white rounded-lg p-3'>
        <Link to={'/dashboard'} className='border-2 pl-3 pr-3 pt-1 pb-1 rounded-2xl cursor-pointer'>
          <ArrowBackIcon /> Back
        </Link>
      </div>

      <div className='mt-5 text-xl'>{header}</div>

      <div className='bg-slate-100 p-5 mt-5 rounded-lg grid grid-cols-1 md:grid-cols-3 gap-2'>
        {
          data.length>=1?data.map((item, index) => (
            <MemberCard key={index} item={item} />
          )) : 'No such member'
        }
      </div>
    </div>
  );
};

export default GeneralUser;