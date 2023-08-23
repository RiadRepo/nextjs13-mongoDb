"use client";
import { useState } from "react";

export default function ContactForm() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    // e.preventDefault();
   

    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        email,
        message,
      }),
    });
    const { msg } = await res.json();
    setError(msg);
    
  };

  return (
    <>
      <form
        className='py-4 mt-4 border-t flex flex-col gap-5'
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor='fullname'>Full Name</label>
          <input
            onChange={(e) => setFullname(e.target.value)}
            value={fullname}
            type='text'
            id='fullname'
            placeholder='Jhon Doe'
          ></input>
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type='text'
            id='email'
            placeholder='jhon@gmail.com'
          ></input>
        </div>
        <div>
          <label htmlFor='message'>Message</label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            id='message'
            className='h-32'
            placeholder='Type your message here...'
          ></textarea>
        </div>
        <button type='submit' className='bg-green-700 p3 text-white font-bold'>
          Send
        </button>
      </form>
      <div className='bg-slate-100 flex flex-col'>
        {error&&
        error?.map((e,idx)=>(
          <div key={idx} className='text-red-600 px-5 py-2'>{e}</div>
        ))}
       
      </div>
    </>
  );
}
