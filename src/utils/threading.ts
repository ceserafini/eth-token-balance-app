import TimeoutException from "../exceptions/TimeOutException";

export function waitingReject(errorMessage, millis): Promise<any> {
  return new Promise((_resolve, reject) => {
    setTimeout(() => reject(new TimeoutException(errorMessage)), millis);
  })
}