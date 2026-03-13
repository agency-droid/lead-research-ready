import { Calendar, Briefcase, MessageCircle, Globe, Mail, Linkedin, Phone, Instagram, Facebook } from "lucide-react";

export const ownerName = "Joey Amadeo";
export const businessName = "Bonvenu Bank";
export const profession = "VP, Commercial Lending";
export const licenseId = "NMLS #661-212";
export const location = "Baton Rouge, Louisiana";
export const bioText = "Helping businesses secure the right funding with personalized solutions. 20+ years of turning introductions into lasting partnerships.";
export const phoneNumber = "+19855101651";
export const phoneDisplay = "(985) 510-1651";
export const email = "jamadeo@bonvenubank.com";

export const stats = [
  { val: "$200M+", label: "Funded Loans" },
  { val: "20+", label: "Years Experience" },
];

export const linkCards = [
  { icon: Calendar, title: "Book a Consultation", subtitle: "30-min strategy call", href: "#contact" },
  { icon: Briefcase, title: "Commercial Lending", subtitle: "Business loans & credit lines", href: "https://www.bonvenubank.com/business/borrow/commercial-loans" },
  { icon: MessageCircle, title: "Send Me a Message", subtitle: "Let's discuss your needs", href: `tel:${phoneNumber}` },
  { icon: Globe, title: "Bonvenu Bank Website", subtitle: "Learn about our institution", href: "https://www.bonvenubank.com" },
];

export const socials = [
  { icon: Mail, href: `mailto:${email}`, label: "Email" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/joeyamadeo/", label: "LinkedIn" },
  { icon: Phone, href: `tel:${phoneNumber}`, label: "Phone" },
  { icon: Instagram, href: "https://www.instagram.com/joeyamadeo/", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/joeyamadeo", label: "Facebook" },
];

export const socialVideos = [
  { title: "Wifey's Review", platform: "Instagram", video: "/videos/wifeys-review.mp4", href: "https://www.instagram.com/joeyamadeo/" },
  { title: "The #1 Secret to Success", platform: "LinkedIn", video: "/videos/secret-to-success.mp4", href: "https://www.linkedin.com/in/joeyamadeo/" },
  { title: "Every Business Needs a Personal Banker", platform: "LinkedIn", video: "/videos/personal-banker.mp4", href: "https://www.linkedin.com/in/joeyamadeo/" },
];

export const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Joey Amadeo
N:Amadeo;Joey;;;
TITLE:VP, Commercial Lending
ORG:Bonvenu Bank
TEL;TYPE=CELL:+19855101651
EMAIL:jamadeo@bonvenubank.com
ADR;TYPE=WORK:;;Baton Rouge;Louisiana;;US
URL:https://www.bonvenubank.com
END:VCARD`;

export const ease: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
