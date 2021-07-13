const url = 'http://localhost/assignment1/final-project/crm-yii2/backend/web/index.php/employee';

export async function getEmployee() {
    const response = await fetch(url);
    if (!response.ok) {
        alert('something went wrong');
    }
    const data = await response.json();
    return data;
}

export async function getSingleEmployee(id) {
    const response = await fetch(url + '/' + id);
    if (!response.ok) {
        alert('something went wrong');
    }
    const data = await response.json();
    return data;
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
    return rVal;
}

export async function updateEmployee(data, id) {
    const response = await fetch(url + '/' + id, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        alert('something went wrong');
    }
    const rVal = await response.json();
    return rVal;
}

export async function deleteEmployee(id) {
    const response = await fetch(url + '/' + id, {
        method: 'DELETE',
        headers: { 'Content-type': 'application/json' }
    });
    if (!response.ok) {
        alert('something went wrong');
    }
    const rVal = await response.json();
    return rVal;
}