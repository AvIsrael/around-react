import headerLogo from "../images/header-logo.svg";
const Header = () => {
    return (<header className={'header'}>
            <img src={headerLogo} alt="logo image" className="header__logo"/>
        </header>);
}
export default Header;