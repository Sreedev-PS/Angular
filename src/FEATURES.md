Feature reference for this workspace

- Dashboard (route: "" / "dashboard")
  - Description: Central landing page that lists and links to every feature in the app.
  - Key file: src/app/features/dashboard/pages/dashboard/dashboard.ts

- Signal DOM View (route: "signal-dom-view")
  - Description: Live signal-driven UI that demonstrates global signal state and a derived-signal component. Contains controls to increment shared signal state.
  - Key file: src/app/features/signal-component/pages/signal-dom-view/signal-dom-view.ts

- Amazone Dashboard (route: "amazone-dashboard")
  - Description: Example dashboard page that stores a user detail via the shared UserDetailsService and navigates to the Flipkart demo.
  - Key file: src/app/features/dashboard_1/pages/dashboard-amazone/dashboard-amazone.ts

- Flipkart Dashboard (route: "page2")
  - Description: Complementary demo page that reads the stored user details from UserDetailsService and displays them.
  - Key file: src/app/features/dashboard_2/pages/dashboard-flipkart/dashboard-flipkart.ts

- Structural Directives (route: "directives")
  - Description: Demonstrates custom structural directives that change template structure at runtime.
  - Key file: src/app/features/structural directives/pages/structural-directive/structural-directive.ts

- Attribute Directive (route: "attr-directive")
  - Description: Shows custom attribute directives (e.g., AttColor) used to change styling/behavior of host elements.
  - Key file: src/app/features/Attribute directive/pages/att-compo/att-compo.ts

- Host Binding & Listeners (route: "hLBAD")
  - Description: Demonstrates `@HostBinding` and `@HostListener` to modify host element properties and react to events.
  - Key file: src/app/features/Host-LB-att-dircetive/pages/h-lb-att-directive/h-lb-att-directive.ts

- Pipes (route: "pipes")
  - Description: Shows custom pipe usage for transforming or formatting data in templates.
  - Key file: src/app/features/pipes-featutre/pages/customepipe/customepipe.ts

- Injection Token (route: "injection-token")
  - Description: Example of Angular DI using `InjectionToken` for environment values and typed objects.
  - Key file: src/app/features/injection_token_service/pages/injection-token/injection-token.ts

- Router Feature (route: "router")
  - Description: Playground for router APIs: route params, query params, programmatic navigation, nested routes and router-outlets.
  - Key file: src/app/features/Router-feature/pages/router-page/router-page.ts

- Guards (route: "guard")
  - Description: Demonstrates route guards (canActivate/canDeactivate) with a `guardService` toggling authentication-like state.
  - Key file: src/app/features/guards feature/pages/guard-component/guard-component.ts

- Preloading (route: "preload")
  - Description: Sample page for route preloading strategies (placeholder component — useful to test preloading).
  - Key file: src/app/features/preload-feature/pages/preload/preload.ts

- Forms — Template-Driven (route: "form/template")
  - Description: Basic template-driven form example with simple validation and submit handling.
  - Key file: src/app/features/template-form/pages/templateformcomponent/templateformcomponent.ts

- Forms — Reactive (route: "form/reactive")
  - Description: Reactive form built with FormBuilder and Validators; demonstrates model-driven validation and submission.
  - Key file: src/app/features/reactive-from-featute/pages/reactiveform-component/reactiveform-component.ts

- Forms — Dynamic (route: "form/dynamic")
  - Description: Dynamic form controls using `FormArray` allowing add/remove of form groups at runtime.
  - Key file: src/app/features/dynamic form/pages/dynamicformcomponent/dynamicformcomponent.ts

- HTTP Interceptor (route: "interceptor")
  - Description: Placeholder component to test HTTP interceptors; useful for adding request/response logging or auth headers.
  - Key file: src/app/features/http-interceptor/pages/interceptor-component/interceptor-component.ts

- Signal Communication (route: "signal/communication")
  - Description: Parent-child signal communication demo that sends messages from child to parent via event/inputs.
  - Key file: src/app/features/signal-feature/pages/signal-communication/signal-communication.ts

- Signal Model (route: "signal/model")
  - Description: Example of using `signal` as a model value shared with child components and bound via inputs.
  - Key file: src/app/features/signal-model-communication/pages/signal-model/signal-model.ts

- Content Projection (route: "lifecycle/content")
  - Description: Demonstrates content projection (ng-content) by passing template content into child components.
  - Key file: src/app/features/content-project/pages/content-project/content-project.ts

- Host Binding Demo (route: "host/bl")
  - Description: Shows `@HostBinding`/`@HostListener` and host object syntax in the component decorator to control host styling and interactions.
  - Key file: src/app/features/Host Binding-Litsner/pages/binding-litsener/binding-litsener.ts

- Deep Content Projection (route: "project-depth")
  - Description: Nested content projection example for reusable, composable templates across multiple nesting levels.
  - Key file: src/app/features/content-Projection-deep/pages/content-project-depth/content-project-depth.ts

- Dynamic Component (route: "dynamic-component")
  - Description: Demonstrates creating and attaching components dynamically with `ViewContainerRef.createComponent`, passing inputs and subscribing to outputs.
  - Key file: src/app/features/dynamic-components/pages/dynamic-component/dynamic-component.ts

- Promises (no explicit route listed)
  - Description: Small demo illustrating Promise usage, chaining, and error handling inside a component.
  - Key file: src/app/features/Promis/pages/promis-component/promis-component.ts

Notes:
- For routes that lazy-load entire feature modules (e.g., `directives`, `router`, `guard`) check their respective `routers` files for child routes and examples.
- If you want, I can: (a) expand each description with quick usage steps and screenshots; (b) add a search/filter box to the dashboard to find features quickly; (c) auto-sync these descriptions into the dashboard cards (non-destructive PR).
