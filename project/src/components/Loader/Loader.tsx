import { motion } from "motion/react";

const Loader = () => {
    return (
        <motion.div className="flex gap-4">
            <motion.div initial={{y: 0}} animate={{y:[0, 10, -10, 0]}} transition={{duration: 0.5, repeat: Infinity, repeatDelay: 1}} className="w-4 h-4 bg-amber-400 rounded-full"></motion.div>
            <motion.div initial={{y: 0}} animate={{y:[0, 10, -10, 0]}} transition={{duration: 0.5, repeat: Infinity, repeatDelay: 1, delay: 0.25}} className="w-4 h-4 bg-amber-400 rounded-full"></motion.div>
            <motion.div initial={{y: 0}} animate={{y:[0, 10, -10, 0]}} transition={{duration: 0.5, repeat: Infinity, repeatDelay: 1, delay: 0.5}} className="w-4 h-4 bg-amber-400 rounded-full"></motion.div>
        </motion.div>
    )
}

export default Loader
