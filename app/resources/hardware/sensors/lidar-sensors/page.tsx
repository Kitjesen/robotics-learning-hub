"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react'
import Link from "next/link";

export default function LidarSensorsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Button
        variant="ghost"
        className="mb-6"
        asChild
      >
        <Link href="/resources/hardware/sensors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Sensors
        </Link>
      </Button>
      <Card>
        <CardHeader>
          <CardTitle>LiDAR Sensors</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Light Detection and Ranging (LiDAR) sensors are a crucial component in many robotic systems. They use laser light to measure distances and create detailed 3D maps of the surrounding environment. This information is essential for navigation, obstacle avoidance, and other perception tasks.
          </p>
          <p>
            This section provides a comprehensive guide to LiDAR sensors, covering various aspects such as their working principles, different types of LiDAR sensors, their applications in robotics, and how to integrate and program them.
          </p>
          <h2 className="text-xl font-semibold mt-6">Key Concepts</h2>
          <ul className="list-disc ml-6">
            <li>Time-of-Flight (ToF) LiDAR</li>
            <li>Scanning LiDAR</li>
            <li>Solid-State LiDAR</li>
            <li>Data Representation (Point Clouds)</li>
            <li>Calibration and Registration</li>
          </ul>
          <h2 className="text-xl font-semibold mt-6">Applications in Robotics</h2>
          <ul className="list-disc ml-6">
            <li>Autonomous Navigation</li>
            <li>Mapping and Localization (SLAM)</li>
            <li>Obstacle Detection and Avoidance</li>
            <li>Object Recognition and Classification</li>
            <li>Environmental Monitoring</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

