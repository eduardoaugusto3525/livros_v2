const books = [
    { title: 'Aventuras Fantásticas', genre: 'fantasia', description: 'Uma jornada épica cheia de magia.', img: 'https://via.placeholder.com/300x400' },
    { title: 'Histórias do Futuro', genre: 'ficcao', description: 'Explore os limites da tecnologia.', img: 'https://via.placeholder.com/300x400' },
    { title: 'Lágrimas e Sorrisos', genre: 'drama', description: 'Emoções profundas e envolventes.', img: 'https://via.placeholder.com/300x400' },
    { title: 'Vida de um Gênio', genre: 'biografia', description: 'Os segredos dos grandes líderes.', img: 'https://via.placeholder.com/300x400' },
    { title: 'Universos Paralelos', genre: 'ficcao', description: 'Teorias e mistérios do cosmos.', img: 'https://via.placeholder.com/300x400' }
  ];
  
  const bookList = document.querySelector('.book-list');
  const searchInput = document.getElementById('search');
  const filterButtons = document.querySelectorAll('.filters button');
  
  function displayBooks(filteredBooks) {
    bookList.innerHTML = '';
    filteredBooks.forEach(book => {
      const bookCard = `
        <div class="book-card">
          <img src="${book.img}" alt="${book.title}">
          <h3>${book.title}</h3>
          <p>${book.description}</p>
        </div>
      `;
      bookList.innerHTML += bookCard;
    });
  }
  
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(query));
    displayBooks(filteredBooks);
  });
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const genre = button.getAttribute('data-genre');
      const filteredBooks = genre === 'todos' ? books : books.filter(book => book.genre === genre);
      displayBooks(filteredBooks);
    });
  });
  
  // Inicializa com todos os livros
  displayBooks(books);
  