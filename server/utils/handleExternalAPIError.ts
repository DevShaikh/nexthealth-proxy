import ApiError from "./ApiError";

interface ExternalAPIErrorResponse {
  code: boolean;
  description: string | null;
  data: unknown;
  error: string[];
}

interface ExternalAPIError {
  response: {
    data: ExternalAPIErrorResponse;
    status: number;
  };
}

export function handleExternalAPIError(error: unknown, fallbackMessage: string): never {
  if (
    typeof error === "object" &&
    error !== null &&
    "response" in error &&
    typeof (error as Record<string, unknown>).response === "object"
  ) {
    const err = error as ExternalAPIError;
    const message = err.response.data?.error?.[0] || fallbackMessage;
    throw new ApiError(
      err.response.status,
      message,
      true,
      undefined,
      err.response.data?.error || [fallbackMessage]
    );
  }

  const message = error instanceof Error ? error.message : fallbackMessage;

  throw new ApiError(500, message, true, undefined, [message]);
}
