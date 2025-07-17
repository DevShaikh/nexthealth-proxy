# NextHealth Proxy

This is a lightweight backend service that acts as a proxy between your frontend and the [NextHealth](https://www.nexthealth.com/) API. It forwards authenticated requests, handles response formatting (if needed), and provides a simple abstraction layer.

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
