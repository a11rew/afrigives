const z = require('zod');
const path = require('path');
const envPath = path.resolve(__dirname, `.env`);

require('dotenv').config({
  path: envPath,
});

const envSchema = z.object({
  CLERK_PUBLISHABLE_KEY: z.string(),
});

const parseResult = envSchema.safeParse(process.env);

if (parseResult.success === false) {
  console.error(
    '❌ Invalid environment variables:',
    parseResult.error.flatten().fieldErrors,

    `\n❌ Missing variables in .env file, Make sure all required variables are defined in the .env file.`
  );
  throw new Error(
    'Invalid environment variables, Check terminal for more details '
  );
}

const Env = parseResult.data;

module.exports = Env;
