const url = 'http://localhost/assignment1/final-project/crm-yii2/backend/web/index.php/lead';

export async function getLead() {
    const response = await fetch(url);

    if (!response.ok) {
        alert('Something went wrong');
    }

    const data = await response.json();

    const lead = [];
    data.items.forEach(item => {
        lead.push(item);
    });

    return lead;
}

export async function getSingleLead(id) {
    const response = await fetch(url + '/' + id);
    if (!response.ok) {
        alert('Something went wrong!');
    }
    const data = await response.json();
    return data;
}

export async function createLead(data) {
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        alert('Something went wrong!');
    }

    const rVal = await response.json();
    return rVal;
}

export async function updateLead(data, id) {
    const response = await fetch(url + '/' + id, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        alert('Something went wrong!');
    }
    const rVal = await response.json();
    return rVal;
}

export async function deleteLead(id) {
    const response = await fetch(url + '/' + id, {
        method: 'DELETE',
        headers: { 'Content-type': 'application/json' }
    });
    if (!response.ok) {
        alert('Something went wrong!');
    }
    const rVal = await response.json();
    return rVal;
}