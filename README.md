This is a starter template for [Learn Next.js](https://nextjs.org/learn).

## Basic functionality:
- [x] The user can login

### The manager
- [x] Can create users (personal trainers)
### A personal trainer
- [x] Can create users (clients)
- [x] Create a new workout program for a client
- [x] Can add new exercises to a workout program
- [x] An exercise has a name, a description, number of sets and number of repetitions or the time it should last.
- [x] See a list of workout programs.
- [x]  See a specific workout program.
- [x] See a list of clients.

### A client
- [x] Can see his/her workout program.
- [ ] If the user has more than one program then the app will show a list of programs, and the user can then select the program to be displayed.


## Test User Credentials

### Manager
    
    Email = "boss@fitness.moon",
    FirstName = "Manager",
    LastName = "The Boss",
    AccountType = Manager,
    Password = "asdfQWER",

### Personal trainers
    Email = "w@fit",
    FirstName = "Superwoman",
    LastName = "Venus",
    AccountType = PersonalTrainer,
    Password = "aZ"

### Clients
    Email = "c2@fit",
    FirstName = "Jane",
    LastName = "Doe",
    AccountType = Models.Enums.Role.Client,
    Password = "aA",
    PersonalTrainerId = 3
