const Footer = () => {
  const shopItems = [
    "Search",
    "Ceremonial Grade Matcha Powder",
    "Triple A Grade Matcha Powder", 
    "How to Find your Light"
  ];

  const infoItems = [
    "Blogs",
    "Our Story",
    "How To Make Matcha",
    "Matcha Health Benefits",
    "What is Matcha?",
    "FAQ"
  ];

  const policyItems = [
    "Privacy Policy",
    "Shipping Policy",
    "Refund Policy",
    "Contact",
    "Terms of Service"
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl items-center justify-center mx-auto px-8 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* SHOP Column */}
          <div>
            <h3 className="text-primary font-semibold text-lg mb-6 font-playfair">
              SHOP
            </h3>
            <ul className="space-y-4">
              {shopItems.map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* INFO Column */}
          <div>
            <h3 className="text-primary font-semibold text-lg mb-6 font-playfair">
              INFO
            </h3>
            <ul className="space-y-4">
              {infoItems.map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* POLICY Column */}
          <div>
            <h3 className="text-primary font-semibold text-lg mb-6 font-playfair">
              POLICY
            </h3>
            <ul className="space-y-4">
              {policyItems.map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="border-t border-border pt-12 mb-12">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-foreground font-semibold text-lg mb-4 font-playfair">
              Stay Connected
            </h4>
            <p className="text-muted-foreground text-sm mb-6">
              Be the first to know about our launch and receive exclusive matcha insights
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
              />
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-light transition-all duration-300 text-sm font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-playfair font-semibold text-gradient mb-2">
                Leaf and Lights
              </h2>
              <p className="text-muted-foreground text-sm">
                Premium Japanese Matcha Experience
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-muted-foreground text-sm mb-2">
                © 2025 Leaf and Lights. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;