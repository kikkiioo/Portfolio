import React, { useEffect, useMemo, useRef, useState } from "react";
import "../styles/navbar.scss";

const LINKS = [
  { href: "#hero", label: "About" },
  { href: "#about", label: "Experience" },
  { href: "#skills", label: "Skills" },
  // { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("#hero");
  const [scrolled, setScrolled] = useState(false);
  const listRef = useRef(null);
  const indicatorRef = useRef(null);

  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = isOpen ? "hidden" : original || "";
    return () => { document.body.style.overflow = original; };
  }, [isOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = LINKS.map(l => l.href.slice(1));
    const sections = ids.map(id => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const topHit = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (topHit?.target?.id) setActive(`#${topHit.target.id}`);
      },
      { rootMargin: "-45% 0px -52% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    sections.forEach(s => io.observe(s));
    return () => io.disconnect();
  }, []);

  const moveIndicator = () => {
    const ul = listRef.current;
    const indicator = indicatorRef.current;
    if (!ul || !indicator) return;
    const a = ul.querySelector(`a[href="${active}"]`);
    if (!a) return;
    const aRect = a.getBoundingClientRect();
    const ulRect = ul.getBoundingClientRect();
    const left = aRect.left - ulRect.left;
    indicator.style.setProperty("--x", `${left + aRect.width / 2}px`);
    indicator.style.setProperty("--w", `${Math.max(44, aRect.width)}px`);
  };

  useEffect(() => {
    moveIndicator();
    const onResize = () => moveIndicator();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, isOpen]);

  const menuId = useMemo(() => "nav-" + Math.random().toString(36).slice(2), []);

  const handleNavClick = (e, href) => {
    e.preventDefault();         
    setActive(href);
    setIsOpen(false);
  
    requestAnimationFrame(() => {
      const el = document.querySelector(href);
      if (!el) return;
  
      const nav = document.querySelector('.navbar');
      const offset = (nav?.offsetHeight || 0) + 20; // small cushion
  
      const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  };
  
  

  const onMagnetic = (e) => {
    const t = e.currentTarget;
    const r = t.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    t.style.setProperty("--mx", `${(x - r.width / 2) / 12}px`);
    t.style.setProperty("--my", `${(y - r.height / 2) / 12}px`);
  };
  const resetMagnetic = (e) => {
    const t = e.currentTarget;
    t.style.setProperty("--mx", `0px`);
    t.style.setProperty("--my", `0px`);
  };

  return (
    <>
      <nav className={`navbar holo ${scrolled ? "scrolled" : ""}`} role="navigation" aria-label="Primary">
        <div className="nav-inner">
          {/* centered links */}
          <ul id={menuId} className={`navbar-links ${isOpen ? "open" : ""}`} ref={listRef}>
            <div className="glow-indicator" ref={indicatorRef} aria-hidden="true" />
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={active === l.href ? "active" : ""}
                  onClick={(e) => handleNavClick(e, l.href)} 
                  onMouseMove={onMagnetic}
                  onMouseLeave={resetMagnetic}
                >
                  <span className="txt">{l.label}</span>
                  <span className="laser" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>

          {/* hamburger on the right (visible on mobile) */}
          <button
            className={`hamburger ${isOpen ? "open" : ""}`}
            aria-expanded={isOpen}
            aria-controls={menuId}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)} aria-hidden="true" />}
    </>
  );
};

export default Navbar;
