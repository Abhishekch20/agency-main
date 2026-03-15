"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    const isDark = theme === "dark";

    return (
        <button
            onClick={toggleTheme}
            className="relative flex items-center bg-muted/40 backdrop-blur-xl rounded-full p-1 border border-border/50 w-[72px] h-9 group transition-all duration-500 hover:border-primary/40 hover:shadow-primary/10"
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        >
            {/* Icons */}
            <div className="flex justify-between items-center w-full px-2 z-10 pointer-events-none">
                <Sun className={`w-4 h-4 transition-all duration-500 ${!isDark ? "text-primary scale-110" : "text-muted-foreground/40"}`} />
                <Moon className={`w-4 h-4 transition-all duration-500 ${isDark ? "text-primary scale-110" : "text-muted-foreground/40"}`} />
            </div>

            {/* Sliding Knob */}
            <motion.div
                initial={false}
                animate={{
                    x: isDark ? 36 : 0,
                    backgroundColor: isDark ? "rgba(10, 10, 10, 0.8)" : "rgba(255, 255, 255, 0.9)"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="absolute left-1 w-7 h-7 bg-background rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.1)] border border-border/50 flex items-center justify-center p-1.5"
            >
                <div className="w-full h-full rounded-full bg-primary/10" />
            </motion.div>
        </button>
    );
}
