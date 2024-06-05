import { HEADER_LOGO } from "../../utils/image"

const Header = () => {
  return (
    <div>
        <img className="h-28" src={HEADER_LOGO} alt="Logo Image" />
    </div>
  )
}

export default Header