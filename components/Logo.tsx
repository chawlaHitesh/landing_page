"use client"
import Image from "next/image"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function Logo() {
    const { theme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        // optional: show a placeholder or just render one default logo
        return (
            <Image
                src="/encora_dark_logo.png"
                alt="Encora Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
                priority
            />
        )
    }

    return (
        <Image
            src={resolvedTheme === "dark" ? "/encora_light_logo.png" : "/encora_dark_logo.png"}
            alt="Encora Logo"
            width={120}
            height={40}
            className="h-8 w-auto"
            priority
        />
    )
}
