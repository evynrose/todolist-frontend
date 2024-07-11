export const getTasks = async () => {
  try {
    const response = await fetch(
      'http://localhost:8000/api/tasks',
    );
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

export const addTask = async (task:string, id:number) => {
  try {
    const response = await fetch(
      'http://localhost:8000/api/tasks', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
      body: JSON.stringify({
            task:task,
            id:id
        })
      }
    );
    const json = await response.json();
    return json.tasks;
  } catch (error) {
    console.error(error);
  }
};


export const editTask = async (taskId:number, task:string) => {
  try {
     await fetch(
      `http://localhost:8000/api/tasks/${taskId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            task,
        })
      }
    )
  } catch (error) {
    console.error(error);
  }
};

export const deleteTask = async (taskId:number) => {
  try {
     await fetch(
      `http://localhost:8000/api/tasks/${taskId}`, {
        method: 'DELETE'
      }
    )
  } catch (error) {
    console.error(error);
  }
};