## Sprint 2 : Develop SPA Using Angular Components

### This sprint has 5 demos

**Demo 1: Identify Components in an SPA**

Open SPA like Pinterest (https://www.pinterest.com/ ) and identify various components inside the single page.

[**Demo 2 :: Create an Angular Hello World App using CLI**](Demo-2-Hello-World)

Create a Hello world application using the CLI command and execute it to see the app running in the browser with the default port number.​

- Create a new Angular application with the following command: ng new hello-world
- Navigate to the “workspace” folder with the following command: cd hello-world
- Explore the following files and folders created by the Angular CLI:
- `node_modules`: Contains third-party libraries and files, which are bundled into the project
- `src`: Contains the main code files related to the Angular application
- `app`: Contains the modules and components of the Angular application
- `assets`: Is a placeholder for resource files used in the application such as images, icons, etc.
- `package.json`: Is the npm configuration file containing all the dependencies and can be used to modify dependency versions as required
- `angular.json`: Defines the structure of the application, includes the settings associated with the application, and can be used to specify the environments—development, production, etc.
- `tsconfig.json`: Is a TypeScript compiler configuration file that is responsible for compiling TypeScript to JavaScript for the browser to understand 
- Delete the default code from app.component.html and add the following code snippet: 
    ```html
    <h1>Hello World!!</h1>
    ```
 Run the Angular application using the following command: `ng serve --open`

[**Demo 3 :: Create Fruit Fantasy App**](Demo-3-Fruit-Fantasy)

Create a new application called Fruit Fantasy app using CLI commands. Create a Header component to display the header for Fruit Fantasy app.​
 Create a new Angular application using the following command: ng new fruit-fantasy
- Create a “Header” component using the following Angular CLI command: `ng generate component header` or `ng g c header`
- Follow the listed steps for the Application component:
    1. Declare a property “title” in the .ts file with the value “Fresh Fruits of The Day”.
title = 'Fresh Fruits of The Day'
    2. Add the selector of the “Header” component to the .html file and display the title using interpolation {{}}.
        ```html
                <app-header></app-header>
                <p>{{title}} </p>
                ```
    3. Add the following CSS class to the .css file to style the application component:
        ```css
        p { 
            margin-top: 100px; 
            margin-left: 500px; 
            font-size: 20px; 
            font-family: 'Times New Roman', Times, serif; 
            font-weight: bold; 
        }
        ``` 
- Follow the listed steps for the “Header” component:
    1. Add the following code snippet to the .html file:
        ```html
        <div>
        <h1>Fruit Fantasy</h1>
        </div>
        ```
    2. Add the following CSS class to the .css file to style the “Header” component:
        ```css
        div 
        { 
            color:white; 
            background-color:#673AB7; 
            font-size: 10px; 
            padding:3px; 
        } 
        div h1{ 
            margin-left: 10px; 
        } 
        ```
- Run the Angular application using the following command: `ng serve --open` 


[**Demo 4 :: Display Fruit List in Fruit Fantasy App**](Demo-4-Fruit-Fantasy-Display-Fruits)

Modify the app component of fruit fantasy app to display the list of fruits.​ Create a model class called Fruit and an array to store lists of fruits.​ Use property binding and ngFor directive to iterate through the list of fruits in the app component template.

- Create the models Fruit in fruit.ts and an array FRUITS to store lists of fruits in fruit-list.ts inside the folder called “model”.  

    ```ts
    export type Fruit = { 
        id? number; 
        name? string; 
        price? number; 
        unit? string; 
        imageURL?: string; 
    } 
    ```
    ```ts
    export const FRUITS: Fruit[] = [ 
            {id: 1, name: 'apple', price: 2, unit:"1"}, 
            {id: 2, name: 'apricot', price: 3, unit:"1"}, 
            {id: 3, name: 'banana', price: 1, unit:"2"}, 
            {id: 4, name: 'dragonfruit', price: 2, unit:"1"}, 
            {id: 5, name: 'jackfruit', price: 4, unit:"1"}, 
            {id: 6, name: 'orange', price: 3, unit:"2"}, 
            {id: 7, name: 'pineapple', price: 2, unit:"1"}  
        ]; 
    ```
- Add the following code in App Component:  
    - In .ts file, create fruits array property and assign the FRUITS array to it which is exported from models/fruits.ts file. 

    ```ts
    fruits = FRUITS; 
    ```
- In .html, use *ngFor directive to render one instance each for the fruit traversed. 
    ```html
    <div class="card" *ngFor="let fruit of fruits"> 
        <img src="../../assets/fruits/{{fruit.name}}.png" alt={{fruit.name}}> 
            <div> 
                Name:<span>{{fruit.name}} </span> 
                Price:<span>${{fruit.price}} </span> 
        </div> 
        </div> 
    ```
- In .css file, add the following CSS class to style. 
    ```css
    p { 
        margin-top: 100px; 
        margin-left: 500px; 
        font-size: 20px; 
        font-family: 'Times New Roman', Times, serif; 
        font-weight: bold; 
    } 
    .card { 
        width: 120px; 
        border: 3px solid #fff; 
        padding: 40px; 
        height: 150px; 
        float: left; 
    } 
    img { 
        width: 100px; 
        height: 100px; 
        border-radius: 10px; 
        width: auto; 
    } 
    div { 
        display: inline; 
        padding: 3px; 
        margin: 10px; 
        border-radius: 5px; 
        max-height: 100px; 
        height: 100%; 
        width: 50px; 
    } 
    ```

- Run the angular app by command `ng serve --open`. 

[**Demo 5 :: Search Fruits in Fruit Fantasy App**](Demo-5-Fruit-Fantasy-Search-Fruits)

Add search functionality to the Fruit Fantasy app which allows users to search fruits.​ ​Use ngModel to establish binding between the component and the template.

- Create Fruit-Manager component by using Angular CLI command `ng generate component fruit-manager` or `ng g c fruit-manager`. 
- Modify app component and add selector of Fruit-Manager component. 
- Follow below steps in Fruit-Manager Component:  
    - In .html,  
    - Import `FormsModule` in `app.module.ts` from `@angular/forms` to use `ngModel`.
    - Design search layout with text box and two buttons - Go and Clear. 
    - Implement 2-way binding using ngModel between search text box and property fruitName. 
        ```html
        <div class="card" *ngFor="let fruit of fruits"> 
            <img src="../../assets/fruits/{{fruit.name}}.png" alt={{fruit.name}}> 
            <div> 
                Name:<span>{{fruit.name}} </span> 
                Price:<span>{{fruit.price}} $</span> 
            </div> 
        </div> 
        <div style="display:flex; justify-content:end;margin-left:1200px;"> 
            <input type="text" placeholder="Search Fruit" [(ngModel)]="searchText" /> 
            <button (click)="search()" type="button">Go</button> 
            <button (click)="reset()" type="button">Clear</button> 
        </div> 
        ```
    - In .ts file, 
    - create fruits array property and to it assign the `FRUITS` array exported from `models/fruits.ts` file. 
        ```ts
        fruits = FRUITS; 
        ```
    - Define two functions `search()` and `reset()` . 
    - When the Go button is clicked, it will invoke `search()` method to filter the fruit from fruit-list. 
        ```ts
        search() { 
            this.fruits = this.temp.filter((result) => 
            result?.name?.startsWith(this.searchText) 
            ); 
            if (this.fruits.length == 0) { 
            this.displayNoRecords = true; 
            } 
        } 
        ```
    - When the Clear button is clicked , it will invoke `reset()` method to clear all fields. 
        ```ts
        reset() { 
            this.searchText = ''; 
            this.fruits = [...this.temp]; 
            this.displayNoRecords = false; 
        } 
        ```
    - In .css file, add the following CSS class to style. 
        ```css
        .card { 
            width: 120px; 
            border: 3px solid #fff; 
            padding: 40px; 
            height: 150px; 
            float: left; 
        } 
        img { 
            width: 100px; 
            height: 100px; 
            border-radius: 10px; 
            width: auto; 
        } 
        div { 
            display: inline; 
            padding: 3px; 
            margin: 10px; 
            margin-top: 60px; 
            border-radius: 5px; 
            max-height: 100px; 
            height: 100%; 
            width: 50px; 
        } 
        input[type=text] { 
            border: none; 
            border-bottom: 2px solid; 
        } 
        button { 
            padding: 10px; 
            background-color: #a61e4d; 
            color: #efefef; 
            border: none; 
            text-align: center; 
            padding: 10px 20px; 
            border-radius: 25px; 
            margin: 5px; 
        } 
        ```
    - Run the angular app by command `ng serve --open`. 