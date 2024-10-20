/**
 * Fetches campgrounds information from the National Park Service API.
 * @async
 * @global
 * @function FetchCampgrounds
 *
 *
 * @param {string} parkCode - The code of the park.
 * @returns {Promise<Object>} - A promise that resolves to the JSON response containing the campgrounds.
 * @throws {Error} If the network response is not ok or an error occurs during the process.
 */
export const FetchCampgrounds = async (parkCode) => {
    try{
        const url = `https://developer.nps.gov/api/v1/campgrounds?api_key=0ilOFP8jTC2LMrwXFTullFqvHyVhBh9aHVW3OWEb&parkCode=${parkCode}`;
        const response = await fetch(url);
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error.message);
        throw error;
    }
}
export default FetchCampgrounds;