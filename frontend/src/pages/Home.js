// import React from 'react';

// function Home() {
//     return (
//         <div>
//             <h2>Home</h2>
//             <p>Welcome to my portfolio website!</p>
//         </div>
//     );
// }

// export default Home;

import React, { useEffect, useState } from 'react';

function Home() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('http://127.0.0.1:5001/api/hello')
            .then((res) => res.json())
            .then((data) => setMessage(data.message));
    }, []);

    return (
        <div>
            <h2>Home</h2>
            <p>{message}</p>
        </div>
    );
}

export default Home;
