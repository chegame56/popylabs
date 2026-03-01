'use client'

import { useEffect, useState } from 'react'

export default function ActiveBackgroundEffects() {
    const [cursorPos, setCursorPos] = useState({ x: -500, y: -500 })
    const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number; delay: number; color: string }>>([])

    // Cursor glow effect
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setCursorPos({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    // Generate floating particles
    useEffect(() => {
        const colors = ['#D4AF37', '#FF7A5A', '#14B8A6', '#FBBF24'] // gold, coral, teal, sunset
        const particleCount = 15

        const newParticles = Array.from({ length: particleCount }, (_, i) => ({
            id: i,
            x: Math.random() * 100, // percentage
            y: Math.random() * 100,
            size: Math.random() * 4 + 2, // 2-6px
            duration: Math.random() * 20 + 30, // 30-50s
            delay: Math.random() * 10, // 0-10s
            color: colors[Math.floor(Math.random() * colors.length)]
        }))

        setParticles(newParticles)
    }, [])

    return (
        <>
            {/* Cursor Glow Trail */}
            <div
                id="cursor-glow"
                style={{
                    left: cursorPos.x,
                    top: cursorPos.y,
                }}
            />

            {/* Floating Particles */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
                {particles.map((particle) => (
                    <div
                        key={particle.id}
                        className="particle"
                        style={{
                            left: `${particle.x}%`,
                            bottom: '0',
                            width: `${particle.size}px`,
                            height: `${particle.size}px`,
                            backgroundColor: particle.color,
                            animationDuration: `${particle.duration}s`,
                            animationDelay: `${particle.delay}s`,
                            opacity: 0.4
                        }}
                    />
                ))}
            </div>
        </>
    )
}
