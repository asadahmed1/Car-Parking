# Carparking Validation on date
## Request:Post
## Route save user:
localhost:5000/api/usersave
### data:
{
	"name":"asad",
	"email":"asad4534656@gmail.com",
	"password":"skdjfjdhjbfjk"
}

# User slot booked one user can only book himself once in a day

## Request:Get
## route:localhost:5000/api/booked

### data:
{
	"userId":"5d6551de9c24d235785338ed",
	"arrivalDate" : "29/08/2019"
}

