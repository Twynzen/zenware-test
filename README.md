# Documentación del proyecto en Angular
## Estructura de carpetas
- MODULES
    - PAGES
        - employee-info 
        - employees 
    - SHARED
        - constants
            - endpoints.ts 
            - image-urls.ts 
        - interfaces
            - employee.ts 
        - navbar 
        - services
            - employee.service.ts 
            - request.service.ts 

## Componentes principales
* employee-info: muestra la información de un empleado específico.
* employees: muestra una lista de todos los empleados.

## Carpeta SHARED
* constants: Almacena los endpoints de la API y las URLs de las imágenes importadas para mostrar los empleados.

* interfaces: Contiene la interfaz de "employee" para mantener clara la data de los empleados que proviene de la API.

* navbar: Permite navegar entre los componentes "employee-info" y "employees"

* services: Contiene dos servicios:

* employee.service.ts: manipula la data de la API para empleados

* request.service.ts: maneja las peticiones HTTP

# RUTAS

* En el código proporcionado se establecen tres rutas en el proyecto utilizando el módulo de enrutamiento de Angular.

> '' (raíz): redirige automáticamente al componente employees, cuando la ruta es igual a la raíz, y hace match con 'full'.

> 'employee-info': carga el módulo EmployeeInfoModule cuando se accede a esta ruta.

> 'employees': carga el módulo EmployeesModule cuando se accede a esta ruta.

* Además, se importan los módulos necesarios de @angular/core y @angular/router y se configura el enrutamiento para toda la aplicación en el módulo AppRoutingModule.

* Tambien se especifica que el modulo de rutas importa el modulo RouterModule.forRoot(routes) y exporta RouterModule.

## Error al utilizar la API
* Error: No se puede acceder a la API debido a un problema con las políticas de seguridad (CORS).

* Causa: La API restringe el acceso desde orígenes externos mediante el mecanismo de seguridad CORS, y la aplicación se encuentra en un origen no autorizado.

* Efecto: La aplicación no puede acceder a los datos de la API y puede presentar errores o no funcionar correctamente.

* Solución: se quemo la data, es decir se genera la data desde el componente evitando consumir la api que tiene ese error.

