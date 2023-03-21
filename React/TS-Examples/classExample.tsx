import React from 'react';

class Constructor {
  public field: number = 123;
  private privateField: number = 123;

  public constructor(arg: number) {
    this.field = arg;
  }

  public publicMethod():number {
    return this.field;
  }

  protected protectedMethod():number {
    return this.field + 10;
  }

  private privateMethod():number {
    return this.privateField + 30;
  }
}

const instance = new Constructor(123);

class Child extends Constructor {
  public childMethod() {
  }

  protected protectedMethod(): number {
    return super.protectedMethod();
  }

  public publicMethod(): number {
    return super.publicMethod();
  }
}

abstract class AbstractClass {
  public abstract abstractField: number;

  public abstract abstractMethod(): number;

  protected protectedMethod() {
    return this.abstractField;
  }
}

class NewChild extends AbstractClass {
  public abstractField: number = 123;

  public abstractMethod(): number {
    return this.protectedMethod();
  }
}

interface MyInterface<T> {
  field: T;

  method(): string;
}

class NewClass<T> implements MyInterface<T> {
  public field: T;

  constructor(f: T) {
    this.field = f;
  }
  method(): string {
    throw new Error("Method not implemented.");
  }

}

class MyComponent extends React.Component<{ prop1: number}, { state1: string }> {
  constructor(props: { prop1: number}) {
    super(props);
    this.state = {
      state1: '123'
    }
  }
  public render() {
    return (
      <div>{this.props.prop1}</div>
    )
  }
}
