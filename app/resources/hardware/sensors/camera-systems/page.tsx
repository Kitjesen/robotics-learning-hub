"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react'
import Link from "next/link";

export default function CameraSystemsPage() {
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
          <CardTitle>Camera Systems</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Cameras are essential sensors for robotic perception, providing visual information about the environment. They enable robots to "see" and interpret the world around them, which is crucial for various tasks.</p>
          <p>This section explores different camera systems used in robotics, including monocular, stereo, and RGB-D cameras. We'll cover key concepts like image formation, camera calibration, and image processing techniques.</p>

          <h2 className="text-xl font-semibold mt-6">Key Concepts</h2>
          <ul className="list-disc ml-6">
            <li>Monocular Vision</li>
            <li>Stereo Vision</li>
            <li>RGB-D Cameras</li>
            <li>Camera Calibration</li>
            <li>Image Processing</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6">Applications in Robotics</h2>
          <ul className="list-disc ml-6">
            <li>Object Detection and Recognition</li>
            <li>Visual Servoing</li>
            <li>Navigation and Mapping</li>
            <li>Human-Robot Interaction</li>
            <li>Scene Understanding</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

