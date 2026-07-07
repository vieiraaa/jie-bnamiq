"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Image from "next/image";
import logo11 from "@/lib/logojiebnamiq.png";


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
            
             <Image
              src={logo11}
              alt="JIE BNAMIQ"
              width={160}
              priority
              className="h-auto w-auto opacity-90 "
            />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
