# Nivel Básico: Consultas simples y selección de datos
## 1. Selecciona todos los registros de una tabla:
### Consulta todas los datos de la tabla film 
```sql
SELECT * FROM film;
```

## 2. Filtrado de datos:
### Encuentra todas las películas con una duración ( length ) mayor a 120 minutos
```sql
SELECT * FROM film  WHERE length > 120;
```
### Busca clientes cuyo apellido sea "Smith" en la tabla customer
```sql
SELECT * FROM customer WHERE last_name = "Smith";
```

## 3. Ordenar datos:
### Ordena las películas de film alfabéticamente por el título.
```sql
SELECT title FROM film  
ORDER BY title ASC; 
```
### Ordena las películas por duración de mayor a menor.
```sql
SELECT title, length FROM film  
ORDER BY length DESC; 
```

## 4. Usar funciones agregadas:
### Cuenta cuántos actores hay en la tabla actor 
```sql
SELECT COUNT(*) actor_id FROM actor;
```
### Encuentra la duración promedio de las películas en la tabla film
```sql
SELECT AVG(rental_duration)  FROM film;
```

## 5. Filtrar con operadores:
### Encuentra todas las películas con una clasificación ( rating ) de 'PG' o 'R'
```sql
SELECT rating FROM film WHERE rating = "PG" OR rating = "R";
```
### Muestra los clientes con last_name que terminen en "FORD"
```sql
SELECT last_name FROM customer WHERE last_name LIKE "%FORD"
```