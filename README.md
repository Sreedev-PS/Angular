# Angular InjectionToken Demo
This project is a simple Angular application demonstrating the use of InjectionToken to inject custom data into a component using Angular's dependency injection system.

## 🧠 What is an InjectionToken?
An InjectionToken is a powerful feature in Angular used to create dependency injection tokens for values that don't have a runtime representation (like interfaces or objects). It allows injecting primitive values or non-class-based dependencies safely.

### 📁 Project Structure
```bash
src/
├── app/
│   ├── tokenfolder/
│   │   └── tokenFile.ts       // InjectionToken defined here
│   ├── app.component.ts       // Token injected here
│   ├── app.component.html     // Data displayed here
│   └── app.module.ts          // Token provided here
```

### 🔧 How It Works
##### Create Token
A new InjectionToken is created in tokenFile.ts:

```ts
export const DataToken = new InjectionToken<any>('Token_Name01');
```
##### Provide Value
The token is configured in the AppModule with a useValue provider:

```ts
providers: [
  {
    provide: DataToken,
    useValue: {
      name: 'My Name is Developer.',
      age: 25
    }
  }
]
```
##### Inject Token
The value is injected into the root component using @Inject:

```ts
constructor(@Inject(DataToken) public data: any) {}
```
##### Display Data
The injected values are rendered in the template:

```html
<pre>
  Name : {{ data.name }}
  Age  : {{ data.age }}
</pre>
```
## 📌 Output Preview
```pgsql
This is the Injection Token Value that I set in providers array
--------------------------------------------------------------
  Name : My Name is Developer.
  Age  : 25
```
### 📝 Author
Created by Sreedev P S while learning Angular's InjectionToken.
