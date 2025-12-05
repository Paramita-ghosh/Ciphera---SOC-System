export const BASE_URL = "http://localhost:5000";

export const API_PATHS = {
    AUTH: {
        REGISTER: "/api/auth/register",   // Register Admin or Analyst
        LOGIN: "/api/auth/login",         // Login (returns token)
        PROFILE: "/api/auth/profile",     // Get logged-in user details
    },

    LOGS: {
        GENERATE: "/api/logs/generate",   // Auto-generate log & send to Python engine
        GET_ALL: "/api/logs",             // Get all logs
    },

    INCIDENTS: {
        CREATE: "/api/incidents",                     // Manually create incident
        ASSIGN: "/api/incidents/assign",              // Assign incident to analyst
        GET_ALL: "/api/incidents",                    // Admin: all incidents
        MY_INCIDENTS: "/api/incidents/my-incidents",  // Analyst: incidents assigned to them
        UPDATE: (id) => `/api/incidents/${id}`,        // Update incident
    },

    ANALYSTS: {
        CREATE: "/api/analysts",           // Admin: create analyst
        GET_ALL: "/api/analysts",          // Admin: get all analysts
        DELETE: (id) => `/api/analysts/${id}`, // Admin: delete analyst
    },
};