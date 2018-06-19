# MinWu-Kanban
A kanban board management app built on React on the front and MEAN stack on the back

In the package, you will find  workspace.zip , which is a simple RESTful API implementation using Node.js, Express.js, and MongoDB.

First install Node.js and MongoDB. Then, unzip  workspace.zip  and use  npm install  to install the backend application. ( node server.js )

kanban.routes.js  under  app/routes  indicates the following available RESTful APIs (You can use Postman to manually test them.)

- GET /cards : lists all the kanban cards

- POST /cards : create a new kanban card

- With raw JSON  {“title”: “...”, “description”: “...”, “status”: “...”}

- GET /cards/:card_id : get information of a specific kanban card, includes its task list

- PUT /cards/:card_id : update information of a specific kanban card

- With raw JSON  {“title”: “...”, “description”: “...”, “status”: “...”}

- DELETE /cards/:card_id : delete a specific kanban card

- POST /cards/:card_id/tasks : create a new task for a specific kanban card

- With raw JSON  {“taskname”: “...”}

- PUT /cards/:card_id/tasks/:task_id : update the status of a task in a specific kanban card

- With raw JSON  {“taskstatus”: true}

- DELETE /cards/:card_id/tasks/:task_id : delete a task in a specific kanban
card
The package also includes a sample data set in the JSON format,  kanban.json .
