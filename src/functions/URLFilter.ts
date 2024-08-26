// Define an array of extensions to check for
const extensions = ['.js', '.php', '.ini', '.env', '.asp'];

/**
 * Arrow function to check if a URL contains any of the specified extensions
 * @param url - The URL to check
 * @returns boolean - True if the URL contains any of the extensions, false otherwise
 */
export const CheckUrl = (url: string): boolean => {
  return extensions.some(ext => url.includes(ext));
};