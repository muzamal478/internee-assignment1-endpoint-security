fetch('alerts.json')
    .then(response => response.json())
    .then(data => {
        // Display alerts
        const alertsDiv = document.getElementById('alerts');
        data.forEach(alert => {
            const p = document.createElement('p');
            p.textContent = `${alert.timestamp}: ${alert.message} (Severity: ${alert.severity})`;
            alertsDiv.appendChild(p);
        });

        // Create chart
        const ctx = document.getElementById('threatChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: data.map(a => a.timestamp),
                datasets: [{
                    label: 'Threat Alerts',
                    data: data.map(a => a.severity === 'High' ? 1 : 0.5),
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: { beginAtZero: true }
                }
            }
        });
    });