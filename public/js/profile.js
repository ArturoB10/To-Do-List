const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#task-name").value.trim();
  const description = document.querySelector("#task-desc").value.trim();

  if (name && description) {
    const response = await fetch(`/api/tasks`, {
      method: "POST",
      body: JSON.stringify({ name, description }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {w
      alert("Failed to create task");
    }
  }
};

const updateButtonHandler = async (id) => {
  const response = await fetch(`/api/tasks/${id}`, {
    method: "PUT",
  });

  if (response.ok) {
    document.location.replace("/profile");
  } else {
    alert("Failed to complete task");
  }
};

document
  .querySelector(".new-task-form")
  .addEventListener("submit", newFormHandler);

const deleteTask = async (id) => {
  const response = await fetch(`/api/tasks/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace("/profile");
  } else {
    alert("Failed to complete task");
  }
};
