export function toQueryParams(params: Record<string, any>): string {
  const searchParams = new URLSearchParams();

  for (const [key, value] of Object.entries(params)) {
    if (Array.isArray(value)) {
      value.forEach((val) => {
        searchParams.append(key, String(val));
      });
    } else if (value !== undefined && value !== null) {
      searchParams.append(key, String(value));
    }
  }

  return `?${searchParams.toString()}`;
}
