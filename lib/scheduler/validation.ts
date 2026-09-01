// Pure check, no UI of its own — callers render their own messaging based on the result.
export function isLessonLimitExceeded(lessonsUsed: number, lessonsAvailable: number): boolean {
  return lessonsUsed >= lessonsAvailable;
}
