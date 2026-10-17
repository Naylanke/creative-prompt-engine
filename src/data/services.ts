import { Cpu, AppWindow, Network, Bug, Smartphone, LifeBuoy, type LucideIcon } from "lucide-react";

export type Delivery = "Remote" | "On-site / physical access" | "Remote or on-site";

export interface Service {
  title: string;
  icon: LucideIcon;
  description: string;
  items: string[];
  delivery: Delivery;
}

export const services: Service[] = [
  {
    title: "Computer Repair & Maintenance",
    icon: Cpu,
    description: "Diagnosis, upgrades and upkeep to keep your machine running reliably.",
    items: ["Hardware fault diagnosis", "Component replacement and upgrades", "Preventive maintenance", "Performance troubleshooting"],
    delivery: "On-site / physical access",
  },
  {
    title: "Software Installation & Troubleshooting",
    icon: AppWindow,
    description: "Clean installs, correct configuration and fixes for stubborn errors.",
    items: ["Windows installation and configuration", "Driver and application installation", "Operating system troubleshooting", "Software errors and performance issues"],
    delivery: "Remote or on-site",
  },
  {
    title: "Networking Solutions",
    icon: Network,
    description: "Stable, properly configured connections at home or in the office.",
    items: ["Wi-Fi and router configuration", "LAN and Ethernet troubleshooting", "IP addressing and connectivity problems", "Basic network diagnostics"],
    delivery: "Remote or on-site",
  },
  {
    title: "Programming & Debugging",
    icon: Bug,
    description: "Find the root cause, fix the bug and understand why it happened.",
    items: ["Code error investigation", "Bug fixing and troubleshooting", "Website problem diagnosis", "Programming project assistance"],
    delivery: "Remote",
  },
  {
    title: "Phone & Device Support",
    icon: Smartphone,
    description: "Setup and troubleshooting for supported smartphones and devices.",
    items: ["Supported smartphone configuration", "Device connectivity issues", "Application setup and troubleshooting", "General device diagnostics"],
    delivery: "Remote or on-site",
  },
  {
    title: "General IT Assistance",
    icon: LifeBuoy,
    description: "Practical help and clear guidance for everyday technology problems.",
    items: ["Technical consultation", "Computer setup and configuration", "Basic technical training", "Everyday problem-solving"],
    delivery: "Remote",
  },
];
