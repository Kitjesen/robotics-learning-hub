import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, AlertTriangle, HelpCircle } from 'lucide-react'

const tips = [
  { icon: CheckCircle2, color: "text-green-500", tip: "Consider the specific requirements of your project (e.g., range, accuracy, response time)" },
  { icon: CheckCircle2, color: "text-green-500", tip: "Check compatibility with your existing hardware and software" },
  { icon: AlertTriangle, color: "text-yellow-500", tip: "Evaluate power consumption and voltage requirements" },
  { icon: CheckCircle2, color: "text-green-500", tip: "Look for sensors with good documentation and community support" },
  { icon: HelpCircle, color: "text-blue-500", tip: "Consider the environmental conditions in which the sensor will operate" },
  { icon: CheckCircle2, color: "text-green-500", tip: "Compare prices and read reviews from other users" },
  { icon: AlertTriangle, color: "text-yellow-500", tip: "Check for any necessary calibration procedures" },
  { icon: HelpCircle, color: "text-blue-500", tip: "Consider the sensor's size and weight, especially for mobile robots" },
  { icon: CheckCircle2, color: "text-green-500", tip: "Evaluate the sensor's durability and expected lifespan" },
  { icon: CheckCircle2, color: "text-green-500", tip: "Look for sensors with easily accessible data sheets and application notes" },
]

export function BuyingGuide() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Sensor Buying Guide</CardTitle>
          <CardDescription>Tips for choosing the right sensor for your robotics project</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {tips.map((tip, index) => (
              <motion.li 
                key={index} 
                className="flex items-start space-x-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <tip.icon className={`h-5 w-5 ${tip.color} flex-shrink-0 mt-0.5`} />
                <span>{tip.tip}</span>
              </motion.li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  )
}

