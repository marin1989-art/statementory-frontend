'use client';

import { createContext, useContext, useEffect, useState } from 'react';

export interface CartItem {
  sync_variant_id: string;
  productName: string;
  size: string;
  price_cents: number;
  quantity: number;
  image: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (sync_variant_id: string) => void;
  updateQuantity: (sync_variant_id: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('statementory_cart');
      if (saved) setItems(JSON.parse(saved));
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) localStorage.setItem('statementory_cart', JSON.stringify(items));
  }, [items, hydrated]);

  const addItem = (newItem: CartItem) => {
    setItems(prev => {
      const existing = prev.find(i => i.sync_variant_id === newItem.sync_variant_id);
      if (existing) {
        return prev.map(i =>
          i.sync_variant_id === newItem.sync_variant_id
            ? { ...i, quantity: i.quantity + newItem.quantity }
            : i
        );
      }
      return [...prev, newItem];
    });
  };

  const removeItem = (sync_variant_id: string) => {
    setItems(prev => prev.filter(i => i.sync_variant_id !== sync_variant_id));
  };

  const updateQuantity = (sync_variant_id: string, quantity: number) => {
    if (quantity <= 0) { removeItem(sync_variant_id); return; }
    setItems(prev => prev.map(i => i.sync_variant_id === sync_variant_id ? { ...i, quantity } : i));
  };

  const clearCart = () => setItems([]);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.price_cents * i.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, clearCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
