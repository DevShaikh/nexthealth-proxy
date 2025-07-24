# NextHealth Proxy

This is a lightweight backend service that acts as a proxy between your frontend and the [NextHealth](https://www.nexhealth.com/) API. It forwards authenticated requests, handles response formatting (if needed), and provides a simple abstraction layer.

## 🧩 Features

- Securely proxy requests to the NextHealth API
- Handle authentication headers or tokens
- Hide API keys/secrets from the frontend
- Optionally cache or transform responses

## 🛠️ Tech Stack

- Node.js
- Express.js (or your backend framework)
- dotenv for environment variable management
- Axios or fetch for HTTP requests

## 📦 Setup

1. Clone the repository:

```bash
git clone https://github.com/yourusername/nexthealth-proxy.git
cd nexthealth-proxy
```

## 🛠 Environment Variables

The application requires the following environment variables. Create a `.env` file in the root of the project (you can start from the provided `.env.example`).

### Required

| Variable                | Description                                                        |
| ----------------------- | ------------------------------------------------------------------ |
| `NEXT_HEALTH_API_URL`   | The base URL of the Next Health external API.                      |
| `NEXT_HEALTH_API_TOKEN` | Bearer token used to authenticate requests to the Next Health API. |

### Optional

| Variable | Description                                                                |
| -------- | -------------------------------------------------------------------------- |
| `PORT`   | Port on which the server runs. Required only in development or Docker/etc. |

### 🔐 Example `.env`

```env
PORT=3000
NEXT_HEALTH_API_URL=https://api.nexthealth.com/v1
NEXT_HEALTH_API_TOKEN=your-token-here

```
