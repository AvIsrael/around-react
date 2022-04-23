import headerLogo from "../images/header-logo.svg";
export const Header = () => {
   return (
       <header className={'header'}>
           <img src={headerLogo} alt="logo image" className="header__logo"/>
       </header>
   );
}