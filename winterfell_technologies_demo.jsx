export default function WinterfellTechnologiesDemo() {
  const products = [
    {
      id: 1,
      name: "iPhone Covers",
      category: "Phone Covers",
      price: "KES 1,500",
      image:
        "https://images.unsplash.com/photo-1601593346740-925612772716?auto=format&fit=crop&w=900&q=80",
      description: "Stylish and protective covers for iPhone models.",
    },
    {
      id: 2,
      name: "Samsung & Android Covers",
      category: "Phone Covers",
      price: "KES 1,200",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",
      description: "Quality covers for Samsung, Redmi, Tecno, Infinix and more.",
    },
    {
      id: 3,
      name: "Screen Protectors",
      category: "Protectors",
      price: "KES 800",
      image:
        "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80",
      description: "Scratch-resistant protectors for phones and tablets.",
    },
    {
      id: 4,
      name: "Laptop Batteries",
      category: "Batteries",
      price: "KES 4,500",
      image:
        "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=900&q=80",
      description: "Replacement laptop batteries for common brands.",
    },
    {
      id: 5,
      name: "HP Pavilion Laptop",
      category: "New Laptops",
      price: "KES 58,999",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80",
      description: "Reliable performance laptop for school, office and business.",
    },
    {
      id: 6,
      name: "Dell Inspiron Laptop",
      category: "New Laptops",
      price: "KES 64,500",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=80",
      description: "Modern laptop with strong battery life and smooth performance.",
    },
    {
      id: 7,
      name: "Fast Chargers & Cables",
      category: "Accessories",
      price: "KES 1,000",
      image:
        "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?auto=format&fit=crop&w=900&q=80",
      description: "Original-looking charging accessories for daily use.",
    },
    {
      id: 8,
      name: "Bluetooth Earbuds",
      category: "Accessories",
      price: "KES 2,500",
      image:
        "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=900&q=80",
      description: "Clean sound, portable charging case and stylish design.",
    },
  ];

  const categories = [
    "Phone Repairs",
    "Laptop Repairs",
    "Phone Covers",
    "Protectors",
    "Batteries",
    "Accessories",
    "New Laptops",
  ];

  const features = [
    "Professional phone and laptop repairs",
    "Wide range of covers for iPhone and Android brands",
    "Screen protectors, batteries, chargers and accessories",
    "New laptops available at competitive prices",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-xl font-bold tracking-wide sm:text-2xl">Winterfell Technologies</h1>
            <p className="text-xs text-slate-300 sm:text-sm">Phones, laptops, repairs and accessories</p>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="tel:+254795323615"
              className="rounded-2xl border border-white/15 px-4 py-2 text-sm font-medium transition hover:bg-white hover:text-slate-950"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/254795323615"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-green-500 px-4 py-2 text-sm font-semibold text-white transition hover:scale-[1.02]"
            >
              WhatsApp
            </a>
            <a
              href="#shop"
              className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
            >
              Cart (0)
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-cyan-400/10 to-transparent" />
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
          <div className="relative z-10 flex flex-col justify-center">
            <span className="mb-4 w-fit rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Juja Town Near Juja Posta Office
            </span>
            <h2 className="max-w-2xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Fast phone and laptop repairs with trusted accessories.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              Winterfell Technologies offers expert phone repairs, laptop repairs, new laptops,
              phone covers, screen protectors, batteries, chargers, earbuds and more — all in one place.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://wa.me/254795323615"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-green-500 px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]"
              >
                Chat on WhatsApp
              </a>
              <a
                href="tel:+254795323615"
                className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold transition hover:bg-white hover:text-slate-950"
              >
                Call +254 795 323 615
              </a>
              <a
                href="#shop"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
              >
                Shop Now
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200 shadow-lg shadow-black/10">
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10">
            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-3 shadow-2xl shadow-cyan-950/30">
              <img
                src="https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1200&q=80"
                alt="Phone repair hero"
                className="h-[420px] w-full rounded-[22px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
          <h3 className="text-2xl font-bold">What We Offer</h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-slate-900/80 p-4 text-sm font-medium text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="shop" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h3 className="text-3xl font-bold">Featured Products</h3>
            <p className="mt-2 text-slate-300">Explore covers, protectors, batteries, laptops and accessories.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
            Cart ready for checkout demo
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <div key={product.id} className="overflow-hidden rounded-[26px] border border-white/10 bg-white/5 shadow-lg shadow-black/15 transition hover:-translate-y-1">
              <img src={product.image} alt={product.name} className="h-56 w-full object-cover" />
              <div className="p-5">
                <div className="mb-2 flex items-center justify-between gap-2">
                  <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                    {product.category}
                  </span>
                  <span className="text-sm font-bold text-green-400">{product.price}</span>
                </div>
                <h4 className="text-lg font-bold">{product.name}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-300">{product.description}</p>
                <div className="mt-4 flex gap-2">
                  <button className="flex-1 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]">
                    Add to Cart
                  </button>
                  <a
                    href={`https://wa.me/254795323615?text=Hello%20Winterfell%20Technologies,%20I%20want%20to%20order%20${encodeURIComponent(product.name)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-white/15 px-4 py-3 text-sm font-semibold transition hover:bg-white hover:text-slate-950"
                  >
                    Order
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 lg:col-span-2">
            <h3 className="text-2xl font-bold">Why Customers Choose Us</h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                <h4 className="text-lg font-semibold">Quick Repairs</h4>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Fast diagnosis and repair services for common phone and laptop problems.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                <h4 className="text-lg font-semibold">Quality Accessories</h4>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Covers, chargers, protectors, batteries and accessories for the most used brands.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                <h4 className="text-lg font-semibold">Affordable Prices</h4>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Competitive online-style pricing to make shopping easier for customers.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                <h4 className="text-lg font-semibold">Easy Ordering</h4>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Customers can call, chat on WhatsApp or place orders directly from the website.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
            <h3 className="text-2xl font-bold">Visit Us</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Juja Town near Juja Posta Office
            </p>
            <div className="mt-5 overflow-hidden rounded-2xl border border-white/10">
              <iframe
                title="Juja Town Map"
                src="https://www.google.com/maps?q=Juja%20Posta%20Office&z=15&output=embed"
                className="h-72 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="mt-5 space-y-3 text-sm text-slate-300">
              <p>Phone: +254 795 323 615</p>
              <p>WhatsApp orders available</p>
              <p>Open for accessories, repairs and laptop inquiries</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 pt-4 sm:px-6 lg:px-8">
        <div className="rounded-[30px] border border-green-500/20 bg-gradient-to-r from-green-500/15 to-cyan-500/10 p-8 text-center">
          <h3 className="text-3xl font-bold">Need a repair or want to place an order?</h3>
          <p className="mx-auto mt-3 max-w-2xl text-slate-300">
            Reach out to Winterfell Technologies today for fast service, genuine-looking accessories and reliable support.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/254795323615"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-green-500 px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]"
            >
              Order on WhatsApp
            </a>
            <a
              href="tel:+254795323615"
              className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
            >
              Call the Shop
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© 2026 Winterfell Technologies. All rights reserved.</p>
          <p>Branded by Kelvin · +254 106 624 924</p>
        </div>
      </footer>
    </div>
  );
}
