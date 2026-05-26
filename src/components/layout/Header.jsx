import Nav from "./Nav";
import { HomeIcon, ShoppingBagIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
const menuItems = [
  { id: 1, text: "Home", link: "/", icon: HomeIcon },
  {
    id: 2,
    text: "Products",
    link: "/products",
    icon: ShoppingBagIcon,
  },
  {
    id: 3,
    text: "Cart",
    link: "/cart",
    icon: ShoppingCartIcon,
  },
];

function Header() {
  return (
    <>
      <Nav menuItems={menuItems} />
    </>
  );
}

export default Header;