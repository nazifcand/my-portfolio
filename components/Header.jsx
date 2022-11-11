import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {

  const router = useRouter()
  const pages = [
    { title: 'Home', path: '/', disabled: false },
    { title: 'About', path: '/about', disabled: false },
    { title: 'Posts', path: '/posts', disabled: true },
  ]

  const NavItem = ({ item }) => {
    return <div className={classNames({ 'nav-item': true, active: router.pathname == item.path, disabled: item.disabled })}>
      <Link href={item.path}>{item.title}</Link>
    </div>;
  }

  return <header>
    <Link href="/" id="logo">
      <h1>Nazif Can DURGUT<span>.</span></h1>
    </Link>

    <nav id="nav">
      {pages.map(item => <NavItem key={item.path} item={item} />)}
    </nav>
  </header>
}

export default Header;