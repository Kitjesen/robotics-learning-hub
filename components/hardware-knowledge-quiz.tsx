"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle2, XCircle, RotateCcw, Trophy } from 'lucide-react'

interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

const questions: Question[] = [
  {
    id: 1,
    question: "What is the typical operating voltage range for most I2C sensors?",
    options: [
      "1.0V - 1.8V",
      "2.3V - 3.6V",
      "5V - 12V",
      "12V - 24V"
    ],
    correctAnswer: 1,
    explanation: "Most I2C sensors operate in the 2.3V - 3.6V range, making them compatible with 3.3V microcontrollers."
  },
  {
    id: 2,
    question: "Which parameter is most important when selecting an IMU for a stabilization system?",
    options: [
      "Price",
      "Size",
      "Update rate",
      "Power consumption"
    ],
    correctAnswer: 2,
    explanation: "Update rate is crucial for stabilization systems as it determines how quickly the system can respond to changes in orientation."
  },
  {
    id: 3,
    question: "What is the typical accuracy range of a good quality ultrasonic distance sensor?",
    options: [
      "±0.1mm",
      "±1-3mm",
      "±1-2cm",
      "±5-10cm"
    ],
    correctAnswer: 1,
    explanation: "Good quality ultrasonic sensors typically have an accuracy of ±1-3mm, suitable for most robotics applications."
  },
  {
    id: 4,
    question: "Which communication protocol is most commonly used for high-speed camera sensors?",
    options: [
      "I2C",
      "SPI",
      "UART",
      "USB"
    ],
    correctAnswer: 3,
    explanation: "USB is commonly used for camera sensors due to its high bandwidth capability, necessary for transmitting image data."
  },
  {
    id: 5,
    question: "What is the typical range of a standard infrared proximity sensor?",
    options: [
      "1-10cm",
      "10-80cm",
      "1-5m",
      "5-10m"
    ],
    correctAnswer: 1,
    explanation: "Standard IR proximity sensors typically work best in the 10-80cm range, though this can vary by model."
  }
]

interface HardwareKnowledgeQuizProps {
  onComplete: (score: number) => void
}

export function HardwareKnowledgeQuiz({ onComplete }: HardwareKnowledgeQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)

  const handleAnswer = () => {
    if (selectedAnswer === null) return

    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }
    setShowExplanation(true)
  }

  const handleNext = () => {
    setSelectedAnswer(null)
    setShowExplanation(false)
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setQuizCompleted(true)
      onComplete(score)
    }
  }

  const getScoreBadge = () => {
    const percentage = (score / questions.length) * 100
    if (percentage >= 80) return { color: "bg-green-100 text-green-800", text: "Expert" }
    if (percentage >= 60) return { color: "bg-blue-100 text-blue-800", text: "Intermediate" }
    return { color: "bg-yellow-100 text-yellow-800", text: "Beginner" }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Hardware Knowledge Quiz</CardTitle>
        <CardDescription>Test your understanding of sensor specifications and parameters</CardDescription>
      </CardHeader>
      <CardContent>
        <AnimatePresence mode="wait">
          {!quizCompleted ? (
            <motion.div
              key="quiz"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">
                    Question {currentQuestion + 1} of {questions.length}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    Score: {score}/{currentQuestion + (showExplanation ? 1 : 0)}
                  </span>
                </div>
                <Progress 
                  value={(currentQuestion + (showExplanation ? 1 : 0)) / questions.length * 100} 
                  className="h-2"
                />
              </div>

              <div className="space-y-4">
                <h3 className="font-medium text-lg">
                  {questions[currentQuestion].question}
                </h3>

                <RadioGroup
                  value={selectedAnswer?.toString()}
                  onValueChange={(value) => setSelectedAnswer(parseInt(value))}
                  className="space-y-2"
                >
                  {questions[currentQuestion].options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <RadioGroupItem
                        value={index.toString()}
                        id={`option-${index}`}
                        disabled={showExplanation}
                      />
                      <Label
                        htmlFor={`option-${index}`}
                        className={
                          showExplanation
                            ? index === questions[currentQuestion].correctAnswer
                              ? "text-green-600 font-medium"
                              : selectedAnswer === index
                              ? "text-red-600"
                              : ""
                            : ""
                        }
                      >
                        {option}
                        {showExplanation && index === questions[currentQuestion].correctAnswer && (
                          <CheckCircle2 className="inline-block ml-2 h-4 w-4 text-green-600" />
                        )}
                        {showExplanation && selectedAnswer === index && index !== questions[currentQuestion].correctAnswer && (
                          <XCircle className="inline-block ml-2 h-4 w-4 text-red-600" />
                        )}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>

                {showExplanation && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-muted rounded-lg"
                  >
                    <p className="text-sm">{questions[currentQuestion].explanation}</p>
                  </motion.div>
                )}

                <div className="flex justify-end gap-2 mt-4">
                  {!showExplanation ? (
                    <Button
                      onClick={handleAnswer}
                      disabled={selectedAnswer === null}
                    >
                      Check Answer
                    </Button>
                  ) : (
                    <Button onClick={handleNext}>
                      {currentQuestion < questions.length - 1 ? "Next Question" : "Finish Quiz"}
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center"
            >
              <Trophy className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
              <h3 className="text-2xl font-bold mb-2">Quiz Completed!</h3>
              <p className="text-lg mb-4">
                Your score: {score} out of {questions.length} ({Math.round(score/questions.length*100)}%)
              </p>
              <Badge className={`${getScoreBadge().color} mb-6`}>
                {getScoreBadge().text} Level
              </Badge>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  )
}

