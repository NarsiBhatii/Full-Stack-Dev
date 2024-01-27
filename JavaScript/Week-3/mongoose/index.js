const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://narsibhati31102:yqMM1nYLbem0sVb8@cluster0.mmf0dvk.mongodb.net/userNewApp?retryWrites=true&w=majority')

const User = mongoose.model('Users', {name: String, email: String, password: String})

const user = new User ({
    name: "narsi",
    email: 'narsi@gmail.com',
    password: '123456'
})

user.save()
