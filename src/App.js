import './App.css';
import jsonFile from './data/data.json';
import React from 'react';

function App() {


  return (

    <div className="App">

      <h1>Slack Chat Data Table</h1>

      <div className="container">
        <div className="header-wrapper">
          <div className="wrapper">User Id</div>
          <div className="wrapper">Message</div>
          <div className="wrapper">Date</div>
        </div>
        {jsonFile.map((data, i) => (

          <div key={data.client_msg_id} className="table-wrapper">
            <div className="wrapper">
              {/* <label>User Id</label> */}
              {data.blocks[0].elements[0].elements.map((chat, index) => (
                <div key={data.blocks[0].elements[0].block_id}> 
                  <p key={"userid"+index}>{chat.user_id !== undefined ? chat.user_id : "N/A"}</p>
                </div>
              ))}
            </div>

            <div className="wrapper">
              {/* <label>Message</label> */}
              {data.blocks[0].elements[0].elements.map((chat, index) => (
                <div key={data.blocks[0].elements[0].block_id}> 
                  <p key={"message"+index}>{chat.text !== undefined ? chat.text : null}</p>
                </div>
              ))}
            </div>

            <div className="wrapper">
              {/* <label>Date</label> */}
              <p key={"date"+i}>{new Date(data.date * 1000).toUTCString()}</p>
            </div>
          </div>
      
        ))}
      </div>


      <p>Length: {jsonFile.length}</p>

    </div>
  );
}

export default App;
