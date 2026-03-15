import { Calendar, Briefcase, MessageCircle, Globe, Mail, Linkedin, Phone, Instagram, Facebook } from "lucide-react";

export const ownerName = "Dr. Angie Huff";
export const businessName = "SYNC Life";
export const profession = "PharmD · Founder & Wellness Visionary";
export const licenseId = "The Functional Pharmacist";
export const location = "Baton Rouge, Louisiana";
export const bioText = "Not sick but not feeling optimal either? After 18 years watching patients walk out with more prescriptions and less health, I built something different. Root-cause medicine for people who want real answers.";
export const phoneNumber = "+12254433575";
export const phoneDisplay = "(225) 443-3575";
export const email = "info@synclife.health";

export const stats = [
  { val: "18+", label: "Years Experience" },
  { val: "124", label: "Biomarkers Tested" },
  { val: "3", label: "Clinicians On Team" },
];

export const linkCards = [
  { icon: Calendar, title: "Book Your Free Vitality Consultation", subtitle: "One conversation. Real answers.", href: "https://links.journeywell.io/widget/booking/zhpX7oUADvHcPFEJGOYl" },
  { icon: Briefcase, title: "Vitality Blueprint", subtitle: "124 biomarkers · Personalized care plan", href: "https://synclife.health" },
  { icon: MessageCircle, title: "What Is SYNC Life?", subtitle: "Hormones · NAD+ · Peptides · Longevity", href: "https://synclife.health" },
  { icon: Globe, title: "Visit SYNC Life", subtitle: "synclife.health", href: "https://synclife.health" },
];

export const socials = [
  { icon: Mail, href: `mailto:${email}`, label: "Email" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/angie-huff-pharmd-42687348/", label: "LinkedIn" },
  { icon: Phone, href: `tel:${phoneNumber}`, label: "Phone" },
  { icon: Instagram, href: "https://www.instagram.com/angiehuffpharmd/", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/synclifebr/", label: "Facebook" },
];

export const socialVideos = [
  { title: "Are Hormones Dangerous? Let's Clear This Up.", platform: "Instagram", video: "", href: "https://www.instagram.com/angiehuffpharmd/" },
  { title: "Pioneering a New Era in Healthcare", platform: "Instagram", video: "", href: "https://www.instagram.com/angiehuffpharmd/" },
  { title: "What's the point of building a life if your body can't keep up?", platform: "Instagram", video: "", href: "https://www.instagram.com/angiehuffpharmd/" },
];

export const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Dr. Angie Huff
N:Huff;Angie;;;
TITLE:PharmD, Founder & Wellness Visionary
ORG:SYNC Life
TEL;TYPE=WORK:+12254433575
EMAIL:info@synclife.health
ADR;TYPE=WORK:;;18303 Perkins Rd E, Suite 403;Baton Rouge;LA;70810;US
URL:https://synclife.health
END:VCARD`;

export const ease: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
