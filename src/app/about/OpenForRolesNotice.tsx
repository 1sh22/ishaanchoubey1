"use client";

import { motion } from "framer-motion";

export default function OpenForRolesNotice() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="border rounded-md px-1 pt-1 pb-1 inline-flex items-center gap-1 py-2 -mt-6 mb-5"
      style={{ background: "transparent", borderColor: "#299e90" }}
      data-nuid="open-for-roles-notice"
    >
      <motion.span
        className="inline-block w-1.5 h-1.5 rounded-full"
        style={{ backgroundColor: "#299e90" }}
        animate={{ opacity: [1, 0.2, 1] }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
      />
      <span
        className="font-medium text-xs"
        style={{ color: "#299e90" }}
      >
        Open for full-time SDE/AI roles
      </span>
    </motion.div>
  );
}
