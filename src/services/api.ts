import axios from "axios";

const baseUrl = "https://arad-test-app.aradbassirat18.workers.dev";

export async function submitLogin(username: string, password: string) {
    return await axios.post(`${baseUrl}/login`,
        JSON.stringify({ username, password }), {
            headers: { "Content-Type": "application/json" },
        }
    );
};

