function calculateHours(startTime) {
            const startDate = new Date(startTime);
            const currentDate = new Date();
            const diffInMs = currentDate - startDate;
            const diffInHours = diffInMs / (1000 * 60 * 60);
            return diffInHours.toFixed(2); // returns the difference in hours, rounded to 2 decimal places
        }

        // Example start time (YYYY-MM-DDTHH:MM:SS format)
        const startTime = '2024-12-30T10:00:00';

        // Calculate hours and display in the element with id 'hourCounter'
        document.getElementById('counter').innerText = `Hours passed: ${calculateHours(startTime)}`;