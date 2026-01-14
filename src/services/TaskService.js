// Connects to your backend to fetch tasks
export const fetchTasks = async () => {
  try {
    const res = await fetch('http://localhost:5000/tasks'); // backend URL
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error fetching tasks:", err);
    return [];
  }
};
