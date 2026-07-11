"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/content/site-config";
import { NAV_LINKS } from "./nav-links";
import { useScrollState } from "./hooks";

/**
 * Header #14 — BURGER-ONLY FULL OVERLAY
 * No logo, no nav visible — just a burger icon top-right. Click opens a
 * fullscreen overlay with huge typographic nav. More extreme than #6 (no
 * "Menu" label, no visible brand). Ultimate minimal header.
 *
 * Best for: fashion, high-end agencies, portfolio sites, fine art brands
 */
export default function HeaderBurgerOnly() {
  const scrolled = useScrollState(40);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="fixed top-0 inset-x-0 z-40"
      >
        <div className="flex items-center justify-between px-6 md:px-10 py-6 md:py-8">
          <Link href="/" className="font-display font-bold text-dark text-lg tracking-tight">
            {siteConfig.company.name}
          </Link>
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className={`group relative w-12 h-12 md:w-14 md:h-14 rounded-full backdrop-blur-2xl transition-all duration-500 flex items-center justify-center ${
              scrolled
                ? "bg-dark/10 border border-dark/10"
                : "bg-dark/5 border border-dark/10"
            }`}
          >
            <div className="flex flex-col gap-1.5">
              <motion.div
                className="w-5 h-[1.5px] bg-dark group-hover:bg-primary transition-colors"
                initial={{ x: 0 }}
                whileHover={{ x: -3 }}
              />
              <motion.div
                className="w-5 h-[1.5px] bg-dark group-hover:bg-primary transition-colors"
                initial={{ x: 0 }}
                whileHover={{ x: 3 }}
              />
            </div>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && <OverlayMenu onClose={() => setOpen(false)} pathname={pathname} />}
      </AnimatePresence>
    </>
  );
}

function OverlayMenu({
  onClose,
  pathname,
}: {
  onClose: () => void;
  pathname: string;
}) {
  return (
    <motion.div
      initial={{ clipPath: "circle(0% at 100% 0%)" }}
      animate={{ clipPath: "circle(150% at 100% 0%)" }}
      exit={{ clipPath: "circle(0% at 100% 0%)" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-50 bg-[#2D1810] overflow-hidden"
    >
      {/* Close + logo header in overlay */}
      <div className="flex items-center justify-between px-6 md:px-10 py-6 md:py-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="font-display font-bold tracking-[0.2em] uppercase text-xs md:text-sm text-[#FDF6F0]"
        >
          {siteConfig.company.name}
        </motion.div>

        <button
          onClick={onClose}
          aria-label="Close menu"
          className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#FDF6F0]/10 border border-[#FDF6F0]/15 flex items-center justify-center group"
        >
          <div className="relative w-5 h-5">
            <div className="absolute top-1/2 left-0 w-5 h-[1.5px] bg-white rotate-45 group-hover:bg-primary transition-colors" />
            <div className="absolute top-1/2 left-0 w-5 h-[1.5px] bg-white -rotate-45 group-hover:bg-primary transition-colors" />
          </div>
        </button>
      </div>

      {/* Fullscreen nav */}
      <nav className="flex items-center h-[calc(100vh-200px)] px-6 md:px-10">
        <ul className="flex flex-col gap-2">
          {NAV_LINKS.map((link, i) => {
            const active = pathname === link.href;
            return (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{
                  delay: 0.4 + i * 0.08,
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="overflow-hidden"
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className={`group flex items-baseline gap-4 md:gap-6 font-display font-light text-6xl md:text-8xl lg:text-[10rem] leading-[0.95] tracking-tight transition-all ${
                    active ? "text-primary italic" : "text-[#FDF6F0] hover:text-primary"
                  }`}
                >
                  <span className="font-mono text-xs md:text-sm text-[#FDF6F0]/40 tracking-[0.3em]">
                    0{i + 1}
                  </span>
                  <span className="group-hover:italic transition-all">
                    {link.label}
                  </span>
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom info row */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-0 inset-x-0 p-6 md:p-10 flex flex-col md:flex-row gap-4 md:gap-10 justify-between font-mono text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-[#FDF6F0]/40 border-t border-[#FDF6F0]/10"
      >
        <div>{siteConfig.company.email}</div>
        <div className="md:text-center">{siteConfig.company.location}</div>
        <div className="md:text-right">© {new Date().getFullYear()} {siteConfig.company.name}</div>
      </motion.div>
    </motion.div>
  );
}
