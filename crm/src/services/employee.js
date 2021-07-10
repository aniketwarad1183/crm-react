const url = 'http://localhost/assignment1/final-project/crm-yii2/backend/web/index.php/employee';

export async function getEmployee() {
    const response = await fetch(url);

    if (!response.ok) {
        alert('something went wrong');
    }

    const data = await response.json();

    const employee = [];
    data.items.forEach(item => {
        employee.push(item);
    });

    return employee;
}


export async function createEmployee(data) {
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        alert('something went wrong');
    }

    const rVal = await response.json();

    console.log(rVal);

    return rVal;
}