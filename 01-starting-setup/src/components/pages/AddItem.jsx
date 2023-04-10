import  { useContext } from 'react';
import { EmailContext } from '../../App';

function AddItem() {
  const { email } = useContext(EmailContext);

  return (
    <div>
      <h1> {email}</h1>
      
    </div>
  );
}

export default AddItem;
