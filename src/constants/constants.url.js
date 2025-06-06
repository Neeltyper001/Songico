export const SUCCESS_REDIRECT = String(`${import.meta.env.VITE_DOMAIN}/redirect` || "")
export const FAILURE_REDIRECT = String(`${import.meta.env.VITE_DOMAIN}/redirect/oauth2/failure` || "")
export const RECOVERY_REDIRECT = String(`${import.meta.env.VITE_DOMAIN}/redirect/recovery` || "")
export const NEW_PASSWORD = String(`${import.meta.env.VITE_DOMAIN}/redirect/new-password?routetoken=${import.meta.env.VITE_ROUTE_SECRET}` || "")
export const DEFAULT_SONG_ICON_IMAGE_URL = "https://fra.cloud.appwrite.io/v1/storage/buckets/682c9377002a7f86e16e/files/683871990003408f87b4/view?project=66f0f918000f44f949a0&mode=admin"