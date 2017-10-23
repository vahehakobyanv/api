const express = require('express');
const app = express();

function user(id,name,username,password,gender,email)
{
    this.id = id;
    this.name = name;
    this.username = username;
    this.password = password;
    this.gender = gender;
    this.email = email;
}

let users = [
	{
        id: 1,
        name: 'Chlp'
    },
	{
        id: 2,
        name: 'Chlp1'
    }
];
let id = 3;
function addUser(id,name,username,password,gender,email) {
    let us = new user(id,name,username,password,gender,email);
    users.push(us);
}

function userDelete (id) {
	for(let i = 0; i < users.length; ++i) {
        if (users[i].id == id) {
            users.splice(id,1);
			return "delete was sucsefull";
        }
    }
    return null;
    
}

function getUser(id) {
    for(let i = 0; i < users.length; ++i) {
        if (users[i].id == id) {
            return users[i];
        }
    }
    return null;
}

function updateUser(id,name,username,password,gender,email) {
	for(let i = 0; i < users.length; ++i)
	{
		if (users[i].id == id) {
			users[id].name = name;
			users[id].username = username;
			users[id].password = password;
			users[id].gender = gender;
			users[id].email = email;
			return users[id];
		}
	}
    return null;
}

app.get('/api/users/:id', function (req, res) {
    let user = getUser(req.params.id);
    res.send(user || 'not found');
});

app.put('/api/users/p/:id', function (req, res) {
	let us = updateUser(req.params.id,"Hakobyan","hakobyan","pass",1,"Vahe");
    res.send(us || 'there are not user in your id');
});

app.delete('/api/users/d/:id', function (req, res) {
	let k =userDelete(req.params.id);
    res.send(k || "no found");
});
app.post('/api/users/po',function (req,res) {
	addUser(id++,"Vahe","vahe92","pass",1,"vahe@mail");
	let us = getUser(id-1);
    res.send(us);
});
app.listen(3000);