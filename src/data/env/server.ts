import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {
    DB_PASSWORD: z.string().min(1),
    DB_USER: z.string().min(1),
    DB_NAME: z.string().min(1),
    DB_HOST: z.string().min(1),
    // Removidas as variáveis relacionadas a OAuth
    // DISCORD_CLIENT_ID: z.string().min(1),
    // DISCORD_CLIENT_SECRET: z.string().min(1),
    // OAUTH_REDIRECT_URL_BASE: z.string().url(),
    // GITHUB_CLIENT_ID: z.string().min(1),
    // GITHUB_CLIENT_SECRET: z.string().min(1),
    JWT_SECRET: z.string().min(32).default("default_secret_key_change_in_production"),
  },
  experimental__runtimeEnv: process.env,
  emptyStringAsUndefined: true,
})