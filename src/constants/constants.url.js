export const SUCCESS_REDIRECT = String(`${import.meta.env.VITE_DOMAIN}/dashboard` || "")
export const FAILURE_REDIRECT = String(`${import.meta.env.VITE_DOMAIN}/redirect/oauth2/failure` || "")
export const RECOVERY_REDIRECT = String(`${import.meta.env.VITE_DOMAIN}/redirect/recovery` || "")
export const NEW_PASSWORD = String(`${import.meta.env.VITE_DOMAIN}/redirect/new-password?routetoken=${import.meta.env.VITE_ROUTE_SECRET}` || "")
