'use client';
import { useState } from 'react';

function BecomeMember() {
  const postEmail = async () => {
    const response = await fetch('/api/emails', {
      method: 'POST',
      body: JSON.stringify({
        email: '', // Enter the email you want to send to. This is supposed to be generic later.
        firstName: '', // Same for this one
      }),
    });
    const data = await response.json();
    console.log('data :', data);
  };

  return (
    <div className="flex flex-col items-center justify-center my-auto">
      <h1>Sign the contract</h1>
      <button className="bg-slate-300 w-24 h-10 rounded-sm" onClick={postEmail}>
        Bli Medlem
      </button>
    </div>
  );
}

export default BecomeMember;
