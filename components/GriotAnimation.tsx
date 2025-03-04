"use client"

import type React from "react"
import { useEffect, useRef } from "react"

export const GriotAnimation: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (svgRef.current) {
      const svg = svgRef.current
      const ripples = svg.querySelectorAll(".ripple")
      const griot = svg.querySelector(".griot")
      const people = svg.querySelectorAll(".person")

      // Animate the griot
      if (griot) {
        griot.animate([{ transform: "scale(1)" }, { transform: "scale(1.1)" }, { transform: "scale(1)" }], {
          duration: 2000,
          iterations: Number.POSITIVE_INFINITY,
        })
      }

      // Animate the ripples
      ripples.forEach((ripple, index) => {
        ripple.animate(
          [
            { opacity: 0, transform: "scale(0)" },
            { opacity: 1, transform: "scale(1)" },
            { opacity: 0, transform: "scale(1.5)" },
          ],
          {
            duration: 3000,
            delay: index * 500,
            iterations: Number.POSITIVE_INFINITY,
          },
        )
      })

      // Animate the people
      people.forEach((person, index) => {
        person.animate(
          [{ transform: "translateY(0)" }, { transform: "translateY(-5px)" }, { transform: "translateY(0)" }],
          {
            duration: 1500,
            delay: index * 300,
            iterations: Number.POSITIVE_INFINITY,
          },
        )
      })
    }
  }, [])

  return (
    <svg ref={svgRef} viewBox="0 0 200 200" className="w-full h-auto max-w-md mx-auto">
      <circle cx="100" cy="100" r="80" fill="#1c1917" />
      <circle className="ripple" cx="100" cy="100" r="60" fill="none" stroke="#78716c" strokeWidth="2" />
      <circle className="ripple" cx="100" cy="100" r="70" fill="none" stroke="#78716c" strokeWidth="2" />
      <circle className="ripple" cx="100" cy="100" r="80" fill="none" stroke="#78716c" strokeWidth="2" />
      <circle className="griot" cx="100" cy="100" r="20" fill="#d6d3d1" />
      <circle className="person" cx="50" cy="50" r="10" fill="#a8a29e" />
      <circle className="person" cx="150" cy="50" r="10" fill="#a8a29e" />
      <circle className="person" cx="50" cy="150" r="10" fill="#a8a29e" />
      <circle className="person" cx="150" cy="150" r="10" fill="#a8a29e" />
    </svg>
  )
}

