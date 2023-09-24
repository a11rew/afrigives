import { isClerkAPIResponseError } from '@clerk/clerk-expo';

export function buildClerkErrorMessage(error: unknown) {
  if (isClerkAPIResponseError(error)) {
    const compositeErrorMessage = error.errors
      .map((e) => e.message)
      .join(', ')
      // Capitalize first letter
      .replace(/^\w/, (c) => c.toUpperCase());

    return compositeErrorMessage;
  } else {
    return 'Something went wrong. Please try again.';
  }
}
