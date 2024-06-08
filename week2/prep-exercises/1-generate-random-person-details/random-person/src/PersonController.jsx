import React, { useState, useEffect } from 'react';
import Person from './Person';

export default function PersonController() {
  const [personData, setPersonData] = useState(null);

  const getPerson = async () => {
    try {
      const response = await fetch('https://www.randomuser.me/api?results=1');
      const data = await response.json();
      const formattedPerson = formatPersonData(data.results[0]);
      setPersonData(formattedPerson);
    } catch (error) {
      console.error('Error fetching random user:', error);
    }
  };

  const formatPersonData = (person) => {
    const { first, last } = person.name;
    const email = person.email;
    return { first_name: first, last_name: last, email };
  };

  useEffect(() => {
    getPerson();
  }, []);

  return (
    <div>
      <Person person={personData} />
    </div>
  );
}
