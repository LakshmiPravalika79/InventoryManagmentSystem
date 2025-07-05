const BASE_URL = "http://localhost:8080/users"; // Adjust backend URL if needed

const signUp = async (userData) => {
  try {
    const response = await fetch(`${BASE_URL}/signup`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.text();
  } catch (error) {
    console.error("Error signing up:", error);
    return "Error: Unable to connect to the server";
  }
};

const signIn = async (credentials) => {
    try {
        const response = await fetch(`${BASE_URL}/signin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.text();
    } catch (error) {
        console.error("Error signing in:", error);
        return "Error: Unable to connect to the server";
    }
};




const recoverPassword = async (email) => {
  try {
    const response = await fetch(`${BASE_URL}/recoverPassword`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email })
    });
    return await response.text();
  } catch (error) {
    console.error("Error recovering password:", error);
    return "Error: Unable to connect to the server";
  }
};

// ✅ Now properly exporting all three methods
export const authApi = { signUp, signIn, recoverPassword };
