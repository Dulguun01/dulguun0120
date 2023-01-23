import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

export default function ChartScreen() {
    const[chats,setChats]=useState([])
    useEffect(()=>{
        fetch('http://192.168.1.49:3005/api/chats')
    },[])
  return (
    <>
    <Link to={'/chartscreen'}>
    
    
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-6">
            <div className="chart-container">
              <div className="wrapper">
                <ul>

                <li className="chat-item">
                  <div className="text">
                    <strong className="author"></strong>
                  </div>
                  <div className="creatAt">

                  </div>
                </li>
                </ul>
              </div>

              <form action="">
                <textarea type="text" />
                <button>send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Link>
    </>
  );
  
}

