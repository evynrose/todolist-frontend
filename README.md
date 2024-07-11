# Description
This is a To-Do List mobile app utilizing React Native, Redux, Express.js, TypeScript, and Node.js to create a functional task manager.

# Deployment link

SOOOO... I did not get to this. I sincerely apologise. I am proud of what I have created and hope you can understand that deployment was really frustrating and too complex. I would love to learn this with a higher up and achieve this in the future. I was too focused on learning React Native and Redux, two tools I have never worked with before. 

# Getting Started/Code Installation
To get started with this To-Do List app, follow the steps below:

# Backend Setup
Clone the Backend Repository:


`
git clone https://github.com/evynrose/todolist-backend`
Navigate to the backend directory:

`
cd todolist-backend`
Install Node Modules:

`
npm install`
Set Up MongoDB:

Ensure you have MongoDB installed and running on your machine.

Start MongoDB using the command:

`mongod`
Run the Backend Server:

`npm run dev `

# Frontend Setup

Clone the Frontend Repository:
`
git clone https://github.com/evynrose/todolist-frontend`

Navigate to the frontend directory:
`
cd todolist-frontend`

Install Node Modules:
`
npm install`
Install Expo CLI:

`npm install -g expo-cli`

Install Redux:

`npm install redux react-redux`

Install Expo dependencies:

`expo install`
Start the Expo Server:

` npm run start`

You can view the mobile app on EXPO GO on your mobile phone. 

# Timeframe & Working Team (Solo/Pair/Group)
I worked alone for a little more than a week.

# Technologies Used

Front End:

React Native
Redux

Back End:

Node.js
Express.js

Languages:

TypeScript

Database:

MongoDB

Development Tools:

Expo CLI

# Brief
Develop a CRUD API using TypeScript.
Create a React Native mobile application that interacts with the CRUD API.
Utilize Redux for state management within the mobile application.

# Planning
To-Do List: Created a detailed To-Do List document outlining all tasks and milestones to be completed. Link is here: https://docs.google.com/document/d/1Pzc901zwDT6vza3XzmcILm9mJsUl60SVIsiURo56kxQ/edit

Wireframes:  Link is here: https://imgur.com/w6yHS0K

# Build/Code Process
During the development of this project, I followed a structured approach to implement CRUD functionalities and addressed challenges with Redux:

CRUD Functionality Implementation:

Add a Task (Create):

`const handleAddTask = async () => {
    if (inputValue.trim()) {
      // const taskId = tasks.length
      const taskId = Math.max(...tasks.map(task => task.id), 0) + 1
      dispatch(addTask({ taskId, inputValue }));
      await ToDoApi.addTask(inputValue, taskId)
      setInputValue('');
    }
  };`

Edit a Task (Update):

 `const handleEditTask = async () => {
    if (inputValue.trim() && editMode.taskId !== null) {
      dispatch(editTask({ taskId: editMode.taskId, newText: inputValue }));
      await ToDoApi.editTask(editMode.taskId, inputValue)
      setInputValue('');
      setEditMode({ enabled: false, taskId: null });
    }
  };`

I specifically struggled with this function:

`const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<{taskId:number, inputValue:string}>) => {
      state.tasks.push({ id: action.payload.taskId, task: action.payload.inputValue });
    },
    editTask: (
      state,
      action: PayloadAction<{ taskId: number, newText: string }>
    ) => {
      const { taskId, newText } = action.payload;
      state.tasks = state.tasks.map((task) =>
        task.id === taskId ? { ...task, task: newText } : task
      );
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      const taskId = action.payload;
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.fulfilled, (state, action ) => {
      const tasks = action.payload
      state.tasks = tasks
      console.log(tasks);
    })
  },
});`

Learning and Documentation Utilization:

I leveraged Redux's documentation and learning videos extensively to overcome challenges and enhance my understanding of Redux and its functionalities.

# Challenges

During the development of this project, several challenges GOT ME! 

Technical Challenges:

Understanding and implementing Redux, especially the createSlice function for state management. I just really don't understand it. 

Integrating and troubleshooting the interaction between the React Native frontend and the TypeScript-based CRUD API. I had to do a lot of problem-solving and checking my console errors.

How I Tried To Solve It:

Redux Implementation: Utilized extensive documentation, tutorials, and learning resources to grasp Redux concepts and effectively implement state management.

API Integration: Debugged API calls and ensured data consistency between the frontend and backend through thorough testing and debugging sessions.

# Wins

Throughout this project, I had some proud moments! 

Backend Development Confidence: Successfully implemented a TypeScript-based CRUD API using Node.js and Express.js, gaining confidence in backend development skills.

Functional CRUD Operations: Implemented CRUD functionalities effectively within the backend. They all work! 

Redux Implementation: Overcame challenges with Redux, particularly figuring out the createSlice function for state management in the React Native frontend, enhancing understanding and application of Redux principles.

# Key Learnings/Takeaways

Throughout this project, I have experienced significant growth and learning. Boy, am I glad I did this! 

Exploration of New Technologies: I am thrilled to have delved into React Native and Redux as new tools for building mobile applications. While I acknowledge there is much more to learn, I found working with React Native particularly enjoyable. And that's coming from someone who notoriously dislikes React! They are quite different.

Mixed Feelings on Redux: While I see the value of Redux in managing state in complex applications, I encountered challenges, especially with understanding and effectively utilizing the createSlice function and advanced state management patterns. Despite these difficulties, I appreciate the learning opportunity it provided and intend to continue improving my skills in Redux.

Personal Growth as an Engineer: This project has been instrumental in enhancing my confidence in backend development using TypeScript, as well as in managing projects independently from start to finish. It has underscored the importance of structured planning, problem-solving, and continuous learning in engineering projects.

# Bugs
The following significant bug was identified:

CORS Issue: There is a bug where CORS settings cause issues, requiring the CORS function in the index file to be commented out to prevent simultaneous use of two portals and ensure the project functions correctly. I believe this issue would prevent successful deployment of the project.

# Future Improvements

Moving forward I would like to...

Ensure Successful Deployment: Address any deployment issues and optimize the project for successful deployment in various environments.

Improved Confidence with Redux: Strengthen understanding and proficiency in Redux, particularly focusing on advanced concepts like the createSlice function and more efficient state management practices.

# BONUS QUESTIONS!!!!!

Q: Thoughts on Data Storage in the front-end and back-end?
A: I feel as if I have more confidence with data in the back-end and can speak to this more. I struggle deeply with front-end work. I enjoy working with data thoroughly on the back-end. I think it is readable and with the usage of CORS and implementing santisation and other tools, you can have a really well laid out database that is safely guarding information. 

Q: Authentication on the front-end and back-end with this project?
A: I did not use authorisation tools on this project, though I would happily do so if I had more time. I think user implementation would be best and using tokens to ensure logged in users are having access to ONLY THEIR tasks would be a great tool!

Q: Automated Testing Tools?
A: I have not used automated testing tools but have a deep interest and would love to learn. I think anything to work smarter is useful as a growing developer and we should utilise these tools. I watched a video on Jest and would love to learn more. 

Q: Monorepos VS Separate Repos
A: I have only ever worked with separate repos. I would love to learn how you can put the two together and send one repo for someone to git clone. 

Q: Code Linting?
A: I did not use a linter for this project but I have used one with Python. I think it is hit or miss! It can either add to the ease of the project, or make things worse depending on what action you are taking. I would love to learn even more. 

# EXTRA 

Thank you for your time and consideration, Fat Fish! 
