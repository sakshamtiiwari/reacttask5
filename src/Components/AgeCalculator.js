import React, { useState } from 'react';

const AgeCalculator = () => {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const birthDate = new Date(dob);
    const currentDate = new Date();
    const ageDiff = currentDate - birthDate;

    const ageDate = new Date(ageDiff);
    const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);

    setAge(calculatedAge);
  };

  return (
    <div class="container">
      <h1>Age Calculator</h1>
      <h3>Enter your Date of Birth:</h3>
      <input
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      /><br/>
      <button onClick={calculateAge}>Calculate Age</button>
      {age !== '' && (
        <h2>You Are {age} years old</h2>
      )}
    </div>
  );
};

export default AgeCalculator;
