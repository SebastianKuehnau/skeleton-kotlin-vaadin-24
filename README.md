# Project Base for Vaadin, Kotlin and Spring Boot

This project can be used as a starting point to create your own Vaadin application with Spring Boot and Kotlin. It implements examples of views with Hilla and Flow.

Uses [Karibu-DSL](https://github.com/mvysny/karibu-dsl).

### Null-Safety: Kotlin and TypeScript

Kotlin provides strict null-safety by distinguishing between `String` (non-nullable) and `String?` (nullable). TypeScript has a similar system but requires explicit declaration of nullable types, such as `string | null`. When generating TypeScript types with Hilla from Kotlin, nullability information may be lost; for example, `String?` is often represented as `string` instead of `string | null`.

For the moment there are no proper solutions or workarounds and the values needs to be checked the generated types in TypeScript and add hoops manually. 

## Running the Application
There are two ways to run the application :  using `mvn spring-boot:run` or by running the `Application` class directly from your IDE.

You can use any IDE of your preference,but we suggest Eclipse or Intellij IDEA.
Below are the configuration details to start the project using a `spring-boot:run` command. Both Eclipse and Intellij IDEA are covered.

#### Eclipse
- Right click on a project folder and select `Run As` --> `Maven build..` . After that a configuration window is opened.
- In the window set the value of the **Goals** field to `spring-boot:run` 
- You can optionally select `Skip tests` checkbox
- All the other settings can be left to default

Once configurations are set clicking `Run` will start the application

#### Intellij IDEA
- On the right side of the window, select Maven --> Plugins--> `spring-boot` --> `spring-boot:run` goal
- Optionally, you can disable tests by clicking on a `Skip Tests mode` blue button.

Clicking on the green run button will start the application.

After the application has started, you can view your it at http://localhost:8080/ in your browser.


If you want to run the application locally in the production mode, use `spring-boot:run -Pproduction` command instead.
### Running Integration Tests

Integration tests are implemented using [Vaadin TestBench](https://vaadin.com/testbench). The tests take a few minutes to run and are therefore included in a separate Maven profile. We recommend running tests with a production build to minimize the chance of development time toolchains affecting test stability. To run the tests using Google Chrome, execute

`mvn verify -Pit,production`

and make sure you have a valid TestBench license installed.

Profile `it` adds the following parameters to run integration tests:
```sh
-Dwebdriver.chrome.driver=path_to_driver
-Dcom.vaadin.testbench.Parameters.runLocally=chrome
```

If you would like to run a separate test make sure you have added these parameters to VM Options of JUnit run configuration

### Live Reload (optional)

With live reload, you can see the results of your code changes immediately. 
When you edit your Java code and recompile it, the application changes will be automatically reloaded and the browser is refreshed.
This is done by leveraging [Spring Boot Developer Tools](https://docs.spring.io/spring-boot/docs/2.1.5.RELEASE/reference/html/using-boot-devtools.html). 
To be able to see the changes in the browser tab, the page still needs to be reloaded. 
That can also  be automated via a LiveReload browser extension. 
One such extension for Google Chrome is [LiveReload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei). 
In Firefox, [LiveReload - Web extension](https://addons.mozilla.org/en-US/firefox/addon/livereload-web-extension/) can be used.
You can find such similar extensions for other major browsers too.
These extensions add an icon to your browser next to the address bar.
To enable the extension, you should click that icon after you opened your application. 

You can find more information at [Live Reload in Spring Boot Applications](https://vaadin.com/docs/flow/workflow/tutorial-spring-boot-live-reload.html) document.

## Structure

Vaadin web applications are full-stack and include both client-side and server-side code in the same project.

| Directory                                                          | Description                                 |
|:-------------------------------------------------------------------|:--------------------------------------------|
| `src/main/frontend/`                                               | Client-side source directory                |
| &nbsp;&nbsp;&nbsp;&nbsp;`index.html`                               | HTML template                               |
| &nbsp;&nbsp;&nbsp;&nbsp;`views/`                                   | UI views Web Components (TypeScript / HTML) |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`@layout.ts`       | Main layout Web Component (optional)        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`@index.tsx`       | Main Hilla View                             |
| &nbsp;&nbsp;&nbsp;&nbsp;`themes/`                                  | Styles directory (CSS)                      |
| `src/main/java/<groupId>/`                                         | Server-side source directory                |
| &nbsp;&nbsp;&nbsp;&nbsp;`Application.kt`                           | Application entrypoint                      |
| &nbsp;&nbsp;&nbsp;&nbsp;`MainView.kt`                              | Main Flow View                              |
| &nbsp;&nbsp;&nbsp;&nbsp;`endpoints/`                               | endpoint source directory                   |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`KotlinService.kt` | Server-side endpoint                        |

## Useful links

- base documentation about Kotlin in Vaadin is here https://vaadin.com/kotlin
- example project can be found here https://github.com/mvysny
