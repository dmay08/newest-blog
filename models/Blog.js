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

    updatePost: function(id, name, body) {
        if (id < this.data.length && id >= 0) {
            let updatedPost = {
                name: name,
                body: body
            }
            this.data[id] = updatedPost
        }
    },

    deletePost: function(id) {
        if (id < this.data.length && id >= 0) {
            this.data.splice(id, 1)
        }
    }
    
}

module.exports = blogModel