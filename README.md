# Miami_Bitcoin_Hackathon_Buidlgrounds

## Backend Routes

### GET `/address`
>Returns an BTC Wallet Address

Example Response:

```json
{
  "address": "57a0bb45e41ffd9f095fd6eaecaf0139a33f1eba"
}
```

### POST `/user`
>Returns a confirmation that an email was associated with a BTC Wallet

| Parameter | Type | Default | Description |
|---|---|---|---|
| email | `String` |  | User's email |
| address | `String` |  | BTC Wallet Address |

Example Request:

```javascript
axios.post('/user', {
  "email": "john.doe@gmail.com",
  "address": "57a0bb45e41ffd9f095fd6eaecaf0139a33f1eba"
}).then(function(response) {
  console.log("Response:", response.data)
}).catch(function(error) {
  console.log("Error:", error)
})
```

Example Response:

```json
{
  "success": true
}
```