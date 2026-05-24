function copy(value, hash = new Map()) {
  if (value === null || typeof value !== "object") {
    return value;
  }
    if (value instanceof Date) {
    return new Date(value.getTime());
  }
    if (hash.has(value)) {
    return hash.get(value);
  }

  const clone = Array.isArray(value) ? [] : {};

  hash.set(value, clone);

  for (const key of Reflect.ownKeys(value)) {
    clone[key] = copy(value[key], hash);
  }


  return clone;
}

module.exports = { copy };