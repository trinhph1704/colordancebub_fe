import React, { useState } from 'react';
import './UpdateuserPage.css'; 




const UpdateuserPage = () => {
return(
  <div id="UpdateuserPage">
<div className='Update-tong'>

<div className='Info-User'>
<div className='image-userupdate'>
    <img src="public\avarta t.jfif" alt="" className='hinh-user-update' />
</div>
<div className='indentity-tong'>
    <div className='indentity-title-chua'>
        <h2 className='indentity-title'>Identity Verification</h2>
    </div>
<div className='indentity-sub-chua'>
<span className='indentity-sub'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</span>
</div>

</div>
<div className='info-confirm'>
<div className='info-title-chua'>
    <h2 className='info-title-update'>Jonh Doe</h2>
</div>
<div className='info-sub'>
    <div>
         <span className='info-sub-email'>Email Confirmed</span>
    </div>
   <div>
     <span className='info-sub-mobile'>Mobile Confirmed</span>
   </div>
   
</div>
</div>
</div>
<div className='Input-user'>
  <div className='header-container'>
    <h2 className='basic-info-title'>Basic information</h2>
    <button className='view-profile-button'>View Profile</button>
  </div>
  <div className='input-container'>
    <div className='input-row'>
      <div className='input-group'>
        <label htmlFor='firstName' className='labelne'>First name</label>
        <input type='text' id='firstName' name='firstName' placeholder='First name' className='fname' />
      </div>
      <div className='input-group'>
        <label htmlFor='lastName' className='labelne'>Last name</label>
        <input type='text' id='lastName' name='lastName' placeholder='Last name' className='lname' />
      </div>
    </div>
    <div className='input-group'>
      <label htmlFor='phoneNumber' className='labelne'>Phone number</label>
      <input type='text' id='phoneNumber' name='phoneNumber' className='phonenumber' placeholder='Phone number' />
    </div>
    <div className='input-group'>
      <label htmlFor='email' className='labelne'>Email</label>
      <div className='email-input-wrapper'>
        <input type='email' id='email' name='email' placeholder='Email' className='emailne' />
        <span className='email-lock-icon'>🔒</span>
      </div>
    </div>
    <div className='form-actions'>
      <button className='cancel-button'>Cancel</button>
      <button className='save-button'>Save</button>
    </div>
  </div>
</div>
</div>
</div>
);
};
export default UpdateuserPage;