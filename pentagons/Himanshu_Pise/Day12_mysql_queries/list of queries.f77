1a. Display the first and last names of all actors fromthe table actor.
    :- select first_name,last_name fromsakila.actor;

1b. Display the first and last name of each actor in a single column in upper case letters. Name the column Actor Name.
    :- select upper(concat(first_name," ",last_name))as Actor_Name fromsakila.actor;

2a. You need to find the ID number, first name, and last name of an actor, of whom you knowonly the first name, "Joe." What isone query would you use to obtain this information?
    :- select  actor_id,first_name,last_name fromsakila.actor where first_name='joe';

2b. Find all actors whose last name contain the letters GEN:
    :- select  * fromsakila.actor where last_name like '%GEN%';

2c. Find all actors whose last names contain the letters LI. This time, order the rows by last name and first name, in that order:
    :- select  * fromsakila.actor where last_name like '%LI%' order by last_name,first_name;

2d. Using IN, display the country_id and country columns of the following countries: Afghanistan, Bangladesh, and China:
    :- SELECT country_id,country fromsakila.country WHERE country IN ('Afghanistan','Bangladesh','China');

3a. Add a middle_name column to the table actor. Position it between first_name and last_name. Hint: you will need to specify the data type.
    :- ALTER TABLE sakila.actor ADD COLUMN middle_name varchar(40) AFTER first_name;

3b. You realize that some of these actors have tremendously long last names. Change the data type of the middle_name column to blobs.
    :- alter table sakila.actor modify column middle_name blob;

3c. Now delete the middle_name column.
    :- alter table sakila.actor drop column middle_name;

4a. List the last names of actors, as well as how many actors have that last name.
    :-  select last_name,count(last_name)
        as count_of_lastname fromsakila.actor
        group by last_name;

4b. List last names of actors and the number of actors who have that last name, butonly for names that are shared by at least two actors
    :-  select last_name,count(last_name) as
        count_of_lastname fromsakila.actor
        group by last_name having
        count_of_lastname>=2 ;

4c. Oh, no! The actor HARPO WILLIAMS was accidentally entered in the actor table as GROUCHO WILLIAMS, the name of Harpo's second cousin's husband's yoga teacher. Write a query to fix the record.
    :-  update sakila.actor
        set first_name='HARPO'
        where first_name='GROUCHO'
        and last_name='WILLIAMS';

4d. Perhaps we were too hasty in changing GROUCHO to HARPO. It turns out that GROUCHO was the correct name after all! In a single query, if the first name of the actor is currently HARPO, change it to GROUCHO. Otherwise, change the first name to MUCHO GROUCHO, as that is exactly what the actor will be with the grievous error. BE CAREFUL NOT TO CHANGE THE FIRST NAME OF EVERY ACTOR TO MUCHO GROUCHO, HOWEVER! (Hint: update the record using a unique identifier.)
    ":- UPDATE sakila.actor
            set first_name =
            case
            when first_name = 'HARPO'
            then 'GROUCHO'
            else 'MUCHO GROUCHO'
            end
            where actor_id = 172;

5a. You cannot locate the schema of the address table. Which query would you use to re-create it?
    :- show create table sakila.address;

6a. Use join to display the first and last names, as well as the address, of each staff member. Use the tables staff and address:
    :-  select  s.first_name, s.last_name, a.address
        fromsakila.staff s
        inner join sakila.address a
       on (s.address_id = a.address_id);


6b. Use join to display the total amount rung up by each staff member in August of 2005. Use tables staff and payment.
    :-  select s.first_name, s.last_name, sum(pay.amount)
        fromsakila.staff as s
        inner join sakila.payment as pay
       on pay.staff_id = s.staff_id
        where month(pay.payment_date) = 08 and year(pay.payment_date) = 2005
        group by s.staff_id;

6c. List each film and the number of actors who are listed for that film. Use tables film_actor and film. Use inner join.
    :-  select f.title as 'Films', count(fa.actor_id) as'Actors'
        from sakila.film_actor as fa
        inner join  sakila.film as f
       on f.film_id = fa.film_id
        group by f.title
        order by Actors desc;

6d. How many copies of the film Hunchback Impossible exist in the inventory system?
    :-  select title, count(inventory_id) as 'No. of copies'
        fromsakila.film
        inner join sakila.inventory
        using (film_id)
        where title = 'Hunchback Impossible'
        group by title;

6e. Using the tables payment and customer and the join command, list the total paid by each customer. List the customers alphabetically by last name:
    :-  select c.first_name, c.last_name, SUM(p.amount) as 'Total Amount Paid'
        frompayment as p
        join customer as c
       on p.customer_id = c.customer_id
        group by c.customer_id
        order by c.last_name;

7a. The music of Queen and Kris Kristofferson have seen an unlikely resurgence. as an unintended consequence, films starting with the letters K and Q have also soared in popularity. Use subqueries to display the titles of movies starting with the letters K and Q whose language is English.
    :-  select title fromsakila.film
        where language_id in
            (select language_id fromsakila.language
            where name = "English" )
        and (title like "K%") or (title like "Q%");

7b. Use subqueries to display all actors who appear in the film Alone Trip.
    :- select last_name, first_name
        fromsakila.actor where actor_id in
            (select actor_id fromsakila.film_actor
            where film_id in
                (select film_id fromsakila.film
                where title = "Alone Trip"));

7c. You want to run an email marketing campaign in Canada, for which you will need the names and email addresses of all Canadian customers. Use joins to retrieve this information.
    :-  select country, last_name, first_name, email
        fromsakila.country c
        left join sakila.customer cu
       on c.country_id = cu.customer_id
        where country = 'Canada';


7d. Sales have been lagging among young families, and you wish to target all family movies for a promotion. Identify all movies categorized as family films.
    :-  select title, category
        fromsakila.film_list
        where category = 'Family';

7e. Display the most frequently rented movies in descending order.
    :-  select title, COUNT(title) as 'Rentals' fromsakila.film
        join sakila.inventory  on (film.film_id = inventory.film_id)
        join sakila.rental     on (inventory.inventory_id = rental.inventory_id)
        group by title
        order by rentals desc;

7f. Write a query to display how much business, in dollars, each store brought in.
    :-  select store.store_id, sum(amount) as 'amt. of Business'
        from store
        inner join staff
       on store.store_id = staff.store_id
        inner join payment p
       on p.staff_id = staff.staff_id
        group by store.store_id
        order by sum(amount);

7g. Write a query to display for each store its store ID, city, and country.
    :-  select s.store_id, city, country
        fromstore s
        inner join customer cu
       on s.store_id = cu.store_id
        inner join staff st
       on s.store_id = st.store_id
        inner join address addr
       on cu.address_id = addr.address_id
        inner join city ci
       on addr.city_id = ci.city_id
        inner join country coun
       on ci.country_id = coun.country_id;


7h. List the top five genres in gross revenue in descending order. (Hint: you may need to use the following tables: category, film_category, inventory, payment, and rental.)
    :-  select sum(amount) as 'Total Sales', c.name as 'Genre' from payment p
        join rental ron (p.rental_id = r.rental_id)
        join inventory ion (r.inventory_id = i.inventory_id)
        join film_category fcon (i.film_id = fc.film_id)
        join category con (fc.category_id = c.category_id)
        group by  c.name
        order by sun (amount) desc;

8a. In your new role as an executive, you would like to have an easy way of viewing the Top five genres by gross revenue. Use the solution fromthe problem above to create a view. If you haven't solved 7h, you can substitute another query to create a view.
    :-  create view top_five_genres as
        select sum(amount) as 'Total Sales', c.name as 'Genre'
        from payment p
        join rental r
        on (p.rental_id = r.rental_id)
        join inventory i
        on (r.inventory_id = i.inventory_id)
        join film_category fc
        on (i.film_id = fc.film_id)
        join category c
        on (fc.category_id = c.category_id)
        group by c.name
        order by sum(amount) desc
        limit 5;

8b. How would you display the view that you created in 8a?
    :- select * from sakila.top_five_genres;

8c. You find that you no longer need the view top_five_genres. Write a query to delete it.
    :-drop view top_five_genres;