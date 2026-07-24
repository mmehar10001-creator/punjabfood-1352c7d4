import { Link } from "@tanstack/react-router";
import { useState } from "react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const linkCls =
    "text-xs tracking-[0.2em] uppercase text-foreground/80 hover:text-primary transition-colors";
  const mobileLinkCls =
    "text-sm tracking-[0.25em] uppercase text-foreground/90 hover:text-primary transition-colors py-3 border-b border-border/40";

  const close = () => setOpen(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-6 sm:py-6">
        <Link to="/" onClick={close} className="font-serif text-xl sm:text-2xl text-primary">
          Punjab <span className="text-foreground">Foods</span>
        </Link>

        <nav className="hidden gap-8 md:flex">
          <Link to="/" className={linkCls}>Home</Link>
          <Link to="/menu" className={linkCls}>Menu</Link>
          <Link to="/catering" className={linkCls}>Catering / Deg</Link>
          <Link to="/about" className={linkCls}>About</Link>
          <Link to="/contact" className={linkCls}>Contact</Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:0515706222"
            className="text-xs tracking-[0.2em] uppercase border border-primary/60 px-4 py-2 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Order Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-primary/50 text-primary"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur border-t border-border/60">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-2">
            <Link to="/" onClick={close} className={mobileLinkCls}>Home</Link>
            <Link to="/menu" onClick={close} className={mobileLinkCls}>Menu</Link>
            <Link to="/catering" onClick={close} className={mobileLinkCls}>Catering / Deg</Link>
            <Link to="/about" onClick={close} className={mobileLinkCls}>About</Link>
            <Link to="/contact" onClick={close} className={mobileLinkCls}>Contact</Link>
            <a
              href="tel:0515706222"
              onClick={close}
              className="mt-4 mb-3 text-center text-xs tracking-[0.25em] uppercase border border-primary px-4 py-3 text-primary"
            >
              Order Now · 051-5706222
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
