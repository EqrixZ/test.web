import React, { useState } from 'react';
import './App.css'; // Import the CSS file

const App = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false); // State to control the login modal
  const [isRegisterOpen, setIsRegisterOpen] = useState(false); // State to control the register modal
  const [selectedCategory, setSelectedCategory] = useState(''); // State to store selected category

  const handleLogin = () => {
    alert('Login button clicked!');
    setIsLoginOpen(false); // Close the modal after login
  };

  const handleRegister = () => {
    alert('Register button clicked!');
    setIsRegisterOpen(false); // Close the modal after registration
  };

  const toggleLoginModal = () => {
    setIsLoginOpen(!isLoginOpen);
    if (isRegisterOpen) {
      setIsRegisterOpen(false); // Ensure register modal closes if it's open
    }
  };

  const toggleRegisterModal = () => {
    setIsRegisterOpen(!isRegisterOpen);
    if (isLoginOpen) {
      setIsLoginOpen(false); // Ensure login modal closes if it's open
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category); // Update selected category when user clicks
  };

  // Sample book data with categories
  const books = [
    { id: 1, title: 'Book 1', category: 'นวนิยาย' },
    { id: 2, title: 'Book 2', category: 'วรรณกรรม เรื่องสั้น' },
    { id: 3, title: 'Book 3', category: 'จิตวิทยา การพัฒนาตนเอง' },
    { id: 4, title: 'Book 4', category: 'การ์ตูน มังงะ' },
    { id: 5, title: 'Book 5', category: 'นวนิยาย' },
    { id: 6, title: 'Book 6', category: 'วรรณกรรม เรื่องสั้น' },
    { id: 7, title: 'Book 7', category: 'จิตวิทยา การพัฒนาตนเอง' },
    { id: 8, title: 'Book 8', category: 'การ์ตูน มังงะ' },
  ];

  // Filter books based on selected category
  const filteredBooks = selectedCategory
    ? books.filter((book) => book.category === selectedCategory)
    : books; // If no category is selected, show all books

  return (
    <div className="container">
      <div className="header">
        <div className="logo">Logo</div>
        <div className="login" onClick={toggleLoginModal}>Login</div>
      </div>

      <div className="content-wrapper">
        <div className="promotion">Promotion</div>

        <div className="content">
          <div className="sidebar">
            <div className="category">หมวด</div>
            <ul>
              <li onClick={() => handleCategoryChange('นวนิยาย')}>นวนิยาย</li>
              <li onClick={() => handleCategoryChange('วรรณกรรม เรื่องสั้น')}>วรรณกรรม เรื่องสั้น</li>
              <li onClick={() => handleCategoryChange('จิตวิทยา การพัฒนาตนเอง')}>จิตวิทยา การพัฒนาตนเอง</li>
              <li onClick={() => handleCategoryChange('การ์ตูน มังงะ')}>การ์ตูน มังงะ</li>
            </ul>
          </div>

          <div className="book-grid">
            {filteredBooks.map((book) => (
              <div key={book.id} className="book">
                {book.title}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for Login */}
      {isLoginOpen && (
        <div className="modal-overlay" onClick={toggleLoginModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="close-icon" onClick={toggleLoginModal}>&times;</div>
            <h2>Login</h2>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button className="login-button" onClick={handleLogin}>Login</button>
            <p>No account? <span className="register-link" onClick={toggleRegisterModal}>* Register</span></p>
          </div>
        </div>
      )}

      {/* Modal for Register */}
      {isRegisterOpen && (
        <div className="modal-overlay" onClick={toggleRegisterModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="close-icon" onClick={toggleRegisterModal}>&times;</div>
            <h2>Register</h2>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <input type="text" placeholder="Name Surname" required />
            
            {/* Dropdown for Sex */}
            <select required>
              <option value="" disabled selected>Select Sex</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>

            <input type="date" placeholder="dd/mm/yy" required />
            <input type="text" placeholder="Address" required />
            <button className="register-button" onClick={handleRegister}>Register</button>
          </div>
        </div>
      )}

      <div className="footer">
        <p>About Us</p>
      </div>
    </div>
  );
};

export default App;
