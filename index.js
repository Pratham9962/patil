 // 1. Write code to get array of names from given array of users
        // 2. Get back only active users
        // 3. Sort users by age descending

        const users = [
            {
                id: 1,
                name: "Ajay",
                isActive: true,
                age: 20
            },
            {
                id: 2,
                name: "Akash",
                isActive: true,
                age: 18
            },
            {
                id: 3,
                name: "Fraz",
                isActive: true,
                age: 34
            },
            {
                id: 4,
                name: "Vipin",
                isActive: false,
                age: 30
            }
        ];

        // Solution 1 - level 1
        const names = [];
        for (i = 0; i < users.length; i++) {
            names.push(users[i].name)
        }
