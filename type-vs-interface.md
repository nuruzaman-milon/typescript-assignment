# Type vs Interface in TypeScript: What’s the Difference?

TypeScript provides two different ways to define the shape of data: **Type Aliases (`type`)** and **Interfaces (`interface`)**.

Both help developers define object structures, improve type safety, and make code easier to maintain. However, they have some important differences.

In this blog, we’ll explore their syntax, key differences, and when to use each one.

## 1. What is a Type Alias?

A type alias allows us to give a name to any type in TypeScript. It can represent primitive types, object types, unions, intersections, tuples, and more.

### Basic Syntax

```ts
type User = {
  name: string;
  age: number;
  email: string;
};

const user: User = {
  name: "Milon",
  age: 27,
  email: "njmilon1@gmail.com",
};
```

Here, `User` is a custom type representing an object with three properties.

### Type Alias with Primitive Types

Unlike interfaces, type aliases can also define primitive types.

```ts
type UserId = string;
type Age = number;

const userId: UserId = "user-101";
const age: Age = 27;
```

### Type Alias with Union Types

A type alias can define a value that accepts multiple possible types.

```ts
type Status = "active" | "inactive" | "pending";

let userStatus: Status = "active";
```

### Type Alias with Intersection Types

We can combine multiple types using the intersection (`&`) operator.

```ts
type Person = {
  name: string;
};

type Employee = {
  employeeId: number;
};

type Staff = Person & Employee;

const staff: Staff = {
  name: "Milon",
  employeeId: 101,
};
```

## 2. What is an Interface?

An interface defines the structure or contract that an object must follow. It is commonly used to describe object properties and methods.

### Basic Syntax

```ts
interface User {
  name: string;
  age: number;
  email: string;
}

const user: User = {
  name: "Milon",
  age: 27,
  email: "njmilon1@gmail.com",
};
```

The object must satisfy the structure defined by the `User` interface.

### Interface with Optional Properties

We can use `?` to define optional properties.

```ts
interface User {
  name: string;
  age: number;
  phone?: string;
}
```

The `phone` property is optional, so an object can be created without it.

### Interface with Methods

Interfaces can also define method signatures.

```ts
interface Calculator {
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
}

const calculator: Calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
};
```

## 3. Extending Types and Interfaces

Both types and interfaces support ways to combine existing structures, but their syntax differs.

### Interface Extension

An interface can extend another interface using the `extends` keyword.

```ts
interface Person {
  name: string;
}

interface Employee extends Person {
  employeeId: number;
}

const employee: Employee = {
  name: "Milon",
  employeeId: 101,
};
```

### Type Intersection

Type aliases use the intersection (`&`) operator to combine existing types.

```ts
type Person = {
  name: string;
};

type Employee = {
  employeeId: number;
};

type Staff = Person & Employee;
```

Both approaches allow us to combine object structures.

## 4. Declaration Merging

One important difference between interfaces and type aliases is declaration merging.

### Interface Declaration Merging

When multiple interfaces have the same name, TypeScript automatically combines their declarations.

```ts
interface User {
  name: string;
}

interface User {
  age: number;
}

const user: User = {
  name: "Milon",
  age: 27,
};
```

The resulting `User` interface contains both `name` and `age`.

### Type Alias Does Not Support Declaration Merging

we cannot declare the same type alias more than once in the same scope.

```ts
type User = {
  name: string;
};

// Error: Duplicate identifier 'User'
type User = {
  age: number;
};
```

If we need to combine types, use intersection types instead.


## 5. When Should we Use Type or Interface?

Both are useful, and neither is universally better.

**Use Interface when:**
- Defining object structures.
- Creating contracts for classes.
- Designing public APIs or library structures.
- we need declaration merging.
- we want to extend object structures using `extends`.

**Use Type when:**
- Defining union or intersection types.
- Creating primitive type aliases.
- Defining tuples.
- Working with complex type compositions.
- Using mapped or conditional types.

## 6. Conclusion

Type aliases and interfaces are both essential features of TypeScript. They overlap significantly when defining object structures, but each has capabilities that make it useful in different situations.

A practical guideline is to use **interface for object contracts and extensible object structures**, and **type for unions, intersections, tuples, and more complex type definitions**.

Ultimately, consistency across our project is more important than choosing one over the other in every situation.