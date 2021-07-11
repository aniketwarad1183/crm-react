const url = 'http://localhost/assignment1/final-project/crm-yii2/backend/web/index.php/lead';

export async function getLead() {
    const response = await fetch(url);

    if (!response.ok) {
        alert('something went wrong');
    }

    const data = await response.json();

    const lead = [];
    data.items.forEach(item => {
        lead.push(item);
    });

    return lead;
}


export async function createLead(data) {
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