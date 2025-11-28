import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// For the cart icon, we'll use a simple text or a free icon library if you want to add one later.
// For now, let's use a text icon.

const Header = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <header className="main-header">
      <Link to="/" className="header-logo">
        Green Thumb Delights
      </Link>
      <nav className="main-nav">
        <ul>
          <li><Link to="/products">Shop</Link></li>
          <li>
            <Link to="/cart" className="cart-icon-link">
              🛒 Cart ({totalQuantity}) {/* Task 11: Shopping cart icon with value */}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;