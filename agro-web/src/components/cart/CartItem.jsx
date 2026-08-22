"use client";

import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex gap-4 p-4 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl">
      <div className="relative w-24 h-24 shrink-0 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
        <Image src={item.img} alt={item.name} fill className="object-cover" />
      </div>

      <div className="flex-1">
        <h2 className="font-semibold text-gray-900 dark:text-white">
          {item.name}
        </h2>

        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {item.cat}
        </p>

        <p className="font-bold text-navy-600 dark:text-navy-300 mt-2">
          {item.price}
        </p>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => updateQuantity(item.name, item.quantity - 1)}
              className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Minus size={14} />
            </button>

            <span className="px-3 text-sm font-medium text-gray-900 dark:text-white">
              {item.quantity}
            </span>

            <button
              onClick={() => updateQuantity(item.name, item.quantity + 1)}
              className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Plus size={14} />
            </button>
          </div>

          <button
            onClick={() => removeFromCart(item.name)}
            className="p-2 text-gray-400 hover:text-navy-700 hover:bg-brand-50 dark:hover:bg-brand-900/30 rounded-lg transition-colors"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
