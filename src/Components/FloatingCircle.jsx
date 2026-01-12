import { motion } from "framer-motion";

const FloatingCircle = ({ icon, side = "left", label }) => {
  const isLeft = side === "left";

  return (
    <motion.div
      initial={{ x: isLeft ? -100 : 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 50, damping: 20, delay: 1 }}
      className={`fixed top-1/2 -translate-y-1/2 z-0 flex items-center ${
        isLeft
          ? "-left-10 md:-left-12 flex-row"
          : "-right-10 md:-right-12 flex-row-reverse"
      }`}
    >
      {/* Green Horizontal Line */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "50vw" }}
        transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
        className={`absolute h-[2px] bg-gradient-to-r from-transparent via-green-400/40 to-transparent -z-10 ${
          isLeft ? "left-0" : "right-0"
        }`}
      />

      <div className="absolute inset-0 bg-blue-400/10 blur-[60px] rounded-full scale-150" />

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative flex items-center justify-center w-28 h-28 md:w-44 md:h-44 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl shadow-2xl"
      >
        <div className="flex flex-col items-center justify-center w-20 h-20 md:w-32 md:h-32 rounded-full border border-white/30 bg-gradient-to-br from-white/20 to-transparent shadow-inner">
          <div className="scale-75 md:scale-100">{icon}</div>
          {label && (
            <span className="text-[8px] md:text-[10px] font-bold mt-1 text-slate-700 tracking-widest uppercase">
              {label}
            </span>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FloatingCircle;
