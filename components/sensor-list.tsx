import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react'
import Link from "next/link"

interface Sensor {
  id: string;
  name: string;
  category: string;
  description: string;
  manufacturer: string;
  specs: {
    [key: string]: string;
  };
  price: string;
  tags: string[];
  features: string[];
  applications: string[];
  documentation: string;
  releaseDate: string;
  accuracy: string;
}

interface SensorListProps {
  sensors: Sensor[]
}

export function SensorList({ sensors }: SensorListProps) {
  const [expandedSensor, setExpandedSensor] = useState<string | null>(null)

  const toggleExpand = (id: string) => {
    setExpandedSensor(expandedSensor === id ? null : id)
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Manufacturer</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sensors.map((sensor) => (
          <>
            <TableRow key={sensor.id} className="hover:bg-muted/50">
              <TableCell>
                <div className="space-y-1">
                  <div>{sensor.name}</div>
                  <div className="flex flex-wrap gap-1">
                    {sensor.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <Badge variant="outline">{sensor.category}</Badge>
              </TableCell>
              <TableCell>{sensor.manufacturer}</TableCell>
              <TableCell>{sensor.price}</TableCell>
              <TableCell>
                <Button variant="ghost" onClick={() => toggleExpand(sensor.id)}>
                  {expandedSensor === sensor.id ? <ChevronUp /> : <ChevronDown />}
                </Button>
              </TableCell>
            </TableRow>
            {expandedSensor === sensor.id && (
              <TableRow>
                <TableCell colSpan={5}>
                  <Card className="bg-muted/50">
                    <CardContent className="p-4">
                      <Tabs defaultValue="overview">
                        <TabsList>
                          <TabsTrigger value="overview">Overview</TabsTrigger>
                          <TabsTrigger value="specs">Specifications</TabsTrigger>
                          <TabsTrigger value="features">Features</TabsTrigger>
                          <TabsTrigger value="applications">Applications</TabsTrigger>
                        </TabsList>
                        <TabsContent value="overview" className="mt-4">
                          <div className="space-y-4">
                            <p className="text-sm">{sensor.description}</p>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <span className="font-medium">Release Date:</span> {sensor.releaseDate}
                              </div>
                              <div>
                                <span className="font-medium">Accuracy:</span> {sensor.accuracy}
                              </div>
                            </div>
                            <Button variant="outline" size="sm" asChild>
                              <Link href={sensor.documentation} target="_blank" rel="noopener noreferrer">
                                Documentation <ExternalLink className="ml-2 h-4 w-4" />
                              </Link>
                            </Button>
                          </div>
                        </TabsContent>
                        <TabsContent value="specs" className="mt-4">
                          <dl className="grid grid-cols-2 gap-2 text-sm">
                            {Object.entries(sensor.specs).map(([key, value]) => (
                              <div key={key} className="flex flex-col">
                                <dt className="font-medium">{key}</dt>
                                <dd>{value}</dd>
                              </div>
                            ))}
                          </dl>
                        </TabsContent>
                        <TabsContent value="features" className="mt-4">
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            {sensor.features.map((feature, index) => (
                              <li key={index}>{feature}</li>
                            ))}
                          </ul>
                        </TabsContent>
                        <TabsContent value="applications" className="mt-4">
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            {sensor.applications.map((application, index) => (
                              <li key={index}>{application}</li>
                            ))}
                          </ul>
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                  </Card>
                </TableCell>
              </TableRow>
            )}
          </>
        ))}
      </TableBody>
    </Table>
  )
}

