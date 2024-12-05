export const hardwareData = [
  {
    id: "1",
    name: "Raspberry Pi 4 Model B",
    category: "single-board computer",
    description: "A powerful single-board computer for robotics projects",
    image: "/hardware/raspberry-pi-4.jpg",
    specs: {
      "Processor": "Broadcom BCM2711, Quad core Cortex-A72 (ARM v8) 64-bit SoC @ 1.5GHz",
      "RAM": "2GB, 4GB or 8GB LPDDR4-3200 SDRAM",
      "Connectivity": "2.4 GHz and 5.0 GHz IEEE 802.11ac wireless, Bluetooth 5.0, BLE",
      "GPIO": "40-pin GPIO header"
    },
    price: "$35 - $75",
    manufacturer: "Raspberry Pi Foundation"
  },
  {
    id: "2",
    name: "NEMA 17 Stepper Motor",
    category: "motor",
    description: "A versatile stepper motor for precise movement control",
    image: "/hardware/nema-17.jpg",
    specs: {
      "Step Angle": "1.8°",
      "Holding Torque": "40 N.cm (56.7 oz.in)",
      "Rated Current": "1.7A",
      "Resistance": "1.5Ω"
    },
    price: "$15 - $25",
    manufacturer: "Various"
  },
  {
    id: "3",
    name: "MPU-6050 6-Axis Accelerometer and Gyroscope",
    category: "sensor",
    description: "A 6-axis motion tracking device for orientation sensing",
    image: "/hardware/mpu-6050.jpg",
    specs: {
      "Gyroscope Range": "±250, ±500, ±1000, and ±2000°/sec",
      "Accelerometer Range": "±2g, ±4g, ±8g, and ±16g",
      "Digital Output": "I2C",
      "Supply Voltage": "2.3 - 3.4V"
    },
    price: "$5 - $10",
    manufacturer: "InvenSense"
  }
]

