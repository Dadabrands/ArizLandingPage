import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

import Icon from "../assets/Icon.png";
import Icon2 from "../assets/Icon2.png";
import Icon3 from "../assets/Icon3.png";
import Icon4 from "../assets/Icon4.png";

// import { Icon, Icon2, Icon3, Icon4 } from "../assets";

export const navItems = [
  { label: "Who We Are", href: "#" },
  { label: "Claims", href: "#" },
  { label: "Customer Support", href: "#" },
  { label: "My Account", href: "#" },
];

export const testimonials = [
  {
    title: "What is a deductible ?",
    text: "A deductible is the amount you must pay out of pocket for covered healthcare services before your insurance plan starts to pay. Once you've met your deductible, your insurance company will typically cover a percentage of the costs for covered services.",
  },
  {
    title: "Can I change my health insurance plan ?",
    text: "In most cases, you can only change your health insurance plan or enroll in a new plan during the open enrollment period, which typically occurs once a year. However, certain life events, such as getting married, having a baby, or losing other coverage, may qualify you for a special enrollment period.",
  },
  {
    title: "What is a copayment ?",
    text: "A copayment (or copay) is a fixed amount you pay for covered healthcare services at the time of service, such as a doctor's visit or prescription medication.",
  },
  {
    title: "Can I see any doctor or specialist with my health insurance plan?",
    text: "Your ability to see any doctor or specialist may depend on the type of health insurance plan you have. HMO plans typically require you to choose a primary care physician and obtain referrals for specialist care.",
  },
  {
    title: "Does my health insurance plan cover prescription medications?",
    text: "Most health insurance plans include coverage for prescription medications, but the specific drugs covered and the associated costs can vary.",
  },
  {
    title: "Will Ariz be around to pay my claim?",
    text: "YES!",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Drag-and-Drop Interface",
    description:
      "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
  },
  {
    icon: <Fingerprint />,
    text: "Multi-Platform Compatibility",
    description:
      "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
  },
  {
    icon: <ShieldHalf />,
    text: "Built-in Templates",
    description:
      "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
  },
  {
    icon: <BatteryCharging />,
    text: "Real-Time Preview",
    description:
      "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
  },
  {
    icon: <PlugZap />,
    text: "Collaboration Tools",
    description:
      "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
  },
  {
    icon: <GlobeLock />,
    text: "Analytics Dashboard",
    description:
      "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
  },
];

export const checklistItems = [
  {
    image: Icon,
    description:
      "ARIZ modernizes healthcare claims processing in Nigeria, eliminating paperwork and automating the process for hospitals while providing patients with transparent cost information.",
  },
  {
    image: Icon2,
    description:
      "Our AI-powered platform ensures hospitals receive payments quicker and reduces claim denials by proactively identifying and rectifying errors.",
  },
  {
    image: Icon3,
    description:
      "Patients benefit from upfront cost estimates, eliminating surprise bills, and allowing them to track their claims effortlessly.",
  },
  {
    image: Icon4,
    description:
      "By handling the paperwork efficiently, ARIZ enables healthcare providers and patients to concentrate on delivering and receiving quality care, respectively.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Cookie Policy" },
  { href: "#", text: "Sitemap" },
];

export const platformLinks = [
  { href: "#", text: "Accessibility" },
  { href: "#", text: "About Us" },
];

export const communityLinks = [
  { href: "#", text: "Legal Information" },
  { href: "#", text: "Customer Support" },
];
export const privacyLinks = [{ href: "#", text: "Privacy Policy" }];
