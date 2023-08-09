import 'firebase/compat/auth';
import SignOut from "./SignOut"
import { Auth } from '@firebase/auth';

interface Header {
  auth: Auth | null;
}

const Header: React.FC<Header> = ({ auth }) => {
  return (
    <header>
      <img src="https://www.elevarsalud.com/_next/image?url=%2Fimages%2Fhome%2Felevar-chathead.png&w=96&q=75" alt="logo" />
      <SignOut auth={auth}/>
    </header>
  )
}

export default Header
