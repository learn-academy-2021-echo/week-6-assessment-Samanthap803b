# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: For my understanding I think I would create another table and for that table create my foreign key and use that to link both. My new table is going to be students and here is going to be. I think the name is going to be Student _id or Cohort_id. The foreign key should be on both sides I think.

  Researched answer: To associated tables we need the foreign key and we need to describe the relationship to each of the model classes by using has_many and belongs_to.  



2. Which RESTful routes must always be passed params? Why?

  Your answer: Destroy needs to pass params to know were to go and edith. They need params to know where to go what to change or delete.

  Researched answer: Edit, create, update and destroy all this RESTful routs need params to do the changes that each one of them do add, delete, make updates...



3. Name three rails generator commands. What is created by each?

  Your answer: rails new_app is going to create a new rails app,
  rails db: migrate this is going to update all changes done,
  rail s this is going o start the server.

  Researched answer:The controller is like the switch board that collects appropriate data from the model and sends it to construct the view.
  rails new app_name: is going to generate a new folder with the entire Rails directory.
  railsdb:migrate : modify the shape of an existing database.
  rails s or rails server: is going to start the Rails application by starting the server.



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET"    route: /students - This is the index method and   I think this is going to let us see all the students.       

action: "POST"   route: /students -This is the create method. I think here is where we can create new students.     

action: "GET"    route: /students/new - This is the new method. Here we can allow the user to add new students

action: "GET"    route: /students/2 - This is the show method. Here we are going to see just the second student that we enter.

action: "GET"    route: /students/2/edit - This is the edit method. I think here the page is going to allow the user to edit the information to make changes.

action: "PATCH"  route: /students/2 - This is the update method. With this method we are going to make the updates after the changes.

action: "DELETE" route: /students/2 - This is the destroy method. This method is very descriptive is going to delete the second student that holds that position.



5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1.- As a developer, I can create a full-stack Rails application to manage your to do list.
2.- As a developer, I can see my title and description of my app.
3.- As a developer, I can add a list of thing to do.
4.- As a user, I can see a title and all my to do list on the home page of my app.
5.- As a developer, I can create button using the symbol + to create new tasks to add.
6.- As a developer, I can create a button to delete task.
7.- As a user, I can click on the + button and create new task and after clicking on submit, i am redirected to my home page.
8.- As a user, I can click on the delete button and delete the task that I want to remove.
9.- As a user, I can edit my task and se the updates.
10.- As a user, I can update my task if done put a check mark.
