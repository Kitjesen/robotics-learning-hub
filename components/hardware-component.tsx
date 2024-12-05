import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

interface HardwareComponentProps {
  id: string
  name: string
  category: string
  description: string
  image: string
  specs: {
    [key: string]: string
  }
  price: string
  manufacturer: string
}

export function HardwareComponent({ id, name, category, description, image, specs, price, manufacturer }: HardwareComponentProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <div className="relative w-full h-48">
          <Image
            src={image}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        <CardTitle className="mt-4">{name}</CardTitle>
        <CardDescription>{manufacturer}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <Badge className="mb-2">{category}</Badge>
        <p className="text-sm mb-4">{description}</p>
        <div className="space-y-2">
          {Object.entries(specs).map(([key, value]) => (
            <div key={key} className="flex justify-between text-sm">
              <span className="font-medium">{key}:</span>
              <span>{value}</span>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <span className="font-bold">{price}</span>
        <Button asChild>
          <Link href={`/hardware/${id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

