export function formatTime (timeStamp, fmt) {
  const time = timeStamp.slice(0, 10)
  time.replace('-', fmt)
  return time
}
