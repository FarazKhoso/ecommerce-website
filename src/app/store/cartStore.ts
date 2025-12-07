import { create } from 'zustand';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

interface CartState {
  cart: CartItem[];
  totalItems: number; // New property for total items
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  updateQuantity: (id: string, quantity: number) => void;
}

const useCartStore = create<CartState>((set) => ({
  cart: [],
  totalItems: 0, // Initialize total items to 0

  addItem: (item) =>
    set((state) => {
      const existingItem = state.cart.find((i) => i.id === item.id);
      if (existingItem) {
        return {
          cart: state.cart.map((i) =>
            i.id === item.id
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
          totalItems: state.cart.reduce((sum, i) => sum + i.quantity, 1),
        };
      }
      return {
        cart: [...state.cart, { ...item, quantity: 1 }],
        totalItems: state.cart.reduce((sum, i) => sum + i.quantity, 1),
      };
    }),

  removeItem: (id) =>
    set((state) => {
      const updatedCart = state.cart.filter((item) => item.id !== id);
      return {
        cart: updatedCart,
        totalItems: updatedCart.reduce((sum, i) => sum + i.quantity, 0),
      };
    }),

  clearCart: () =>
    set({
      cart: [],
      totalItems: 0,
    }),

  updateQuantity: (id, quantity) =>
    set((state) => {
      const updatedCart = state.cart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      );
      return {
        cart: updatedCart,
        totalItems: updatedCart.reduce((sum, i) => sum + i.quantity, 0),
      };
    }),
}));

export default useCartStore;
