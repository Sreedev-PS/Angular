# 📘Angular Multi-App Workspace (Non-Standalone)
### Angular Multi-Application Workspace (Without Standalone APIs)

 This project is a custom Angular workspace designed to host multiple traditional Angular applications using the NgModules architecture (i.e., **not using Angular Standalone APIs**). It also uses a custom folder structure (`myproject/`) instead of the default `projects/`.

---

### 🏗️ Workspace Setup

Create a new Angular workspace **without an initial application**:

```bash
ng new multiapp --create-application=false
```
#### Move into the workspace directory:
```bash
cd multiapp
````
Update the workspace configuration to use a custom folder name:

### 📁 Customize folder structure
In angular.json, change:
```json
"newProjectRoot": "projects"
```
To:

```json
"newProjectRoot": "myproject"
```
This ensures that any new apps or libraries generated will be placed inside the myproject/ folder.

## 📦 Creating Traditional Angular Applications
 Generate applications using NgModules (non-standalone):

```bash
 ng generate application app1 --standalone=false
 ng generate application app2 --standalone=false
```
 These apps will now reside in:

```
myproject/app1/
myproject/app2/
```
Each will include:

##### AppModule (NgModule-based setup)

##### Classic main.ts with platformBrowserDynamic().bootstrapModule(AppModule)

### ✅ Confirming Non-Standalone Setup
app.module.ts is present and used for bootstrapping.

main.ts does not use bootstrapApplication() (which is for standalone APIs).

Applications are located inside myproject/.

### 📁 Folder Structure (Example)
```
multiapp/
├── angular.json
├── myproject/
│   ├── app1/
│   └── app2/
└── ...
```
### 🛠️ Tips
Keep the "projects" key in angular.json unchanged; it's a mapping for all your apps/libraries.

You can add shared libraries using:

```bash
ng generate library shared --standalone=false
```
### 🧩 Optional Enhancements
- Add a shared library for reusable components/services.
- Configure routing to switch between apps.
- Set up CI/CD to deploy individual apps.
