
import { TABS } from "../redux/actions/type"

import {useDispatch} from 'react-redux';

const Tabs = () => {

const dispatch= useDispatch();

  return (
    TABS.map(tab => (
      <button
      className="button"
      onClick ={()=> dispatch()}
      >
        {tab}
      </button>

    ))
  )
}

export default Tabs