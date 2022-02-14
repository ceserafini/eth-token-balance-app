export class InternalException extends Error {
  constructor(
    message: string,
    public cause: Error|null = null,
  ) {
    super(message);
  }
}