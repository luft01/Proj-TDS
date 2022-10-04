import React from 'react';
import {useSelector} from 'react-redux';

function Listem() {
    const list = useSelector(state => state.data)
  return(
    <ul>
        {list.map(lists =>
            <li key={lists}>{lists}</li>    
        )}
  </ul>
  )
  

}

export default Listem;