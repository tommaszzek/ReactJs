import Logo from "../assect/logo.jpg"

export const Header = () => {
  return (
    <header>
        <img src={Logo} alt='' className="myLogo" />
        <h1> Witaj </h1>
        <hr/>
    </header>
  )
}
