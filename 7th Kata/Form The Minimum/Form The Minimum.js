function minValue(values) {
  return Number([...new Set(values)].sort().join(""));
}
