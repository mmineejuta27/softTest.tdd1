const greet = require('./greet')
test('Write a method greet(name)', () => {
    expect(greet("Bob"));
}) 

test('when name is "Bob", the method should return a string "Hello, Bob.".', () => {
    expect(greet("Bob")).toBe("Hello, Bob.");
}) 

test('when name is "Mine", the method should return a string "Hello, Mine.".', () => {
    expect(greet("Mine")).toBe("Hello, Mine.");
})

test('null, then the method should return the string "Hello, my friend."', () => {
    expect(greet(null)).toBe("Hello, my friend.");
})

test('UpperCase return "HELLO, JEENY"', () => {
    expect(greet("JEENY")).toBe("HELLO, JEENY");
})

test('Array two names return Hello Jill and Jane', () => {
    expect(greet(["Jill", "Jane"])).toBe("Hello Jill and Jane");
})

test('more than two name return "Hello, Amy, Brian, and Charlotte."', () => {
    expect(greet(["Amy", "Brian", "Charlotte"])).toBe("Hello, Amy, Brian, and Charlotte.");
})