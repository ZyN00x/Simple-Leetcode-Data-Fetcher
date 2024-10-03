const fetchUserDetails = async (userID) => {
  if (!userID) throw new Error("You must provide a username");

  const response = await fetch(
    `https://alfa-leetcode-api.onrender.com/userProfile/${userID}/`
  );

  if (!response.ok) {
    throw new Error(`Error fetching user details: ${response.statusText}`);
  }

  try {
    return response.json();
  } catch (error) {
    throw new Error(`Error parsing user details json, error: ${error}`);
  }
};

export default fetchUserDetails;
