export default function Home() {
  return (
    <main className="min-h-screen bg-white" dir="rtl">
      {/* Header */}
      <header className="bg-green-700 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">NourOil</h1>
        <nav className="flex gap-4 text-sm">
          <a href="#products" className="hover:underline">المنتجات</a>
          <a href="#about" className="hover:underline">من نحن</a>
          <a href="#contact" className="hover:underline">تواصل معنا</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="bg-green-50 py-20 text-center px-4">
        <h2 className="text-4xl font-bold text-green-800 mb-4">
          زيوت طبيعية عالية الجودة
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          نوفر أفضل الزيوت الطبيعية المختارة بعناية لصحتك وجمالك
        </p>
        <a href="#products" className="bg-green-700 text-white px-8 py-3 rounded-full text-lg hover:bg-green-800">
          تصفح المنتجات
        </a>
      </section>

      {/* Products */}
      <section id="products" className="py-16 px-8">
        <h3 className="text-2xl font-bold text-center text-green-800 mb-10">منتجاتنا</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { name: "زيت الأرغان", price: "150 جنيه", desc: "للعناية بالشعر والبشرة" },
            { name: "زيت الزيتون", price: "80 جنيه", desc: "للطهي والعناية الطبيعية" },
            { name: "زيت الحبة السوداء", price: "120 جنيه", desc: "للمناعة والصحة العامة" },
          ].map((product) => (
            <div key={product.name} className="border rounded-xl p-6 text-center shadow hover:shadow-md">
              <h4 className="text-lg font-bold text-green-700 mb-2">{product.name}</h4>
              <p className="text-gray-500 text-sm mb-4">{product.desc}</p>
              <p className="text-green-800 font-bold text-xl mb-4">{product.price}</p>
              <button className="bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800">
                اطلب الآن
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-700 text-white text-center py-6">
        <p>© 2026 NourOil — جميع الحقوق محفوظة</p>
      </footer>
    </main>
  );
}