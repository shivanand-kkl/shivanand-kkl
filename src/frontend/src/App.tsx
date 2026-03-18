import {
  ChevronDown,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const WHATSAPP_NUMBER = "919747307370";

function whatsappUrl(productName: string) {
  const text = `Hi SDS PALLATHINGAL, I would like to place an order for ${productName}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

const PRODUCTS = [
  {
    name: "Unniyappam",
    image: "/assets/generated/unniyappam.dim_600x500.jpg",
    description:
      "Golden fried sweet rice balls crafted with jaggery, banana, and coconut — a timeless Kerala festive delight.",
  },
  {
    name: "Fried Banana",
    image: "/assets/generated/fried-banana.dim_600x500.jpg",
    description:
      "Thinly sliced and perfectly fried banana chips, seasoned with a hint of coconut oil — crispy, light, and irresistible.",
  },
  {
    name: "Moong Ball",
    image: "/assets/generated/moong-ball.dim_600x500.jpg",
    description:
      "Delicate moong dal balls, golden-fried to perfection — a protein-rich traditional snack with a satisfying crunch.",
  },
  {
    name: "Parippuvada",
    image: "/assets/generated/parippuvada.dim_600x500.jpg",
    description:
      "Crispy lentil fritters with aromatic spices — a beloved Kerala tea-time snack made from the finest chana dal.",
  },
  {
    name: "Elayada",
    image: "/assets/generated/elayada.dim_600x500.jpg",
    description:
      "Steamed rice parcels filled with sweet coconut and jaggery, wrapped in fragrant banana leaf — pure Kerala heritage.",
  },
];

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function GoldDivider() {
  return (
    <div className="flex items-center gap-4 justify-center">
      <div
        className="h-px flex-1 max-w-24"
        style={{ background: "oklch(0.72 0.12 85)" }}
      />
      <div
        className="w-1.5 h-1.5 rotate-45"
        style={{ background: "oklch(0.72 0.12 85)" }}
      />
      <div
        className="h-px flex-1 max-w-24"
        style={{ background: "oklch(0.72 0.12 85)" }}
      />
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-center mb-14">
      <div className="flex items-center justify-center gap-6 mb-4">
        <div
          className="h-px w-16 md:w-32"
          style={{ background: "oklch(0.72 0.12 85)" }}
        />
        <h2
          className="font-cinzel text-2xl md:text-3xl tracking-widest uppercase"
          style={{ color: "oklch(0.72 0.12 85)" }}
        >
          {children}
        </h2>
        <div
          className="h-px w-16 md:w-32"
          style={{ background: "oklch(0.72 0.12 85)" }}
        />
      </div>
    </div>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function scrollToSection(id: string) {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{
        background: "oklch(0.08 0 0 / 0.95)",
        borderColor: "oklch(0.42 0.07 85 / 0.4)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Brand */}
          <div className="flex flex-col leading-none">
            <span
              className="font-cinzel text-xl md:text-2xl font-semibold tracking-widest"
              style={{ color: "oklch(0.72 0.12 85)" }}
            >
              SDS
            </span>
            <span
              className="font-cinzel text-[9px] md:text-[10px] tracking-[0.3em] uppercase"
              style={{ color: "oklch(0.68 0.01 85)" }}
            >
              PALLATHINGAL
            </span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {["home", "our-story", "products", "contact"].map((id) => (
              <button
                type="button"
                key={id}
                onClick={() => scrollToSection(id)}
                className="text-sm tracking-widest uppercase transition-colors duration-200"
                style={{ color: "oklch(0.68 0.01 85)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.color =
                    "oklch(0.72 0.12 85)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.color =
                    "oklch(0.68 0.01 85)";
                }}
                data-ocid={`nav.${id}.link`}
              >
                {id === "our-story"
                  ? "Our Story"
                  : id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href={whatsappUrl("your desired snacks")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 px-5 py-2 rounded-[10px] text-sm font-semibold tracking-widest uppercase transition-all duration-200 hover:brightness-110"
              style={{
                background: "oklch(0.72 0.12 85)",
                color: "oklch(0.08 0 0)",
              }}
              data-ocid="nav.order_now.button"
            >
              ORDER NOW
            </a>
            <button
              type="button"
              className="md:hidden p-2"
              onClick={() => setMenuOpen((v) => !v)}
              style={{ color: "oklch(0.72 0.12 85)" }}
              data-ocid="nav.menu.toggle"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              background: "oklch(0.08 0 0)",
              borderTop: "1px solid oklch(0.42 0.07 85 / 0.3)",
            }}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {["home", "our-story", "products", "contact"].map((id) => (
                <button
                  type="button"
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="text-left text-sm tracking-widest uppercase py-2"
                  style={{ color: "oklch(0.68 0.01 85)" }}
                >
                  {id === "our-story"
                    ? "Our Story"
                    : id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              ))}
              <a
                href={whatsappUrl("your desired snacks")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-[10px] text-sm font-semibold tracking-widest uppercase mt-2"
                style={{
                  background: "oklch(0.72 0.12 85)",
                  color: "oklch(0.08 0 0)",
                }}
              >
                ORDER NOW
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.08 0 0) 60%, oklch(0.11 0.02 85) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p
              className="font-cinzel text-xs tracking-[0.4em] uppercase mb-6"
              style={{ color: "oklch(0.72 0.12 85)" }}
            >
              ✦ Premium Kerala Snacks ✦
            </p>
            <h1
              className="font-cinzel text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-6"
              style={{ color: "oklch(0.72 0.12 85)" }}
            >
              Enjoy your tea
              <br />
              <span style={{ color: "oklch(0.91 0.01 85)" }}>with our</span>
              <br />
              snacks
            </h1>
            <p
              className="text-base md:text-lg leading-relaxed mb-10 max-w-md"
              style={{ color: "oklch(0.68 0.01 85)" }}
            >
              Handcrafted with authentic Kerala recipes passed down through
              generations. Each bite is a celebration of tradition and flavor.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#products"
                className="px-8 py-3.5 rounded-[10px] text-sm font-semibold tracking-widest uppercase transition-all duration-200 hover:brightness-110 hover:shadow-gold"
                style={{
                  background: "oklch(0.72 0.12 85)",
                  color: "oklch(0.08 0 0)",
                }}
                data-ocid="hero.shop_now.button"
              >
                Shop Now
              </a>
              <a
                href="#our-story"
                className="px-8 py-3.5 rounded-[10px] text-sm font-semibold tracking-widest uppercase border transition-all duration-200 hover:bg-white/5"
                style={{
                  borderColor: "oklch(0.72 0.12 85)",
                  color: "oklch(0.72 0.12 85)",
                }}
                data-ocid="hero.our_story.button"
              >
                Our Story
              </a>
            </div>
            <div className="flex items-center gap-3 mt-12">
              <div className="flex -space-x-2">
                {["U", "F", "M"].map((l) => (
                  <div
                    key={l}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold border-2"
                    style={{
                      background: "oklch(0.13 0 0)",
                      borderColor: "oklch(0.72 0.12 85)",
                      color: "oklch(0.72 0.12 85)",
                    }}
                  >
                    {l}
                  </div>
                ))}
              </div>
              <p className="text-sm" style={{ color: "oklch(0.68 0.01 85)" }}>
                <span
                  style={{ color: "oklch(0.72 0.12 85)" }}
                  className="font-semibold"
                >
                  500+
                </span>{" "}
                happy customers across Kerala
              </p>
            </div>
          </motion.div>

          {/* Right - Hero image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: "oklch(0.72 0.12 85 / 0.15)",
                filter: "blur(40px)",
                transform: "scale(0.95)",
              }}
            />
            <div
              className="relative rounded-2xl overflow-hidden border"
              style={{ borderColor: "oklch(0.42 0.07 85 / 0.6)" }}
            >
              <img
                src="/assets/generated/unniyappam.dim_600x500.jpg"
                alt="Premium Kerala Unniyappam"
                className="w-full object-cover"
                style={{ maxHeight: "520px", objectPosition: "center" }}
              />
              {/* Overlay tag */}
              <div
                className="absolute bottom-4 left-4 px-4 py-2 rounded-lg backdrop-blur-md"
                style={{
                  background: "oklch(0.08 0 0 / 0.85)",
                  border: "1px solid oklch(0.42 0.07 85 / 0.5)",
                }}
              >
                <p
                  className="font-cinzel text-xs tracking-widest"
                  style={{ color: "oklch(0.72 0.12 85)" }}
                >
                  SINCE GENERATIONS
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{ color: "oklch(0.68 0.01 85)" }}
                >
                  Authentic Kerala Heritage
                </p>
              </div>
            </div>
            {/* Scroll cue */}
            <motion.div
              className="absolute -bottom-8 left-1/2 -translate-x-1/2"
              animate={{ y: [0, 8, 0] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 2,
                ease: "easeInOut",
              }}
            >
              <ChevronDown
                size={20}
                style={{ color: "oklch(0.72 0.12 85 / 0.5)" }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function IntroStrip() {
  return (
    <section
      id="our-story"
      className="py-16 md:py-20"
      style={{ background: "oklch(0.11 0.01 85)" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 justify-center mb-6">
            <div
              className="h-px flex-1"
              style={{ background: "oklch(0.72 0.12 85 / 0.5)" }}
            />
            <h2
              className="font-cinzel text-sm md:text-base tracking-[0.3em] uppercase whitespace-nowrap px-2"
              style={{ color: "oklch(0.72 0.12 85)" }}
            >
              The Gold Standard in Traditional Snacks
            </h2>
            <div
              className="h-px flex-1"
              style={{ background: "oklch(0.72 0.12 85 / 0.5)" }}
            />
          </div>
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: "oklch(0.68 0.01 85)" }}
          >
            Rooted in the heart of Kerala, SDS PALLATHINGAL brings you snacks
            born from age-old family recipes. Every ingredient is handpicked,
            every preparation is done with care, and every bite carries the
            warmth of authentic Kerala hospitality.
          </p>
          <div className="mt-8">
            <GoldDivider />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProductCard({
  product,
  index,
}: { product: (typeof PRODUCTS)[0]; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="rounded-xl overflow-hidden flex flex-col"
      style={{
        background: "oklch(0.09 0 0)",
        border: "1px solid oklch(0.42 0.07 85 / 0.25)",
        boxShadow: "0 4px 24px oklch(0 0 0 / 0.4)",
      }}
      data-ocid={`products.item.${index + 1}`}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3
          className="font-cinzel text-lg font-semibold mb-2 tracking-wide"
          style={{ color: "oklch(0.72 0.12 85)" }}
        >
          {product.name}
        </h3>
        <p
          className="text-sm leading-relaxed flex-1 mb-5"
          style={{ color: "oklch(0.68 0.01 85)", fontSize: "13px" }}
        >
          {product.description}
        </p>
        <a
          href={whatsappUrl(product.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3 rounded-[10px] text-sm font-semibold tracking-wider uppercase transition-all duration-200 hover:brightness-110"
          style={{
            background: "#25D366",
            color: "#fff",
          }}
          data-ocid={`products.buy_now.button.${index + 1}`}
        >
          <WhatsAppIcon className="w-4 h-4" />
          Buy Now
        </a>
      </div>
    </motion.article>
  );
}

function ProductsSection() {
  return (
    <section
      id="products"
      className="py-20 md:py-28"
      style={{ background: "oklch(0.08 0 0)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionHeading>Our Curated Collection</SectionHeading>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product, i) => (
            <ProductCard key={product.name} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      id="contact"
      style={{
        background: "oklch(0.06 0 0)",
        borderTop: "1px solid oklch(0.72 0.12 85 / 0.4)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand + About */}
          <div>
            <div className="mb-4">
              <span
                className="font-cinzel text-2xl font-semibold tracking-widest"
                style={{ color: "oklch(0.72 0.12 85)" }}
              >
                SDS
              </span>
              <span
                className="font-cinzel text-xs tracking-[0.3em] uppercase ml-2"
                style={{ color: "oklch(0.55 0.05 85)" }}
              >
                PALLATHINGAL
              </span>
            </div>
            <p
              className="text-xs tracking-[0.2em] uppercase mb-4"
              style={{ color: "oklch(0.55 0.05 85)" }}
            >
              Authentic Kerala Snacks since generations
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "oklch(0.60 0.01 85)" }}
            >
              We are a family-run premium snacks and sweets manufacturer deeply
              rooted in the culinary traditions of Kerala. Every product we
              craft tells the story of authentic flavours, pure ingredients, and
              the love that goes into every batch. Our mission is to bring the
              true taste of Kerala to your doorstep.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4
              className="font-cinzel text-sm tracking-[0.25em] uppercase mb-6"
              style={{ color: "oklch(0.72 0.12 85)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "Our Story", "Collection", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "oklch(0.60 0.01 85)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "oklch(0.72 0.12 85)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "oklch(0.60 0.01 85)";
                    }}
                  >
                    — {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-cinzel text-sm tracking-[0.25em] uppercase mb-6"
              style={{ color: "oklch(0.72 0.12 85)" }}
            >
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone
                  size={15}
                  className="mt-0.5 shrink-0"
                  style={{ color: "oklch(0.72 0.12 85)" }}
                />
                <div>
                  <p
                    className="text-xs uppercase tracking-wider mb-0.5"
                    style={{ color: "oklch(0.55 0.05 85)" }}
                  >
                    Phone
                  </p>
                  <a
                    href="tel:+919747307370"
                    className="text-sm"
                    style={{ color: "oklch(0.60 0.01 85)" }}
                  >
                    +91 97473 07370
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle
                  size={15}
                  className="mt-0.5 shrink-0"
                  style={{ color: "#25D366" }}
                />
                <div>
                  <p
                    className="text-xs uppercase tracking-wider mb-0.5"
                    style={{ color: "oklch(0.55 0.05 85)" }}
                  >
                    WhatsApp
                  </p>
                  <a
                    href={whatsappUrl("your desired snacks")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm"
                    style={{ color: "oklch(0.60 0.01 85)" }}
                    data-ocid="footer.whatsapp.button"
                  >
                    Chat with us
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  size={15}
                  className="mt-0.5 shrink-0"
                  style={{ color: "oklch(0.72 0.12 85)" }}
                />
                <div>
                  <p
                    className="text-xs uppercase tracking-wider mb-0.5"
                    style={{ color: "oklch(0.55 0.05 85)" }}
                  >
                    Location
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "oklch(0.60 0.01 85)" }}
                  >
                    Kerala, India
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs"
          style={{
            borderTop: "1px solid oklch(0.42 0.07 85 / 0.2)",
            color: "oklch(0.45 0.01 85)",
          }}
        >
          <p>© {year} SDS PALLATHINGAL. All rights reserved.</p>
          <p>
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:opacity-80"
              style={{ color: "oklch(0.55 0.05 85)" }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div style={{ background: "oklch(0.08 0 0)", minHeight: "100vh" }}>
      <Navbar />
      <main>
        <Hero />
        <IntroStrip />
        <ProductsSection />
      </main>
      <Footer />
    </div>
  );
}
