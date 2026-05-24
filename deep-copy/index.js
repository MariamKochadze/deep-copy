function copy(value, hash = new Map()) {
  if (value === null || typeof value !== "object") {
    return value;
  }
    if (value instanceof Date) {
    return new Date(value.getTime());
  }


  return clone;
}