1a. Display the first and last names of all actors from the table actor.
<<<<<<< HEAD
Ans: select first_name , last_name from actor;

1b. Display the first and last name of each actor in a single column in upper case letters. Name the column Actor Name.
Ans: select upper(concat(first_name,last_name)) as Actor_Name from actor;

2a. You need to find the ID number, first name, and last name of an actor, of whom you know only the first name, "Joe." What is one query would you use to obtain this information?
Ans:select actor_id,first_name,last_name from actor where first_name="Joe";

2b. Find all actors whose last name contain the letters GEN:
Ans: select * from actor where last_name like "%GEN%";

2c. Find all actors whose last names contain the letters LI. This time, order the rows by last name and first name, in that order:
Ans:select actor_id,first_name,last_name from actor where last_name like '%LI%' order by last_name,first_name;

2d. Using IN, display the country_id and country columns of the following countries: Afghanistan, Bangladesh, and China:
Ans:select country_id,country from country where country IN ('Afghanistan', 'Bangladesh','China');

3a. Add a middle_name column to the table actor. Position it between first_name and last_name. Hint: you will need to specify the data type.
Ans: alter table actor add middle_name varchar(20) after first_name;

3b. You realize that some of these actors have tremendously long last names. Change the data type of the middle_name column to blobs.
Ans:alter table actor modify column middle_name blob;

3c. Now delete the middle_name column.
Ans:alter table actor drop column middle_name;

4a. List the last names of actors, as well as how many actors have that last name.
Ans:select last_name,count(last_name) from actor group by last_name;

4b. List last names of actors and the number of actors who have that last name, but only for names that are shared by at least two actors
Ans: select last_name , count(last_name) from actor group by last_name having count(last_name)>=2;

4c. Oh, no! The actor HARPO WILLIAMS was accidentally entered in the actor table as GROUCHO WILLIAMS, the name of Harpo's second cousin's husband's yoga teacher. Write a query to fix the record.
Ans:update actor set first_name='HARPO' where first_name='GROUCHO' and last_name='WILLIAMS';

4d. Perhaps we were too hasty in changing GROUCHO to HARPO. It turns out that GROUCHO was the correct name after all! In a single query, if the first name of the actor is currently HARPO, change it to GROUCHO. Otherwise, change the first name to MUCHO GROUCHO, as that is exactly what the actor will be with the grievous error. BE CAREFUL NOT TO CHANGE THE FIRST NAME OF EVERY ACTOR TO MUCHO GROUCHO, HOWEVER! (Hint: update the record using a unique identifier.)
Ans:update actor set first_name=case when first_name = 'HARPO' then 'GROUCHO' when first_name = 'GROUCHO' then 'MUCHO GROUCHE' else first_name END;

5a. You cannot locate the schema of the address table. Which query would you use to re-create it?
Ans:create table address_new(address_id integer(11) not null,adress varchar(30) not null,address varchar(30) not null,district varchar(20) not null,city_id integer(10) not null,postal_code integer(11),phone integer(10) not null,location varchar(20) not null,last_update datetime);

6a. Use JOIN to display the first and last names, as well as the address, of each staff member. Use the tables staff and address:
Ans:select address.address_id,staff.staff_id,staff.first_name,staff.last_name from address inner join staff on staff.address_id=address.address_id;

6b. Use JOIN to display the total amount rung up by each staff member in August of 2005. Use tables staff and payment.
Ans: select concat(staff.first_name,' ',staff.last_name) as 'Staff Member', sum(payment.amount) as 'Total Amount' from payment join staff on payment.staff_id=staff.staff_id where payment_date like '2005-08%' group by payment.staff_id;

6c. List each film and the number of actors who are listed for that film. Use tables film_actor and film. Use inner join.
Ans: select film.title,count(film_actor.film_id) as 'count' from film inner join film_actor on film.film_id=film_actor.film_id group by film.title;

6d. How many copies of the film Hunchback Impossible exist in the inventory system?
Ans: select film.title as 'Film',count(inventory.inventory_id) as 'Inventory count' from film join inventory on film.film_id=inventory.film_id where film.title='Hunchback Impossible' group by film.film_id;

6e. Using the tables payment and customer and the JOIN command, list the total paid by each customer. List the customers alphabetically by last name:
Ans:select concat(customer.first_name,' ',customer.last_name) as 'Customer Name', sum(payment.amount) as 'Total' from payment join customer on payment.customer_id = customer.customer_id group by payment.customer_id;

7a. The music of Queen and Kris Kristofferson have seen an unlikely resurgence. As an unintended consequence, films starting with the letters K and Q have also soared in popularity. Use subqueries to display the titles of movies starting with the letters K and Q whose language is English.
Ans: select film.title from film where film.language_id=(select language_id from language where name = 'English') and film.title like '%K' or 'Q%';

7b. Use subqueries to display all actors who appear in the film Alone Trip.
Ans:select concat(first_name,' ' ,last_name) as 'Actors in trip' from actor where actor_id in (select actor_id from film actor where film_id =(select film_id from film where title = 'Alone Trip'));
=======
<<<<<<< HEAD
1a.Query -  select first_name,last_name from actor;

1b. Display the first and last name of each actor in a single column in upper case letters. Name the column Actor Name.
1d.Query - select upper(CONCAT(first_name," ",last_name))as actor_name from actor;

2a. You need to find the ID number, first name, and last name of an actor, of whom you know only the first name, "Joe." What is one query would you use to obtain this information?
2a.Query - select actor_id,first_name,last_name from actor where first_name like "Joe";
=======
Ans : select first_name, last_name from actor;

1b. Display the first and last name of each actor in a single column in upper case letters. Name the column Actor Name.
Ans :  select upper(concat(first_name, last_name))  from actor as Name;

2a. You need to find the ID number, first name, and last name of an actor, of whom you know only the first name, "Joe." What is one query would you use to obtain this information?
Ans : select actor_id, first_name, last_name from actor where  first_name = 'Joe';
>>>>>>> 6f9ab3cadc3b586340d47f7156c6dc8ba13ac9c3

2b. Find all actors whose last name contain the letters GEN:
2b.Query - select * from actor where last_name like "%GEN";

2c. Find all actors whose last names contain the letters LI. This time, order the rows by last name and first name, in that order:
<<<<<<< HEAD
2c.Query -  select actor_id,first_name,last_name from actor where last_name like '%LI%' order by last_name,first_name;

2d. Using IN, display the country_id and country columns of the following countries: Afghanistan, Bangladesh, and China:
2d.Query - select country_id , country from country where country IN('Afghanistan', 'Bangladesh', 'China');

3a. Add a middle_name column to the table actor. Position it between first_name and last_name. Hint: you will need to specify the data type.
3a.Query - alter table actor add COLUMN middle_name varchar(200) AFTER first_name;

3b. You realize that some of these actors have tremendously long last names. Change the data type of the middle_name column to blobs.
3b.Query -  alter table actor modify column middle_name blob;

3c. Now delete the middle_name column.
3c.Query - alter table actor drop column middle_name;

4a. List the last names of actors, as well as how many actors have that last name.
4a.Query -  select last_name , count(last_name) from actor group by last_name;

4b. List last names of actors and the number of actors who have that last name, but only for names that are shared by at least two actors
4b.Query -  select last_name , count(last_name) from actor group by last_name having count(last_name)>=2;

4c. Oh, no! The actor HARPO WILLIAMS was accidentally entered in the actor table as GROUCHO WILLIAMS, the name of Harpo's second cousin's husband's yoga teacher. Write a query to fix the record.
4C.Query -  update actor set first_name='HARPO' where first_name='GROUCHO'AND last_name='WILLIAMS';

4d. Perhaps we were too hasty in changing GROUCHO to HARPO. It turns out that GROUCHO was the correct name after all! In a single query, if the first name of the actor is currently HARPO, change it to GROUCHO. Otherwise, change the first name to MUCHO GROUCHO, as that is exactly what the actor will be with the grievous error. BE CAREFUL NOT TO CHANGE THE FIRST NAME OF EVERY ACTOR TO MUCHO GROUCHO, HOWEVER! (Hint: update the record using a unique identifier.)
4d-Query -  update actor set first_name='GROUCHO' where first_name='HARPO'AND last_name='WILLIAMS';

5a. You cannot locate the schema of the address table. Which query would you use to re-create it?
5a.Query - describe sakila.address;

6a. Use JOIN to display the first and last names, as well as the address, of each staff member. Use the tables staff and address:
6a.Query - select staff.first_name, staff.last_name, address.address from staff inner join address on address.address_id = staff.address_id;

6b. Use JOIN to display the total amount rung up by each staff member in August of 2005. Use tables staff and payment.
6b.Query - select concat(staff.first_name,' ',staff.last_name),sum(payment.amount) from payment join staff on payment.staff_id = staff.staff_id
where payment_date like '2005-08%' group by payment.staff_id;

6c. List each film and the number of actors who are listed for that film. Use tables film_actor and film. Use inner join.
6c.Query - select film.title, count(film_actor.actor_id) from film join film_actor on film.film_id = film_actor.film_id
group by film.title;

6d. How many copies of the film Hunchback Impossible exist in the inventory system?
6d.Query -select film.title, count(inventory.inventory_id) from film join inventory on film.film_id = inventory.film_id where film.title = 'Hunchback Impossible'
group by film.film_id;
=======
Ans :  select last_name, first_name from actor where last_name like '%LI%';

2d. Using IN, display the country_id and country columns of the following countries: Afghanistan, Bangladesh, and China:
Ans : select country_id, country from country where country in ('China', 'Afghanistan', 'Bangladesh');

3a. Add a middle_name column to the table actor. Position it between first_name and last_name. Hint: you will need to specify the data type.
Ans : alter table actor add middle_name varchar(40) after first_name;

3b. You realize that some of these actors have tremendously long last names. Change the data type of the middle_name column to blobs.
Ans : alter table actor modify  middle_name blob;

3c. Now delete the middle_name column.
Ans : alter table actor drop middle_name;

4a. List the last names of actors, as well as how many actors have that last name.
Ans : alter table actor drop middle_name;

4b. List last names of actors and the number of actors who have that last name, but only for names that are shared by at least two actors
Ans :  select last_name, count(actor_id) from actor group by last_name having count(actor_id) >= 2;

4c. Oh, no! The actor HARPO WILLIAMS was accidentally entered in the actor table as GROUCHO WILLIAMS, the name of Harpo's second cousin's husband's yoga teacher. Write a query to fix the record.
Ans :  UPDATE actor set first_name = 'HARPO' where first_name = 'GROUCHO' and last_name = 'WILLIAMS';

4d. Perhaps we were too hasty in changing GROUCHO to HARPO. It turns out that GROUCHO was the correct name after all! In a single query, if the first name of the actor is currently HARPO, change it to GROUCHO. Otherwise, change the first name to MUCHO GROUCHO, as that is exactly what the actor will be with the grievous error. BE CAREFUL NOT TO CHANGE THE FIRST NAME OF EVERY ACTOR TO MUCHO GROUCHO, HOWEVER! (Hint: update the record using a unique identifier.)
Ans : 

5a. You cannot locate the schema of the address table. Which query would you use to re-create it?
Ans :  create table new_addres ( address_id smallint(10) unsigned not null primary key auto_increment, address varchar(50) not null, address2 varchar(50) not null, district varchar(20) not null, city_id smallint(10) unsigned not null, postal_code varchar(10) null, phone varchar(20) not null, location geometry not null, last_update timestamp);

6a. Use JOIN to display the first and last names, as well as the address, of each staff member. Use the tables staff and address:
Ans :  select staff.first_name, staff.last_name, address.address from address inner join staff on staff.address_id = address.address_id;

6b. Use JOIN to display the total amount rung up by each staff member in August of 2005. Use tables staff and payment.
Ans : select s.first_name, s.last_name, sum(p.amount) from payment as p join staff as s on s.staff_id = p.staff_id where payment_date like '2005-08%' group by p.staff_id;

6c. List each film and the number of actors who are listed for that film. Use tables film_actor and film. Use inner join.
Ans : select f.title, count(a.actor_id) from film as f inner join film_actor as a on f.film_id = a.film_id group by a.film_id;

6d. How many copies of the film Hunchback Impossible exist in the inventory system?
Ans : select f.title as Film, count(i.inventory_id) as 'Inventory Count' from film as f join inventory as i on f.film_id = i.film_id where f.title = 'Hunchback Impossible' group by f.film_id;

>>>>>>> 6f9ab3cadc3b586340d47f7156c6dc8ba13ac9c3

6e. Using the tables payment and customer and the JOIN command, list the total paid by each customer. List the customers alphabetically by last name:
6e.Query - select customer.first_name,customer.last_name, sum(payment.amount) from customer join payment on customer.customer_id = payment.customer_id 
group by customer.customer_id;

7a. The music of Queen and Kris Kristofferson have seen an unlikely resurgence. As an unintended consequence, films starting with the letters K and Q have also soared in popularity. Use subqueries to display the titles of movies starting with the letters K and Q whose language is English.
7a.Query - select film.title from film where film.language_id=(select language_id from language where name='English')
and film.title like 'K%' or 'Q%;'

7b. Use subqueries to display all actors who appear in the film Alone Trip.
7b Query - select concat(actor.first_name,' ',actor.last_name) from actor where actor.actor_id in
(select actor_id from film_actor where film_id=(select film_id from film where title = 'Alone Trip'))   
>>>>>>> 7c2348230ca848f5c16a74f98aca42d9e765f289

7c. You want to run an email marketing campaign in Canada, for which you will need the names and email addresses of all Canadian customers. Use joins to retrieve this information.
Ans:select concat(customer.first_name, ' ',customer.last_name) as 'Name', customer.email as 'Email' from customer join address on customer.address_id = address.address_id join city on address.city_id = city.city_id join country on city.city_id = country.country_id where country.country = 'Canada';

7d. Sales have been lagging among young families, and you wish to target all family movies for a promotion. Identify all movies categorized as famiy films.
Ans:select film.title as 'Movie Title' from film join film_category on film_category.film_id = film.film_id join category on category.category_id = film_category.category_id where category.name='Family';

7e. Display the most frequently rented movies in descending order.
Ans:

7f. Write a query to display how much business, in dollars, each store brought in.

7g. Write a query to display for each store its store ID, city, and country.

7h. List the top five genres in gross revenue in descending order. (Hint: you may need to use the following tables: category, film_category, inventory, payment, and rental.)

8a. In your new role as an executive, you would like to have an easy way of viewing the Top five genres by gross revenue. Use the solution from the problem above to create a view. If you haven't solved 7h, you can substitute another query to create a view.

8b. How would you display the view that you created in 8a?

8c. You find that you no longer need the view top_five_genres. Write a query to delete it.