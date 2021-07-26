import React, { useState } from 'react';
import {send} from 'emailjs-com';
// init('user_aq21pFOpgUo5F1mESt8Tp');
const Contact = () => {
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
      });
    
      const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_qppt2hm',
            'template_v3wtwja',
            toSend,
            'user_aq21pFOpgUo5F1mESt8Tp'
          )
            .then((response) => {
              console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
              console.log('FAILED...', err);
            });
      };
    
      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };
    return (
        <div className='container contactWrap'>
           <h1 className='contact'>Contact me</h1>
        <form onSubmit={onSubmit}>
        <div className='row'>
        <input
          type='text'
          name='from_name'
          placeholder='Name:'
          value={toSend.from_name}
          onChange={handleChange}
          className='name-input col-md-12'
        />
        </div>
        <div className='row'>
        <input
          type='text'
          name='reply_to'
          placeholder='Email:'
          value={toSend.reply_to}
          onChange={handleChange}
          className='email-input col-md-12'
        />
        </div>
        <div className='row'>
        <textarea
          type='text'
          name='message'
          placeholder='Message:'
          value={toSend.message}
          onChange={handleChange}
          className='form-control message-input col-md-12'
          rows='5'
        />
        <button type='submit' className='btn btn-primary submit-button'>Submit</button>
        </div>
      </form>
      </div>
    )
}

export default Contact;