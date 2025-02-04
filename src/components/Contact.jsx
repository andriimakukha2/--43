import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState(''); // Додати стан для успішного повідомлення

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Будь ласка, введіть ім’я';
        if (!formData.email) newErrors.email = 'Будь ласка, введіть електронну пошту';
        if (!formData.message) newErrors.message = 'Будь ласка, введіть повідомлення';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log('Форма відправлена:', formData);
            // Логіка для відправки форми (наприклад, на сервер)
            setSuccessMessage('Ваше повідомлення надіслано успішно!'); // Відобразити повідомлення про успіх
            setFormData({ name: '', email: '', message: '' }); // Очищення форми
            setErrors({});
        }
    };

    return (
        <div className="contact-container">
            <h1>Контакти</h1>
            <p>Зв'яжіться з нами для отримання додаткової інформації.</p>
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label>Ім'я</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`input ${errors.name ? 'input--error' : ''}`}
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                </div>
                <div className="form-group">
                    <label>Електронна пошта</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`input ${errors.email ? 'input--error' : ''}`}
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
                <div className="form-group">
                    <label>Повідомлення</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className={`textarea ${errors.message ? 'textarea--error' : ''}`}
                    ></textarea>
                    {errors.message && <span className="error-message">{errors.message}</span>}
                </div>
                <button type="submit" className="button">Написати нам</button>
            </form>
            {successMessage && <p className="success-message">{successMessage}</p>} {/* Показати повідомлення про успіх */}
        </div>
    );
};

export default Contact;
