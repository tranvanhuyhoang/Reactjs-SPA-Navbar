import {
  BrowserRouter,
  Link
} from "react-router-dom";

export default function Root(props) {
  return {
    <BrowserRouter>
    <><Link to='/react'></Link><Link to='/vue'></Link></>
    </BrowserRouter>
  }
}
