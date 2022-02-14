export default class TimeoutException extends Error {
  constructor(
    message: string,
    public trowable: Error|null = null,
  ) {
    super(message);
  }
}