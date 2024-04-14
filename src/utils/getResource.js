 
const getResource = async (url) => {
  
    try {
      const response = await fetch(
        url
      );
      if (!response.ok) {
        throw new Error("Failed to fetch words");
      }
        const data = await response.json();
        console.log('await res', data);
      return data; 
    } catch (error) {
      console.error("Error fetching info:", error);
    }
  };
export default getResource;