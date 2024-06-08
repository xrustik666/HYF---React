export default function Person({ person }) {
   if (!person) {
     return null;
   }
 
   const { first_name, last_name, email } = person;
 
   return (
     <ul>
       <li>First Name: {first_name}</li>
       <li>Last Name: {last_name}</li>
       <li>Email: {email}</li>
     </ul>
   );
 }