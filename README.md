# Workers Vercel AI Starter

A chat application powered by Google Gemini AI, the Vercel AI SDK, and Cloudflare Workers. It provides a simple interface for interacting with an AI model, rendered with Shadcn UI components and Tailwind CSS.

## Deploy

First, use the button below to deploy this project to Cloudflare Workers.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/kristianfreeman/workers-vercel-ai-starter)

**IMPORTANT:** Once deployed, access the newly deployed application in your dashboard and set the `GOOGLE_GENERATIVE_AI_API_KEY` environment variable to your Gemini API key ([instructions](https://ai.google.dev/gemini-api/docs/api-key)). After redeploying the application, the API endpoint will automatically use this key and interact with the Gemini API.
