import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Email() {
    const [recipient, setRecipient] = useState('');
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');
    const [emailSent, setEmailSent] = useState(false);
  
    const sendEmail = async (e) => {
      e.preventDefault();
  
      try {
        const templateParams = {
          to_email: recipient,
          from_name: 'Your Name',
          message: content,
        };
  

     
      const serviceId = 'service_98drf5k';
      const templateId = 'template_9aosxxp';
      const publicKey = 'eCVQbJw3GfQlk5VP6';
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setEmailSent(true);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div>
      <h2>Send Email</h2>
      <form onSubmit={sendEmail}>
        <label>
          Recipient:
          <input type="email" value={recipient} onChange={(e) => setRecipient(e.target.value)} />
        </label>
        <label>
          Subject:
          <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
        </label>
        <label>
          Content:
          <textarea value={content} onChange={(e) => setContent(e.target.value)} />
        </label>
        <button type="submit">Send Email</button>
      </form>
      {emailSent && <p>Email sent successfully!</p>}
    </div>
  );
}

export default Email;