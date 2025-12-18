import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// WhatsApp number for booking
export const WHATSAPP_NUMBER = "6285714707483";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

// Format price in IDR with thousand separators
export function formatIDR(usdPrice: number): string {
  const idrPrice = usdPrice * 16000;
  // Format with Indonesian locale for thousand separators (uses dots)
  // Or use en-US for comma separators
  return `IDR ${idrPrice.toLocaleString('id-ID')}`;
}

