function updateProfile(name) {
    try {
        console.log("Updating profile...");

        if (!name) {
            throw new Error("Name cannot be empty ❌");
        }

        console.log("Profile updated successfully ✅");

    } catch (error) {
        console.log("Error:", error.message);

    } finally {
        
        console.log("Closing database connection 🔒");
    }
}

updateProfile("Ed");   

updateProfile("");      