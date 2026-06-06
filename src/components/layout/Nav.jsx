import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
function Nav({ menuItems }) {


  return (<>
    <header className="sticky top-0 z-50 bg-primary-50/80 backdrop-blur border-b border-primary-200">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-14">
        <Link to="/" className="font-semibold text-primary-800">Cristal Store</Link>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-2">
            {menuItems.map((i) => (
              <MenuItem
                key={i.id}
                text={i.text}
                IconComponent={i.icon}
                link={i.link}
              />
            ))}
          </ul>
        </nav>
       
      </div>
    </header>

  </>
  )
}
function MenuItem({ text, IconComponent, link }) {
  const { getCartQuantity } = useCart();

  return (
    <li>
      <Link to={link} className="
            flex items-center gap-2 px-4 py-2 rounded-xl
            text-primary-700 text-sm font-medium
            hover:bg-primary-100 hover:text-primary-900
            transition-all
            group
          "
      >
     
        <IconComponent className="w-5 h-5 text-primary-500 group-hover:text-primary-700" />
        {text}
        {text === "Cart" && (
          <span className="text-primary-700 text-sm font-medium">
            ({getCartQuantity()})
          </span>
        )}
      </Link>
    </li>
  );
}
export default Nav;