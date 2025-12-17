import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// WhatsApp number for booking
export const WHATSAPP_NUMBER = "6285714707483";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

// Format price in IDR with Mio notation
export function formatIDR(usdPrice: number): string {
  const idrPrice = usdPrice * 16000;
  const mio = idrPrice / 1000000;

  // Format with one decimal if not a whole number
  if (mio % 1 === 0) {
    return `IDR ${mio} Mio`;
  } else {
    return `IDR ${mio.toFixed(1)} Mio`;
  }
}

