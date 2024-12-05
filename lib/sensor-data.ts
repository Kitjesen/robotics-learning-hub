export interface Sensor {
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

export const sensorData: Sensor[] = [
  {
    id: "1",
    name: "MPU-6050 6-Axis Accelerometer and Gyroscope",
    category: "IMU",
    description: "A 6-axis motion tracking device for orientation sensing",
    manufacturer: "InvenSense",
    specs: {
      "Gyroscope Range": "±250, ±500, ±1000, and ±2000°/sec",
      "Accelerometer Range": "±2g, ±4g, ±8g, and ±16g",
      "Digital Output": "I2C",
      "Supply Voltage": "2.3 - 3.4V"
    },
    price: "$5 - $10",
    tags: ["6-DoF", "I2C", "Low Power", "MEMS"],
    features: [
      "Digital Motion Processing",
      "On-chip temperature sensor",
      "Programmable digital filters",
      "Self-test capability"
    ],
    applications: [
      "Robot navigation",
      "Stabilization systems",
      "Motion tracking",
      "Gesture recognition"
    ],
    documentation: "https://invensense.tdk.com/products/motion-tracking/6-axis/mpu-6050/",
    releaseDate: "2012",
    accuracy: "±0.1 degrees"
  },
  {
    id: "2",
    name: "HC-SR04 Ultrasonic Distance Sensor",
    category: "Distance",
    description: "Ultrasonic ranging module for non-contact distance measurement",
    manufacturer: "Various",
    specs: {
      "Range": "2cm - 400cm",
      "Resolution": "0.3cm",
      "Measuring Angle": "15 degrees",
      "Operating Voltage": "5V"
    },
    price: "$2 - $5",
    tags: ["Ultrasonic", "Non-contact", "Waterproof", "Basic"],
    features: [
      "Non-contact measurement",
      "High accuracy",
      "Stable performance",
      "Wide voltage operation"
    ],
    applications: [
      "Obstacle avoidance",
      "Level measurement",
      "Robot navigation",
      "Parking assistance"
    ],
    documentation: "https://cdn.sparkfun.com/datasheets/Sensors/Proximity/HCSR04.pdf",
    releaseDate: "2010",
    accuracy: "±3mm"
  },
  {
    id: "3",
    name: "VL53L0X Time-of-Flight Distance Sensor",
    category: "Distance",
    description: "High accuracy, long range distance sensor",
    manufacturer: "STMicroelectronics",
    specs: {
      "Range": "Up to 2m",
      "Accuracy": "±3%",
      "Field of View": "25°",
      "Interface": "I2C"
    },
    price: "$10 - $15",
    tags: ["ToF", "I2C", "High Precision", "Laser"],
    features: [
      "940nm VCSEL laser",
      "Advanced ambient light rejection",
      "Eye-safe operation",
      "Multiple operating modes"
    ],
    applications: [
      "Precise distance measurement",
      "Gesture detection",
      "3D room scanning",
      "Robotics automation"
    ],
    documentation: "https://www.st.com/en/imaging-and-photonics-solutions/vl53l0x.html",
    releaseDate: "2016",
    accuracy: "±3%"
  }
];

