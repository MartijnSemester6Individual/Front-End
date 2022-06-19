import axios from 'axios';

const body = JSON.stringify({
    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "username": "test",
    "tag": "testuser",
    "email": "test@hotmail.com",
    "bio": "a software engineer",
    "website": "softwareengineer.com",
    "location": "America",
    "role": "ADMIN",
    "password": "test"
})

const url = `${process.env.NEXT_PUBLIC_API_URL}/auth/register`;

async function globalSetup() {
    // before we login, we need to register a user
    test.beforeAll(async ({ page }) => {
        axios.post(url, body, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
    })
}

export default globalSetup;