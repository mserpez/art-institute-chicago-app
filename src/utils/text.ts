export function cutText(text: string, maxLen: number) {
  if (text.length > maxLen) {
    return text.slice(0, maxLen) + '...';
  }

  return text;
}
