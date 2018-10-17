function defaultDecorator(source: string, index: number) {
  return `${source} (${index})`;
}

export function dupliname(source: string, names: string[], decorator = defaultDecorator) {
  let s = source;
  let i = 1;
  while (names.indexOf(s) !== -1) {
    s = decorator(source, i);
    i++;
  }
  return s;
}
