"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react'
import Link from "next/link";

export default function ImuIntegrationPage() {
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
          <CardTitle>IMU Integration</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Inertial Measurement Units (IMUs) are electronic devices that measure and report a body's specific force, angular rate, and sometimes the magnetic field surrounding the body, using a combination of accelerometers and gyroscopes, sometimes also magnetometers.</p>
          <p>This section focuses on integrating IMUs into robotic systems. We'll cover topics like sensor fusion, calibration techniques, and how to use IMU data for orientation estimation and motion control.</p>

          <h2 className="text-xl font-semibold mt-6">Key Concepts</h2>
          <ul className="list-disc ml-6">
            <li>Accelerometers</li>
            <li>Gyroscopes</li>
            <li>Magnetometers</li>
            <li>Sensor Fusion (Kalman Filters, Complementary Filters)</li>
            <li>Calibration Techniques</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6">Applications in Robotics</h2>
          <ul className="list-disc ml-6">
            <li>Robot Orientation and Pose Estimation</li>
            <li>Motion Control and Stabilization</li>
            <li>Dead Reckoning Navigation</li>
            <li>Balancing Robots</li>
            <li>Gesture Recognition</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

