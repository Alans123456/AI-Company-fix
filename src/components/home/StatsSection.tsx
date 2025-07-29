import { useEffect, useState } from "react"
import { Users, Briefcase, Award, Clock } from "lucide-react"

const stats = [
  { icon: Users, label: "Happy Clients", value: 150, suffix: "+" },
  { icon: Briefcase, label: "Projects Completed", value: 300, suffix: "+" },
  { icon: Award, label: "Awards Won", value: 25, suffix: "" },
  { icon: Clock, label: "Years Experience", value: 12, suffix: "" },
]

export function StatsSection() {
  const [counters, setCounters] = useState(stats.map(() => 0))

  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      return setInterval(() => {
        setCounters(prev => {
          const newCounters = [...prev]
          if (newCounters[index] < stat.value) {
            newCounters[index] = Math.min(newCounters[index] + Math.ceil(stat.value / 50), stat.value)
          }
          return newCounters
        })
      }, 50)
    })

    return () => intervals.forEach(clearInterval)
  }, [])

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="text-center text-white">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Icon className="h-8 w-8" />
                  </div>
                </div>
                <div className="text-3xl sm:text-4xl font-bold mb-2">
                  {counters[index]}{stat.suffix}
                </div>
                <div className="text-blue-100 font-medium">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}