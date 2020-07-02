# LyfeLogger-BE
A restFul API utilizing node/express/PG
# **API User Guide**

|**Table of Contents:**|
|-|
|[Authentication Routes](#Authentication-Routes)|
|[User Routes](#User-Routes)|
|[task Routes](#task-Routes)|



### **Authentication Routes**

Server located at: not yet deployed

###  **User Registration**:

#### POST */life_logger/auth/users/register*

Creates a new user account.
Returns an object with user info and a JSON web token.

Request:
```javascript
{
  username: "testinguser1", // string (required), must be unique
  password: "testing123!", // string (required)
  email: "testinguser1@mail.gov", // string (required), must be unique

}
```
Response:

```javascript
   "data": {
        "token": "some_token",
        "user": {
            "username": "testinguser1",
            "email": "testing123!",
            "id": 1
        }
    }
```



### **User/ Login** 
[back to top](#api-user-guide)


#### POST */life_logger/auth/users/login*

Validates user's credentials.
Returns an object with user info and a JSON web token.

Request:
```javascript
{
  username: "firstnamelastname", // string (required)
  password: "testing123!", // string (required)
}
```

Response:
```javascript
   "data": {
        "token": "some_token",
        "user": {
            "username": "testinguser1",
            "email": "testing123!",
            "id": 1
        }
    }
```

## **User Routes**
[back to top](#api-user-guide)

#### GET */life_logger/auth/users/*

Returns an array of users. Available to all users.

Request:
```javascript
// No input needed
```
Response:
```
{
    "data": {
        "users": [
            {
                "id": 1,
                "username": "test1",
                "password": "test",
                "email": "test1@test.net"
            },
            {
                "id": 2,
                "username": "test2",
                "password": "test",
                "email": "test2@test.net"
            },
            {
                "id": 3,
                "username": "test3",
                "password": "test",
                "email": "test3@test.net"
            },
            {
                "id": 4,
                "username": "devinsre",
                "password": "$2a$12$QPN4.K4Pjr6hUvi7zFEVm.BB6vznHeBckLWExGxqgHCiRZnF4a5Hu",
                "email": "dev@deve14d"
            }
        ]
    }
}
```
#### GET */life_logger/auth/users/id*

Return a user object at the specified id.

Request:
```javascript
// No input needed
```
Response:
```
{
    "data": {
        "user": {
            "username": "test1",
            "email": "test1@test.net",
            "id": 1
        }
    }
}
```

#### delete */life_logger/auth/users/id*

deletes at the specified id.

Request:
```javascript
// No input needed , gets the ID from slug
```
Response:
```
status 200 
no body
```



#### put */life_logger/auth/users/id*

Updating a company profile. You must be logged in as owner of the company. Only company_name and description are required, other fields are optional. You cannot modify id, username, password, or user_type

Request:

```javascript

{
	"username":"thomas",
	"password": "1234",
	"email": "dev@devsaefase14dd"
}
// none are required. just request to change what you wants specifically
```
Response:
will return user object to show changes
```javascript
{
    "data": {
        "user": {
            "username": "thomas",
            "email": "dev@devsaefase14dd",
            "id": 7
        }
    }
}
```


## **Task Routes**
[back to top](#task-Routes)
