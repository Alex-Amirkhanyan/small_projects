function users() {
    return [
        {
            id : 1,
            name : "Alex"
        },
        {
            id : 2,
            name : "Muxi"
        },
        {
            id : 3,
            name : "Pablo"
        }
    ]
} 
function friends() {
    return [
        {
            id : 1,
            user_id : 1,
            friend_id : 1,
            name : "friend 1"
        },
        {
            id : 2,
            user_id : 1,
            friend_id : 1,
            name : "friend 2"
        },
        {
            id : 3,
            user_id : 2,
            friend_id : 3,
            name : "friend 3"
        }
    ]
}
let loged_user = users()[0]
find.call(loged_user)

function find() {
    let similar_id = friends().filter(res => res.user_id == this.id)
    show_name.call(similar_id)
}
function show_name() {
    for(let i = 0; i < this.length; i++) {
        console.log(this[i].name)
    }
}