import React, {useState} from 'react';
import '../Styles/Subscribe.css'; // Ensure the CSS path is correct

const Subscribe = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent page reload

        console.log("Form submitted");
        console.log("Email:", email);

        try {
            const response = await fetch('http://localhost:5000/form/email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    Email: email,
    
                }),
            });

            if (response.ok) {
                alert("Email sent successfully");
            } else {
                alert("Error sending email");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Error sending email");
        }
    };

    return (
        <div className="subscribe">
            <form onSubmit={handleSubmit}>
                <p>SUBSCRIBE</p>
                <input 
                    placeholder="Your e-mail" 
                    className="subscribe-input" 
                    name="email" 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <button className="submit-btn" type="submit">SUBMIT</button>
            </form>
        </div>
    );
};

export default Subscribe;
