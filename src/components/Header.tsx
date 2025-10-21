interface HeaderProps {
  cartItemCount: number;
  onCartToggle: () => void;
}

function Header({ cartItemCount, onCartToggle }: HeaderProps) {
  return (
    <header className='app-header'>
      <div className='header-content'>
        <h1>Hello, World!</h1>
        <p className='header-subtitle'>Shirt Store</p>
      </div>
      <button className='cart-toggle' onClick={onCartToggle}>
        Cart ({cartItemCount})
      </button>
    </header>
  );
}

export default Header;
