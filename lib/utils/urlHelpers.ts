
export const encodeData = (data: any): string => {
  // 1. Convert object to JSON string
  const jsonString = JSON.stringify(data);
  // 2. Encode to Base64 (btoa = Binary to ASCII)
  return btoa(jsonString);
};

export const decodeData = (encodedString: string): any => {
    
  try {
    // 1. Decode from Base64 (atob = ASCII to Binary)
    const jsonString = atob(encodedString);
    // 2. Parse back to Object
    
    return JSON.parse(jsonString);
  } catch (error) {
    console.error("Failed to decode URL data", error);
    return null;
  }
};