import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// import './AdminManager.css';

const RevenuePage = () => {
  const location = useLocation();

  const data = [
    {
      id: 1,
      hinh:"public/ec46334718d4ee1a37ca49cd652a194d.jpg",
      customerName: 'Customer1 Studio Owner',
      checkIn: '12 Mar 2021',
      type: 'Small',
      time: '16h-18h',
      price: '$100',
    },
    {
      id: 2,
      hinh:"public/ec46334718d4ee1a37ca49cd652a194d.jpg",
      customerName: 'Customer2 Studio Owner',
      checkIn: '12 Mar 2021',
      type: 'Small',
      time: '18h-20h',
      price: '$100',
    },
  ];

  return (
    <div id="RevenuePage">
    <div className="admin-manager">
      <h1 className='admin-title'>Admin Manager</h1>
      <div className="tabs">
  <Link to="/adminmanager" className={location.pathname === '/adminmanager' ? 'active-tab' : ''}>
    Studios
  </Link>
  <Link to="/revenue" className={location.pathname === '/revenue' ? 'active-tab' : ''}>
    Revenue
  </Link>
  <Link to="/accounts" className={location.pathname === '/accounts' ? 'active-tab' : ''}>
    Accounts
  </Link>
</div>
      <div className="studio-list-lo">
        {data.map((item) => (
          <div className="studio-item" key={item.id}>
            <div className="studio-info">
              <div className="avatar-lo">
                 <img src={item.hinh} alt="" className='hinh-owner' />
              </div>
              <div className="details-lo">
                <h3 className='admin-t'>{item.customerName}</h3>
                <p className='info-own'>
                  Check In: {item.checkIn} &nbsp; | &nbsp; Type: {item.type} &nbsp; | &nbsp;
                  Time: {item.time}
                </p>
                <p className='info-own'>{item.price}</p>
              </div>
            </div>
            <button className="view-detail-btn">View Detail</button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default RevenuePage;
