const postId = document.querySelector('#post-id').value;

const editFormHandler = async function(event) {
  event.preventDefault();

  const title = document.querySelector('#post-title').value;
  const body = document.querySelector('#post-body').value;

  await fetch(`/api/post/${postId}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      body
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  document.location.replace('/dashboard');
};

const deleteClickHandler = async function() {
  await fetch(`/api/post/${postId}`, {
    method: 'DELETE'
  });

  document.location.replace('/dashboard');
};

document.querySelector('#edit-post-form').addEventListener('submit', editFormHandler);
document.querySelector('#delete-btn').addEventListener('click', deleteClickHandler);