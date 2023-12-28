export function getContentItemDate(
  updatedAt: Date,
  publishedAt?: Date
): string {
  if (
    publishedAt === null ||
    typeof publishedAt === "undefined" ||
    publishedAt < updatedAt
  ) {
    return getDateTimeFormat(updatedAt);
  } else {
    return getDateTimeFormat(publishedAt);
  }
}

export function getDateTimeFormat(
  dateTime: Date,
  options?: Intl.DateTimeFormatOptions
): string {
  return new Intl.DateTimeFormat(
    "en-GB",
    options ?? { dateStyle: "full" }
  ).format(dateTime);
}
