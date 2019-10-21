const blogModel = {
    data: [
        {
            name: 'Fuck Med School',
            body: "Not worth it anymore. Too expensive, both from a social and mental health standpoint, as well as a financial standpoint."
        },
        {
            name: "Is Uber screwed?",
            body: "After some discussion with a friend of mine, I found myself agreeing that although their current business model isn't profitable, their eventual use of autonomous driving vehicles could be their saving grace"
        }
    ],

    addPost: function (name, body) {
        let newPost = {
            name: name,
            body: body
        }
        this.data.push(newPost)
    },

    getAllPosts: function() {
        return this.data
    },

    getPost: function(id) {
        return this.data[id]
    },

    // updatePost: function(id, name, body) {
    //     let updatedPost = {
    //         id: this.data.id,
    //         name: this.data.name,
    //         body: this.data,
    //     }
    //     // this.data.
    // },

    // deletePost: function(id) {

    // }
    
}

module.exports = blogModel