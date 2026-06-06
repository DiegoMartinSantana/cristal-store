import Nav from "./Nav";
import { HomeIcon, ShoppingBagIcon, ShoppingCartIcon, PlusIcon } from "@heroicons/react/24/outline";
const menuItems = [
  { id: 1, text: "Home", link: "/", icon: HomeIcon },
  {
    id: 2,
    text: "Products",
    link: "/products",
    icon: ShoppingBagIcon,
  },
  {
    id:3,
    text:"Add Product",
    link:"/add-product",
    icon:PlusIcon,
  },
  {
    id: 4,
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