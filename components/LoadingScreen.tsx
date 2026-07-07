"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const alreadySeen = sessionStorage.getItem("jie-intro-seen");
    if (alreadySeen) {
      setVisible(false);
      return;
    }
    const timer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("jie-intro-seen", "1");
    }, 1900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(12px)" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.svg
            width="120"
            height="52"
            viewBox="0 0 120 52"
            initial={{ opacity: 0, scale: 0.92, filter: "blur(6px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <text
              x="0"
              y="30"
              fontFamily="var(--font-display)"
              fontWeight={800}
              fontSize="30"
              fill="#e0272c"
              letterSpacing="1"
            >
              JIE
            </text>
            <text
              x="0"
              y="46"
              fontFamily="var(--font-mono)"
              fontWeight={600}
              fontSize="11"
              fill="#1d1d1f"
              letterSpacing="4"
            >
              BNAMIQ
            </text>
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
