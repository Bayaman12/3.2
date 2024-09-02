document.getElementById('getUserBtn').addEventListener('click', getUserData);

document.getElementById('userId').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        getUserData();
    }
});

function getUserData() {
    const userId = document.getElementById('userId').value;
    
    if (userId >= 1 && userId <= 10) {
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(response => response.json())
            .then(data => {
                document.getElementById('result').innerHTML = `
                    <p><strong>Имя:</strong> ${data.name}</p>
                    <p><strong>Username:</strong> ${data.username}</p>
                    <p><strong>Телефон:</strong> ${data.phone}</p>
                `;
            })
            .catch(error => {
                document.getElementById('result').innerHTML = `
                    <p>Произошла ошибка: ${error}</p>
                `;
            });
    } else {
        document.getElementById('result').innerHTML = `
            <p>Введите правильный ID (от 1 до 10).</p>
        `;
    }
}