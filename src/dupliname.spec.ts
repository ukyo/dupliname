import { dupliname } from "./dupliname";

test("pass through", () => {
  expect(dupliname("hello", ["world"])).toBe("hello");
});

test("create a duplicated name", () => {
  expect(dupliname("hello", ["hello"])).toBe("hello (1)");
  expect(dupliname("hello", ["hello", "hello (1)"])).toBe("hello (2)");
});

test("create a custom duplicated name", () => {
  const fn = (s: string, i: number) => {
    const body = s.split(".");
    const ext = body.pop();
    return `${body.join(".")} - Copy ${i}.${ext}`;
  };
  expect(dupliname("hello.txt", ["hello.txt"], fn)).toBe("hello - Copy 1.txt");
  expect(dupliname("hello.txt", ["hello.txt", "hello - Copy 1.txt"], fn)).toBe(
    "hello - Copy 2.txt",
  );
});
