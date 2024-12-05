"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

const quizQuestions = [
  {
    question: "What does 'DOF' stand for in robotics?",
    options: [
      "Depth of Field",
      "Degrees of Freedom",
      "Digital Output Frequency",
      "Directional Output Force"
    ],
    correctAnswer: 1
  },
  {
    question: "Which of the following is NOT a type of robot joint?",
    options: [
      "Revolute",
      "Prismatic",
      "Cylindrical",
      "Elliptical"
    ],
    correctAnswer: 3
  },
  {
    question: "What is the primary purpose of SLAM in robotics?",
    options: [
      "Sensor Calibration",
      "Motion Planning",
      "Simultaneous Localization and Mapping",
      "Speech Recognition"
    ],
    correctAnswer: 2
  }
]

export function RoboticsQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)

  const handleAnswer = () => {
    if (selectedAnswer !== null) {
      if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
        setScore(score + 1)
      }
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer(null)
      } else {
        setQuizCompleted(true)
      }
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setScore(0)
    setQuizCompleted(false)
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Robotics Quiz</CardTitle>
        <CardDescription>Test your knowledge of robotics concepts</CardDescription>
      </CardHeader>
      <CardContent>
        {!quizCompleted ? (
          <>
            <h3 className="text-lg font-semibold mb-4">
              Question {currentQuestion + 1} of {quizQuestions.length}
            </h3>
            <p className="mb-4">{quizQuestions[currentQuestion].question}</p>
            <RadioGroup value={selectedAnswer?.toString()} onValueChange={(value) => setSelectedAnswer(parseInt(value))}>
              {quizQuestions[currentQuestion].options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`}>{option}</Label>
                </div>
              ))}
            </RadioGroup>
          </>
        ) : (
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Quiz Completed!</h3>
            <p className="text-lg mb-4">Your score: {score} out of {quizQuestions.length}</p>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-end">
        {!quizCompleted ? (
          <Button onClick={handleAnswer} disabled={selectedAnswer === null}>
            {currentQuestion < quizQuestions.length - 1 ? "Next Question" : "Finish Quiz"}
          </Button>
        ) : (
          <Button onClick={resetQuiz}>Restart Quiz</Button>
        )}
      </CardFooter>
    </Card>
  )
}

