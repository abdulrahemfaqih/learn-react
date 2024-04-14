export function generateSlug(string) {
   // Check if string is not null, undefined, or not a string
   if (typeof string !== "string" || string === null || string === undefined) {
      // Handle the case where string is not a valid string
      return ""; // or throw an error, or handle differently based on your requirements
   }

   // If string is a valid string, proceed with slug generation
   return string
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-{2,}/g, "-")
      .trim();
}
