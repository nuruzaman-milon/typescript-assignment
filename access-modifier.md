# Access Modifiers in TypeScript: public, private, protected & readonly

In OOP, **encapsulation** means controlling who can access our class data. TypeScript does this with access modifiers.

## 1. `public` (default)

Accessible from anywhere: inside the class, subclasses, and outside.

```ts
class User {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const user = new User("Milon");
console.log(user.name); // "Milon"
```

## 2. `private`

Accessible **only inside the same class**. Not from subclasses, not from outside.

```ts
class BankAccount {
  private balance = 0;

  deposit(amount: number) {
    this.balance += amount; // allowed
  }
}

const acc = new BankAccount();
acc.deposit(500);
// acc.balance; Error: 'balance' is private
```

> Need true runtime privacy? Use JavaScript's `#balance` syntax. TS `private` is checked only at compile time.

## 3. `protected`

Like `private`, but **subclasses can access it**.

```ts
class Employee {
  protected salary: number;
  constructor(salary: number) {
    this.salary = salary;
  }
}

class Manager extends Employee {
  getBonus() {
    return this.salary * 0.2; // ✅ allowed in subclass
  }
}

const manager = new Manager(50000);
// m.salary; Error: 'salary' is protected
```

## 4. `readonly`

The value can be set **once** (at declaration or in the constructor), then never changed.

```ts
class Product {
  readonly id: string;
  constructor(id: string) {
    this.id = id;
  }
}

const prod = new Product("P-101");
// p.id = "P-102"; Error: read-only property
```

we can combine it: `private readonly apiKey: string`.

## Parameter Properties

A shortcut that declares and assigns in one line:

```ts
class Order {
  constructor(
    public customer: string,
    private total: number,
    readonly orderId: string
  ) {}
}
```

## Conclusion
Access modifiers help us write safer and cleaner classes by controlling how data is accessed and changed:

- `public`: open to everyone
- `private`: only inside the class
- `protected`: inside the class and its subclasses
- `readonly`: can be set once, never changed
