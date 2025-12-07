import CartItem from './CartItem';
import useCartStore from '@/app/store/cartStore';

const CartItems = () => {
  const items = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);

  if (items.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-6">Looks like you haven't added anything to your cart yet.</p>
        <a 
          href="/" 
          className="inline-block px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-300"
        >
          Continue Shopping
        </a>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <CartItem 
          key={item.id} 
          item={{
            id: item.id,
            title: item.name,
            price: item.price,
            discountPrice: undefined, // Placeholder since the store doesn't have discount
            thumbnail: item.imageUrl,
            color: 'Black',  // Default color for cart items
            size: 'M',      // Default size for cart items
            quantity: item.quantity
          }} 
        />
      ))}
    </div>
  );
};

export default CartItems;