

const whatsappNumber = "91967458762"; // country code + number, no +, spaces or dashes
const whatsappMessage =
  "Hi, I'm interested in personal training. Can you share the details?";

export const socials = {
  whatsapp: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
  instagram: "https://instagram.com/your-username",
  facebook: "https://facebook.com/your-profile",
};

// Keep these identical to the Google Business Profile (name, address, phone)
export const business = {
  name: "Joji Fitness",
  tagline: "Personal Trainer in Kadavanthra, Kochi, Kerala",
  phone: "+91967458762",
  phoneDisplay: "+91 967458762",
  email: "jojifitness@gmail.com",
  address: "Kochi, Kerala, India",
  googleReviews: "", // paste the Google Business Profile reviews link here when it exists
};