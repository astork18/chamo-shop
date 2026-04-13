import React, { useState } from 'react';
import { 
  ShoppingBag, Search, Menu, ChevronRight, 
  Star, Truck, ShieldCheck, WhatsappIcon,
  X, Plus, Minus
} from 'lucide-react';

const CustomerStore = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const tasaBCV = 36.45;

  const products = [
    { id: 1, name: "Harina Pan 1kg", price: 1.20, img: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=200", tag: "Alimentos" },
    { id: 2, name: "Nutella 350g", price: 5.50, img: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?q=80&w=200", tag: "Importados" },
    { id: 3, name: "Café Amanecer 500g", price: 4.00, img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=200", tag: "Alimentos" },
    { id: 4, name: "Refresco 2L", price: 2.25, img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=200", tag: "Bebidas" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-20">
      {/* --- TOP BANNER (TASA) --- */}
      <div className="bg-blue-600 text-white text-[10px] md:text-xs py-1.5 px-4 flex justify-between items-center font-medium">
        <span>🇻🇪 Envíos a toda Venezuela</span>
        <span className="bg-blue-500 px-2 py-0.5 rounded-full">Tasa BCV: {tasaBCV} VES</span>
      </div>

      {/* --- NAVBAR --- */}
      <nav className="bg-white sticky top-0 z-30 border-b border-slate-200 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Menu className="text-slate-700" size={24} />
          <h1 className="text-xl font-black text-blue-600 tracking-tighter">CHAMO<span className="text-slate-900">MARKET</span></h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative cursor-pointer" onClick={() => setCartOpen(true)}>
            <ShoppingBag className="text-slate-700" size={26} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">2</span>
          </div>
        </div>
      </nav>

      {/* --- SEARCH --- */}
      <div className="p-4 bg-white">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="¿Qué buscas hoy?" 
            className="w-full bg-slate-100 border-none rounded-xl py-3 pl-10 focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>
      </div>

      {/* --- CATEGORIES --- */}
      <div className="flex gap-3 overflow-x-auto p-4 no-scrollbar">
        {["Todos", "Alimentos", "Bebidas", "Limpieza", "Cuidado Personal"].map((cat, i) => (
          <button key={i} className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-colors ${i === 0 ? 'bg-blue-600 text-white' : 'bg-white text-slate-600 border border-slate-200'}`}>
            {cat}
          </button>
        ))}
      </div>

      {/* --- HERO / PROMO --- */}
      <div className="px-4 mb-8">
        <div className="bg-gradient-to-r from-blue-700 to-indigo-600 rounded-2xl p-6 text-white relative overflow-hidden shadow-xl shadow-blue-200">
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-1">Ofertas del fin de semana</h2>
            <p className="text-blue-100 text-sm mb-4">Hasta 20% de descuento en bodegón</p>
            <button className="bg-white text-blue-700 px-4 py-2 rounded-lg font-bold text-sm">Comprar ahora</button>
          </div>
          <div className="absolute right-[-20px] top-[-20px] w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* --- PRODUCT GRID --- */}
      <section className="px-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg text-slate-800">Más vendidos</h3>
          <span className="text-blue-600 text-sm font-bold">Ver todo</span>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {products.map((prod) => (
            <div key={prod.id} className="bg-white rounded-2xl p-3 border border-slate-100 shadow-sm">
              <div className="aspect-square bg-slate-50 rounded-xl mb-3 overflow-hidden">
                <img src={prod.img} alt={prod.name} className="w-full h-full object-cover" />
              </div>
              <p className="text-xs text-slate-400 font-medium uppercase mb-1">{prod.tag}</p>
              <h4 className="font-bold text-slate-800 text-sm mb-2 leading-tight">{prod.name}</h4>
              <div className="flex flex-col">
                <span className="text-blue-600 font-black text-lg">${prod.price.toFixed(2)}</span>
                <span className="text-[10px] text-slate-500 font-medium italic">{(prod.price * tasaBCV).toFixed(2)} VES</span>
              </div>
              <button className="w-full mt-3 bg-slate-900 text-white py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-2 active:scale-95 transition">
                <Plus size={14} /> Agregar
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* --- FLOATING CART DRAWER (SIMULATION) --- */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm">
          <div className="absolute right-0 bottom-0 top-0 w-full max-w-md bg-white shadow-2xl flex flex-col">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="font-bold text-xl">Tu Carrito</h3>
              <X className="cursor-pointer" onClick={() => setCartOpen(false)} />
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              <CartItem name="Harina Pan" price={1.20} qty={2} bcv={tasaBCV} />
              <CartItem name="Nutella 350g" price={5.50} qty={1} bcv={tasaBCV} />
            </div>

            <div className="p-6 bg-slate-50 border-t space-y-3">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal</span>
                <span>$7.90</span>
              </div>
              <div className="flex justify-between text-xl font-black border-t pt-3">
                <span>Total</span>
                <div className="text-right">
                  <p>$7.90</p>
                  <p className="text-sm text-blue-600 font-bold">{ (7.90 * tasaBCV).toFixed(2) } VES</p>
                </div>
              </div>
              <button className="w-full bg-green-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-lg shadow-green-100 mt-4">
                Pagar por WhatsApp <ChevronRight size={20}/>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const CartItem = ({ name, price, qty, bcv }) => (
  <div className="flex gap-4 items-center bg-white p-2 rounded-xl">
    <div className="w-16 h-16 bg-slate-100 rounded-lg"></div>
    <div className="flex-1">
      <h4 className="font-bold text-sm">{name}</h4>
      <p className="text-blue-600 font-bold">${price.toFixed(2)} <span className="text-[10px] text-slate-400">/ unidad</span></p>
    </div>
    <div className="flex items-center gap-3 bg-slate-100 rounded-lg p-1">
      <div className="w-6 h-6 flex items-center justify-center bg-white rounded shadow-sm"><Minus size={12}/></div>
      <span className="font-bold text-sm">{qty}</span>
      <div className="w-6 h-6 flex items-center justify-center bg-white rounded shadow-sm"><Plus size={12}/></div>
    </div>
  </div>
);

export default CustomerStore;