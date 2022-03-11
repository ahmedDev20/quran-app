export function time12Hour(): { time: string; ampm: string } {
  const now = new Date()
    .toLocaleTimeString('en-US', {
      hour12: true,
      hour: 'numeric',
      minute: 'numeric',
    })
    .split(' ');

  return {
    time: now[0],
    ampm: now[1],
  };
}
